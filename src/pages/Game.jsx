import { useState, useEffect } from "react";
import storyFr from "../storyFr.json";
import storyEn from "../storyEn.json";
import background from "../assets/background.png";
import parametresBg from "../assets/parametres.png";
import amphi from "../assets/amphi.png";
import classe from "../assets/classe.png";
import chambre from "../assets/chambre.png";
import bar from "../assets/bar.png";
import characterImg from "../assets/person_prin.png";
import DisclaimerPopup from "../components/DisclaimerPopup";
import prof from "../assets/prof.png";
import directeur from "../assets/directeur.png";
import voisin from "../assets/voisin.png";
import papa from "../assets/pere2/neutre_bouche_fermee.png";
import maman from "../assets/mere2/neutre.png";
import messagerie from "../assets/messagerie.png";
import appli from "../assets/appli.png";
import appart from "../assets/appart.png";
import appel from "../assets/appel.png";
import job from "../assets/job.png";
import salon from "../assets/salon.png";
import classe2 from "../assets/classe2.png";
import macdo from "../assets/macdo.png";
import entretien from "../assets/entretien.png";
import accueil from "../assets/accueil.png";
import chambre2 from "../assets/chambre2.png";
import messagerieEn from "../assets/messagerieEn.png";
import appelEn from "../assets/appelEn.png";
import jobEn from "../assets/jobEn.png";
import appliEn from "../assets/appliEn.png";
import videoBg from "../assets/video.mp4"; // Import video
import "./Game.css";

// Character Imports
import char1 from "../assets/perso1/neutre_bouche_fermee.png";
import char2 from "../assets/perso2/neutre_bouche_fermee.png";
import char3 from "../assets/perso3/neutre_bouche_fermee.png";
import char4 from "../assets/perso4/neutre_bouche_fermee.png";
import char5 from "../assets/perso5/neutre_bouche_fermee.png";
import char6 from "../assets/perso6/neutre_bouche_fermee.png";


const characterAssets = import.meta.glob('../assets/perso*/*.png', { eager: true });

const CHARACTERS = [
  { id: 1, src: char1, name: "Adventurer" },
  { id: 2, src: char2, name: "Mage" },
  { id: 3, src: char3, name: "Hacker" },
  { id: 4, src: char4, name: "Explorer" },
  { id: 5, src: char5, name: "Sorcerer" },
  { id: 6, src: char6, name: "Cyber" },
];

const PROLOGUE_TEXTS = {
  fr: [
    "C’est la rentrée.",
    "Après le lycée, tu as accepté une place dans une université d’informatique à Orléans.",
    "Aujourd’hui, tu assistes à ta première réunion de rentrée.",
    "Autour de toi, des étudiants que tu ne connais pas encore, des enseignants, de nouvelles salles, une nouvelle vie qui commence.",
    "C’est ici que ton parcours débute.",
    "À toi de faire tes choix et de tracer ton propre chemin."
  ],
  en: [
    "It's the start of the school year.",
    "After high school, you accepted a spot at a computer science university in Orléans.",
    "Today, you are attending your first introductory meeting.",
    "Around you are students you don't know yet, teachers, new classrooms, a new life beginning.",
    "This is where your journey starts.",
    "It's up to you to make your choices and carve your own path."
  ]
};

