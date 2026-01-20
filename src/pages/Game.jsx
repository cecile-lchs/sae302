import { useState, useEffect } from "react";
import story from "../story.json";
import background from "../assets/background.png";
import parametresBg from "../assets/parametres.png";
import characterImg from "../assets/person_prin.png";

// Character Imports
import char1 from "../assets/perso1/neutre_bouche_fermee.png";
import char2 from "../assets/perso2/neutre_bouche_fermee.png";
import char3 from "../assets/perso3/neutre_bouche_fermee.png";
import fullscreenIcon from "../assets/fullscreen.svg";
import fullscreenExitIcon from "../assets/close_fullscreen.svg";

const characterAssets = import.meta.glob('../assets/perso*/*.png', { eager: true });

const CHARACTERS = [
  { id: 1, src: char1, name: "Adventurer" },
  { id: 2, src: char2, name: "Mage" },
  { id: 3, src: char3, name: "Hacker" },
  { id: 4, src: char1, name: "Explorer" },
  { id: 5, src: char2, name: "Sorcerer" },
  { id: 6, src: char3, name: "Cyber" },
];

const PROLOGUE_TEXTS = [
  "Bienvenue dans une nouvelle ère...",
  "Le monde tel que vous le connaissez a changé.",
  "Vos choix détermineront le destin de l'humanité.",
  "Préparez-vous..."
];

const backgrounds = {
  "/assets/background.png": background,
  "/assets/parametres.png": parametresBg
};

export default function Game({ language, userData, setUserData, activeChapter = "chapter1", onChapterComplete }) {
  // Game Phases: 'loading', 'selection', 'pseudo', 'context', 'playing'
  const [phase, setPhase] = useState("loading");
  const [tempChar, setTempChar] = useState(null);
  const [tempPseudo, setTempPseudo] = useState("");

  // Context Phase State
  const [contextIndex, setContextIndex] = useState(0);

  // Visual Novel State
  const [scene, setScene] = useState("start");
  const [showChoices, setShowChoices] = useState(false);
  const [dialogueIndex, setDialogueIndex] = useState(0);

  // Fullscreen Logic
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
  }, []);

  // Helper to flatten the dialogue logic
  // Returns an array of step objects: { text, background, character, speaker, sound }
  const getFlattenedDialogue = (sceneData) => {
    if (!sceneData) return [];

    const rootProps = {
      background: sceneData.background,
      character: sceneData.character,
      speaker: sceneData.speaker,
      sound: sceneData.sound,
      playerExpression: sceneData.playerExpression
    };

    let flatList = [];

    // Helper to process an item (string or object) and add to list
    const processItem = (item, parentProps) => {
      if (typeof item === 'string') {
        flatList.push({ ...parentProps, text: item });
      } else if (typeof item === 'object') {
        const itemProps = { ...parentProps, ...item };
        if (Array.isArray(item.text)) {
          // Recursively process nested arrays
          item.text.forEach(subText => processItem(subText, itemProps));
        } else {
          // It's a single item object
          flatList.push(itemProps);
        }
      }
    };

    // Main entry
    if (Array.isArray(sceneData.text)) {
      sceneData.text.forEach(item => processItem(item, rootProps));
    } else {
      processItem(sceneData.text, rootProps);
    }

    return flatList;
  };

  // Resolve the current chapter data
  const currentChapterData = story[activeChapter] || story["chapter1"];
  const currentScenes = currentChapterData.scenes || {};

  // Memoize the queue for the current scene
  // We strictly re-calc ONLY when logical scene changes or chapter changes
  const dialogueQueue = getFlattenedDialogue(currentScenes[scene]);

  // Safe access to current step
  const activeStep = dialogueQueue[dialogueIndex] || {};

  useEffect(() => {
    // If user already has data, check if we should skip to playing
    if (userData && userData.character && userData.pseudo) {
      setPhase("playing");
    } else {
      setPhase("selection");
    }
  }, []);

  // Reset dialogue index when scene changes
  useEffect(() => {
    setDialogueIndex(0);
    setShowChoices(false);
  }, [scene]);

  // --- Handlers ---

  const handleCharSelect = (charId) => {
    setTempChar(charId);
    setPhase("pseudo");
  };

  const handlePseudoSubmit = (e) => {
    e.preventDefault();
    if (tempPseudo.trim() !== "") {
      setUserData({
        character: tempChar,
        pseudo: tempPseudo
      });
      // Go to Context instead of playing immediately
      setPhase("context");
    }
  };

  const handleContextClick = () => {
    if (contextIndex < PROLOGUE_TEXTS.length - 1) {
      setContextIndex(contextIndex + 1);
    } else {
      setPhase("playing");
    }
  };

  // VN Logic
  // const current = story[scene]; // REPLACED by dialogueQueue and activeStep usage
  const rawSceneData = currentScenes[scene] || {};

  const handleSceneChange = (nextScene) => {
    setScene(nextScene);
    // showChoices and dialogueIndex handled by useEffect
  };

  const handleDialogueAdvance = () => {
    // Check key length of our flattened queue
    if (dialogueIndex < dialogueQueue.length - 1) {
      setDialogueIndex(dialogueIndex + 1);
    } else {
      // End of text, check for choices
      if (rawSceneData.choices) {
        setShowChoices(true);
      } else {
        // End of chapter/scene (no next choices matches 'none')
        console.log("End of chapter reached");
        if (onChapterComplete) {
          onChapterComplete();
        }
      }
    }
  };

  const getCurrentText = () => {
    return activeStep.text || "";
  };

  // --- Sound Logic ---
  useEffect(() => {
    // Sound Logic - simplified
    const soundPath = activeStep.sound; // The flattened step has the sound prop resolved

    if (soundPath) {
      console.log("Attempting to play sound:", soundPath);
      const audio = new Audio(soundPath);
      audio.play().catch(e => console.warn("Audio play failed/need interaction:", e));
    }
  }, [scene, dialogueIndex]);

  const getCurrentBackground = () => {
    const bgPath = activeStep.background || rawSceneData.background; // Fallback to raw if logic fails? 
    // actually getFlattenedDialogue merges root props, so activeStep.background should handle it.
    // unless activeStep is empty?
    return backgrounds[bgPath] || bgPath;
  };

  const getCurrentSpeaker = () => {
    return activeStep.speaker;
  };

  // --- Renders ---

  if (phase === "selection") {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>{language === 'fr' ? "CHOISISSEZ VOTRE PERSONNAGE" : "CHOOSE YOUR CHARACTER"}</h1>
        <div style={styles.grid}>
          {CHARACTERS.map((char) => (
            <div
              key={char.id}
              onClick={() => handleCharSelect(char.id)}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.borderColor = "#fdb933";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              <img src={char.src} alt={char.name} style={styles.charImg} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (phase === "pseudo") {
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>{language === 'fr' ? "ENTREZ VOTRE PSEUDO" : "ENTER YOUR NICKNAME"}</h1>
        <form onSubmit={handlePseudoSubmit} style={styles.form}>
          <input
            type="text"
            value={tempPseudo}
            onChange={(e) => setTempPseudo(e.target.value)}
            style={styles.input}
            placeholder="..."
            autoFocus
          />
          <button type="submit" style={styles.button}>
            {language === 'fr' ? "CONFIRMER" : "CONFIRM"}
          </button>
        </form>
      </div>
    );
  }

  // CONTEXT PHASE
  if (phase === "context") {
    return (
      <div style={styles.contextContainer} onClick={handleContextClick}>
        <p style={styles.contextText}>
          {PROLOGUE_TEXTS[contextIndex]}
        </p>
        <div style={styles.clickHint}>
          {language === 'fr' ? "(Cliquez pour continuer...)" : "(Click to continue...)"}
        </div>
      </div>
    );
  }

  // PLAYING PHASE (Existing Game Logic)
  return (
    <div style={{
      flex: 1,
      backgroundImage: `url(${getCurrentBackground()})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0",
      color: "white",
      position: "relative",
      width: "100%",
      height: "100vh"
    }}>

      {/* Interaction Layer */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        pointerEvents: "none"
      }}>

        {/* Fullscreen Toggle Button */}
        <div
          onClick={toggleFullScreen}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 100,
            cursor: "pointer",
            pointerEvents: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s ease"
          }}
          title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.4)"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)"}
        >
          <img
            src={isFullscreen ? fullscreenExitIcon : fullscreenIcon}
            alt="Fullscreen Toggle"
            style={{ width: "30px", height: "30px", display: "block" }}
          />
        </div>

        {/* PLAYER CHARACTER (Bottom Left) */}
        {userData && userData.character && (
          <img
            src={(() => {
              const charId = userData.character;
              // Default to Neutre1 if no expression specified
              const expression = activeStep.playerExpression || "Neutre1";

              // Try to find the dynamic asset: ../assets/perso{id}/{expression}.png
              const dynamicKey = `../assets/perso${charId}/${expression}.png`;

              if (characterAssets[dynamicKey]) {
                return characterAssets[dynamicKey].default;
              }

              // Fallback to the static CHARACTERS array if dynamic asset not found
              return CHARACTERS.find(c => c.id === charId)?.src;
            })()}
            alt="Player"
            style={{
              position: "absolute",
              bottom: "0",
              left: "20px",
              height: "50vh", // Specific height for player
              zIndex: 30,
              objectFit: "contain",
              filter: "drop-shadow(2px 2px 5px rgba(0,0,0,0.4))",
              transition: "src 0.2s ease"
            }}
          />
        )}

        {showChoices && rawSceneData.choices ? (
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: "50%",
            maxWidth: "600px",
            pointerEvents: "auto",
            marginBottom: "15vh"
          }}>
            {rawSceneData.choices.map((choice, i) => (
              <button
                key={i}
                onClick={() => handleSceneChange(choice.next)}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  border: "none",
                  borderRadius: "50px",
                  padding: "20px 30px",
                  fontSize: "1.1rem",
                  color: "#333",
                  fontWeight: "600",
                  fontStyle: "italic",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s, background 0.2s",
                  width: "100%",
                  textAlign: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                }}
              >
                {choice.label}
              </button>
            ))}
          </div>
        ) : (
          <div
            onClick={handleDialogueAdvance}
            style={{
              position: "relative", // Needed for Name Tag absolute positioning
              pointerEvents: "auto",
              cursor: (rawSceneData.choices || (dialogueIndex < dialogueQueue.length - 1)) ? "pointer" : "default",
              background: "rgba(255, 255, 255, 0.95)",
              color: "#333",
              padding: "30px 100px",
              borderRadius: "40px",
              margin: "0 auto",
              marginBottom: "5vh",
              width: "80%",
              maxWidth: "800px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              fontFamily: "'Segoe UI', sans-serif",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "120px"
            }}
          >
            {/* NAME TAG */}
            {(() => {
              const speaker = getCurrentSpeaker();
              // Condition: Show if speaker exists AND is not "Moi" (or matches player pseudo if we wanted, but logic is 'Moi' for now)
              if (speaker && speaker !== "Moi") {
                return <div className="name-tag">{speaker}</div>;
              }
              return null;
            })()}

            <p style={{ margin: 0, fontStyle: "italic", fontWeight: 500, paddingLeft: "70px" }}>
              {(() => {
                const txt = getCurrentText();
                return typeof txt === 'object' ? txt.text : txt;
              })()}
            </p>
            {/* Show hint if there are more lines OR if there are choices next */}{
              ((rawSceneData.choices) || (dialogueIndex < dialogueQueue.length - 1)) && (
                <div style={{
                  fontSize: "0.8rem",
                  color: "#666",
                  marginTop: "10px",
                  textAlign: "right",
                  alignSelf: "flex-end"
                }}>
                  (Cliquez pour continuer)
                </div>
              )}
          </div>
        )}
      </div>

      {activeStep.character && activeStep.character !== 'none' && (
        <img
          src={(() => {
            // simplified lookup
            const charPath = activeStep.character;

            // 3. Map string paths to imported assets
            // Note: Ensure all employed paths in story.json match these keys or strict logic
            const charMap = {
              "/assets/person_prin.png": characterImg,
              "/assets/char1.png": char1,
              "/assets/char2.png": char2,
              "/assets/char3.png": char3,
            };

            return charMap[charPath] || charPath;
          })()}
          alt="Character"
          style={{
            position: "absolute",
            bottom: "160px",
            right: "25%", // Moved to Right
            height: "60vh", // Larger for NPC
            zIndex: 0,
            objectFit: "contain",
            filter: "drop-shadow(2px 2px 5px rgba(0,0,0,0.4))",
            pointerEvents: "none"
          }}
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffcf4",
    color: "#2c3e50",
    height: "100vh",
    width: "100%"
  },
  contextContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    height: "100vh",
    width: "100%",
    cursor: "pointer",
    padding: "2rem",
    textAlign: "center"
  },
  contextText: {
    fontSize: "2rem",
    maxWidth: "800px",
    lineHeight: "1.5",
    animation: "fadeIn 1s ease-in"
  },
  clickHint: {
    position: "absolute",
    bottom: "50px",
    fontSize: "1rem",
    opacity: 0.7
  },
  header: {
    marginBottom: "40px",
    color: "#fdb933",
    fontSize: "2rem"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    maxWidth: "800px"
  },
  card: {
    width: "150px",
    height: "150px",
    borderRadius: "15px",
    overflow: "hidden",
    cursor: "pointer",
    border: "3px solid transparent",
    transition: "all 0.3s ease",
    background: "#34495e"
  },
  charImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  input: {
    padding: "15px",
    fontSize: "1.2rem",
    borderRadius: "10px",
    border: "2px solid #fdb933",
    background: "rgba(0,0,0,0.05)",
    color: "#2c3e50",
    textAlign: "center",
    width: "300px"
  },
  button: {
    padding: "15px 30px",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#fdb933",
    color: "#2c3e50",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer"
  }
};