const backgrounds = {
  "/assets/background.png": background,
  "/assets/parametres.png": parametresBg,
  "/assets/amphi.png": amphi,
  "/assets/classe.png": classe,
  "/assets/chambre.png": chambre,
  "/assets/bar.png": bar,
  "/assets/messagerie.png": messagerie,
  "/assets/appli.png": appli,
  "/assets/appart.png": appart,
  "/assets/appel.png": appel,
  "/assets/job.png": job,
  "/assets/video.mp4": videoBg, // Add video to map
  "/assets/macdo.png": macdo,
  "/assets/salon.png": salon,
  "/assets/class2.png": classe2,
  "/assets/chambre2.png": chambre2,
  "/assets/accueil.png": accueil,
  "/assets/entretien.png": entretien,
  "/assets/messagerieEn.png": messagerieEn,
  "/assets/appliEn.png": appliEn,
  "/assets/jobEn.png": jobEn,
  "/assets/appelEn.png": appelEn


};
export default function Game({ language, userData, setUserData, activeChapter = "chapter1", onChapterComplete, onHistoryUpdate, onTutorialEvent }) {
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
  const [videoEnded, setVideoEnded] = useState(false);


  // Helper to flatten the dialogue logic
  // Returns an array of step objects: {text, background, character, speaker, sound}
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
  const story = language === 'en' ? storyEn : storyFr;
  const currentChapterData = story[activeChapter] || story["chapter1"];
  const currentScenes = currentChapterData.scenes || {};

  // Memoize the queue for the current scene
  // We strictly re-calc ONLY when logical scene changes or chapter changes
  const dialogueQueue = getFlattenedDialogue(currentScenes[scene]);

  // Safe access to current step
  const activeStep = dialogueQueue[dialogueIndex] || {};

  // --- Tutorial Signals ---
  useEffect(() => {
    if (onTutorialEvent) {
      if (phase === 'selection') {
        // Wait a bit for render
        setTimeout(() => onTutorialEvent('selection-ready'), 500);
      }
      if (phase === 'playing' && activeStep && activeStep.text && !showChoices) {
        // Signal dialogue is showing
        setTimeout(() => onTutorialEvent('dialogue-ready'), 500);
      }
      if (phase === 'playing' && showChoices) {
        setTimeout(() => onTutorialEvent('choice-ready'), 500);
      }
    }
  }, [phase, showChoices, activeStep, onTutorialEvent]);

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
    setVideoEnded(false); // Reset video state on scene change
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
      // Go to Disclaimer instead of context immediately
      setPhase("disclaimer");
    }
  };

  const handleDisclaimerContinue = () => {
    setPhase("context");
  };

  const handleContextClick = () => {
    const currentTextArray = PROLOGUE_TEXTS[language] || PROLOGUE_TEXTS['fr'];
    if (contextIndex < currentTextArray.length - 1) {
      setContextIndex(contextIndex + 1);
    } else {
      setPhase("playing");
    }
  };

  // VN Logic
  // const current = story[scene]; // REPLACED by dialogueQueue and activeStep usage
  const rawSceneData = currentScenes[scene] || {};

  const handleSceneChange = (nextScene, choiceLabel) => {

    // Log choice if provided
    if (choiceLabel && onHistoryUpdate) {
      onHistoryUpdate({ type: 'choice', text: choiceLabel });
    }

    setScene(nextScene);
    // showChoices and dialogueIndex handled by useEffect
  };

  const handleDialogueAdvance = () => {
    // Log current dialogue before advancing
    if (activeStep && activeStep.text && onHistoryUpdate) {
      // Only log if it's a string (visual novel text usually is)
      const speakerName = activeStep.speaker || (activeStep.character === "none" ? "Narrator" : "???");
      const actualText = typeof activeStep.text === 'object' ? activeStep.text.text : activeStep.text;

      onHistoryUpdate({
        type: 'dialogue',
        speaker: speakerName === "Moi" && userData ? userData.pseudo : speakerName,
        text: actualText
      });
    }

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
          onChapterComplete(activeChapter);
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

      <div className="game-container">
        <h1 className="selection-header">{language === 'fr' ? "CHOISISSEZ VOTRE PERSONNAGE" : "CHOOSE YOUR CHARACTER"}</h1>
        <div id="char-selection-grid" className="char-grid">
          {CHARACTERS.map((char) => (
            <div
              key={char.id}
              onClick={() => handleCharSelect(char.id)}
              className="char-card"
            // Keep hover inline or move to CSS (it is in CSS now as :hover)
            >
              <img src={char.src} alt={char.name} className="char-img" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (phase === "pseudo") {
    return (

      <div className="game-container">
        <h1 className="selection-header">{language === 'fr' ? "ENTREZ VOTRE PSEUDO" : "ENTER YOUR NICKNAME"}</h1>
        <form onSubmit={handlePseudoSubmit} className="pseudo-form">
          <input
            type="text"
            value={tempPseudo}
            onChange={(e) => setTempPseudo(e.target.value)}
            className="pseudo-input"
            placeholder="..."
            autoFocus
          />
          <button type="submit" className="pseudo-button">
            {language === 'fr' ? "CONFIRMER" : "CONFIRM"}
          </button>
        </form>
      </div>
    );
  }

  if (phase === "disclaimer") {
    return (
      <DisclaimerPopup
        onContinue={handleDisclaimerContinue}
        language={language}
      />
    );
  }

  // CONTEXT PHASE
  if (phase === "context") {
    return (

      <div className="context-container" onClick={handleContextClick}>
        <p className="context-text">
          {(PROLOGUE_TEXTS[language] || PROLOGUE_TEXTS['fr'])[contextIndex]}
        </p>
        <div className="click-hint">
          {language === 'fr' ? "(Cliquez pour continuer...)" : "(Click to continue...)"}
        </div>
      </div>
    );
  }

  // PLAYING PHASE (Existing Game Logic)
  const currentBg = getCurrentBackground();
  const isVideo = typeof currentBg === 'string' && currentBg.endsWith('.mp4');

  return (
    <div style={{
      flex: 1,
      backgroundImage: isVideo ? 'none' : `url(${currentBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0",
      color: "white",
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden"
    }}>

      {/* Background Video Layer */}
      {isVideo && (
        <video
          src={currentBg}
          autoPlay
          controls // Add controls
          onEnded={() => setVideoEnded(true)} // Enable continue when done
          // muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "30%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: 15 // Ensure it is clickable
          }}
        />
      )}

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
        // Pass through events if video is playing so controls are accessible
        // Block events if text is present
        // Enable events if video ended (to click and continue)
        pointerEvents: (getCurrentText() || (isVideo && !videoEnded)) ? "none" : "auto",
        cursor: (getCurrentText() || (isVideo && !videoEnded)) ? "default" : "pointer"
      }}
        onClick={(getCurrentText() || (isVideo && !videoEnded)) ? undefined : handleDialogueAdvance}
      >



        {/* PLAYER CHARACTER (Bottom Left) */}
        {userData && userData.character && getCurrentText() && ( // Hide player if no text
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
          <div
            id="choice-container"
            style={{
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
                onClick={(e) => {
                  e.stopPropagation();
                  handleSceneChange(choice.next, choice.label);
                }}
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
          getCurrentText() && ( // Only show dialogue box if there is text
            <div
              id="dialogue-box"
              onClick={(e) => {
                e.stopPropagation(); // Handle click locally
                handleDialogueAdvance();
              }}
              className={`dialogue-box ${rawSceneData.choices || (dialogueIndex < dialogueQueue.length - 1) ? 'clickable' : 'default-cursor'}`}
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

              <p className={`dialogue-text ${activeStep.font ? `font-${activeStep.font}` : ''}`} style={activeStep.color ? { color: activeStep.color } : {}}>
                {(() => {
                  const txt = getCurrentText();
                  return typeof txt === 'object' ? txt.text : txt;
                })()}
              </p>
              {/* Show hint if there are more lines OR if there are choices next */}{
                ((rawSceneData.choices) || (dialogueIndex < dialogueQueue.length - 1)) && (
                  <div className="dialogue-hint">
                    {language === 'fr' ? "(Cliquez pour continuer)" : "(Click to continue)"}
                  </div>
                )}
            </div>
          )
        )}
      </div>

      {activeStep.character && activeStep.character !== 'none' && getCurrentText() && ( // HIDE NPC IF NO TEXT
        <img
          src={(() => {
            // simplified lookup
            const charPath = activeStep.character;

            // 3. Map string paths to imported assets
            // Note: Ensure all employed paths in story.json match these keys or strict logic
            const charMap = {
              "/assets/person_prin.png": characterImg,
              "/assets/directeur.png": directeur,
              "/assets/voisin.png": voisin,
              "/assets/prof.png": prof,
              "/assets/papa.png": papa,
              "/assets/maman.png": maman,
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


