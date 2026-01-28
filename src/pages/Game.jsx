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
import salon from "../assets/salon.png";
import classe2 from "../assets/classe2.png";
import macdo from "../assets/macdo.png";
import entretien from "../assets/entretien.png";
import accueil from "../assets/accueil.png";
import chambre2 from "../assets/chambre2.png";
import messagerieEn from "../assets/messagerieEn.png";
import interfaceEn from "../assets/interface.png";
import appelEn from "../assets/appelEn.png";
import appliFr from "../assets/appliFr.png";
import message1 from "../assets/messagesEn/message1.png";
import message2 from "../assets/messagesEn/message2.png";
import message3 from "../assets/messagesEn/message3.png";
import message4 from "../assets/messagesEn/message4.png";
import message5 from "../assets/messagesEn/message5.png";
import message6 from "../assets/messagesEn/message6.png";
import message7 from "../assets/messagesEn/message7.png";
import message8 from "../assets/messagesEn/message8.png";
import message9 from "../assets/messagesEn/message9.png";
import message10 from "../assets/messagesEn/message10.png";
import message11 from "../assets/messagesEn/message11.png";
import message12 from "../assets/messagesEn/message12.png";
import message13 from "../assets/messagesEn/message13.png";
import message14 from "../assets/messagesEn/message14.png";
import message15 from "../assets/messagesEn/message15.png";
import message16 from "../assets/messagesEn/message16.png";
import message17 from "../assets/messagesEn/message17.png";
import message18 from "../assets/messagesEn/message18.png";
import message19 from "../assets/messagesEn/message19.png";
import message20 from "../assets/messagesEn/message20.png";
import message21 from "../assets/messagesEn/message21.png";
import message22 from "../assets/messagesEn/message22.png";
import message23 from "../assets/messagesEn/message23.png";
import message24 from "../assets/messagesEn/message24.png";
import delon from "../assets/delon.png";
import lucas from "../assets/lucas.png";
import parcoursup from "../assets/parcoursup.png";



const videoBg = "/video.mp4"; // Reference public video path
import "./Game.css";

// Character Imports
import char1 from "../assets/perso1/neutre_bouche_fermee.png";
import char2 from "../assets/perso2/neutre_bouche_fermee.png";
import char3 from "../assets/perso3/neutre_bouche_fermee.png";
import char4 from "../assets/perso4/neutre_bouche_fermee.png";
import char5 from "../assets/perso5/neutre_bouche_fermee.png";
import char6 from "../assets/perso6/neutre_bouche_fermee.png";


const characterAssets = import.meta.glob('../assets/perso*/*.png', { eager: true });
const soundAssets = import.meta.glob('../assets/messages/*.mp3', { eager: true });

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
  "/assets/video.mp4": videoBg, // Add video to map
  "/assets/macdo.png": macdo,
  "/assets/salon.png": salon,
  "/assets/classe2.png": classe2,
  "/assets/chambre2.png": chambre2,
  "/assets/accueil.png": accueil,
  "/assets/entretien.png": entretien,
  "/assets/messagerieEn.png": messagerieEn,
  "/assets/interface.png": interfaceEn,
  "/assets/appliFr.png": appliFr,
  "/assets/appelEn.png": appelEn,
  "/assets/messagesEn/message1.png": message1,
  "/assets/messagesEn/message2.png": message2,
  "/assets/messagesEn/message3.png": message3,
  "/assets/messagesEn/message4.png": message4,
  "/assets/messagesEn/message5.png": message5,
  "/assets/messagesEn/message6.png": message6,
  "/assets/messagesEn/message7.png": message7,
  "/assets/messagesEn/message8.png": message8,
  "/assets/messagesEn/message9.png": message9,
  "/assets/messagesEn/message10.png": message10,
  "/assets/messagesEn/message11.png": message11,
  "/assets/messagesEn/message12.png": message12,
  "/assets/messagesEn/message13.png": message13,
  "/assets/messagesEn/message14.png": message14,
  "/assets/messagesEn/message15.png": message15,
  "/assets/messagesEn/message16.png": message16,
  "/assets/messagesEn/message17.png": message17,
  "/assets/messagesEn/message18.png": message18,
  "/assets/messagesEn/message19.png": message19,
  "/assets/messagesEn/message20.png": message20,
  "/assets/messagesEn/message21.png": message21,
  "/assets/messagesEn/message22.png": message22,
  "/assets/messagesEn/message23.png": message23,
  "/assets/messagesEn/message24.png": message24,
  "/assets/parcoursup.png": parcoursup,
  "/assets/messages/meesage1.mp3": message1,


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

  // Audio State
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };


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

  // Reset scene to start when chapter changes (for replayability)
  useEffect(() => {
    setScene("start");
  }, [activeChapter]);

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
    // Stop any playing audio before changing scene
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
      setIsAudioPlaying(false);
    }

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
  // --- Sound Logic ---
  useEffect(() => {
    // Cleanup previous audio if it exists
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Sound Logic - simplified
    let soundPath = activeStep.sound; // The flattened step has the sound prop resolved

    if (soundPath) {
      // Resolve asset path if needed
      if (soundPath.startsWith('/assets/messages/')) {
        const relativeKey = `..${soundPath}`;
        if (soundAssets[relativeKey]) {
          soundPath = soundAssets[relativeKey].default;
        }
      }

      console.log("Attempting to play sound:", soundPath);
      const audio = new Audio(soundPath);

      // Event listeners for UI state
      const updatePlayState = () => setIsAudioPlaying(false);
      const updatePauseState = () => setIsAudioPlaying(false);
      const updatePlayingState = () => setIsAudioPlaying(true);
      const updateMetadata = () => setAudioDuration(audio.duration);
      const updateTime = () => setAudioCurrentTime(audio.currentTime);

      audio.addEventListener('ended', updatePlayState);
      audio.addEventListener('pause', updatePauseState);
      audio.addEventListener('play', updatePlayingState);
      audio.addEventListener('loadedmetadata', updateMetadata);
      audio.addEventListener('timeupdate', updateTime);

      audio.play().catch(e => {
        console.warn("Audio play failed/need interaction:", e);
        setIsAudioPlaying(false);
      });

      setCurrentAudio(audio);
      setIsAudioPlaying(true); // Assume it starts playing or will try to

      return () => {
        audio.removeEventListener('ended', updatePlayState);
        audio.removeEventListener('pause', updatePauseState);
        audio.removeEventListener('play', updatePlayingState);
        audio.removeEventListener('loadedmetadata', updateMetadata);
        audio.removeEventListener('timeupdate', updateTime);
        audio.pause();
        audio.currentTime = 0;
        setAudioDuration(0);
        setAudioCurrentTime(0);
      };
    } else {
      setCurrentAudio(null);
      setIsAudioPlaying(false);
      setAudioDuration(0);
      setAudioCurrentTime(0);
    }
  }, [scene, activeStep.sound]); // Only re-run if scene changes or sound file changes

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (currentAudio) {
      if (isAudioPlaying) {
        currentAudio.pause();
      } else {
        currentAudio.play();
      }
    }
  };

  const getCurrentBackground = () => {
    let bgPath = activeStep.background || rawSceneData.background || "";

    // Dynamic background logic
    if (bgPath === "/assets/img.png" && userData && userData.character) {
      const dynamicBgKey = `../assets/perso${userData.character}/macdo.png`;
      if (characterAssets[dynamicBgKey]) {
        return characterAssets[dynamicBgKey].default;
      }
    }

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

              <div className="dialogue-content">
                <p className={`dialogue-text ${activeStep.font ? `font-${activeStep.font}` : ''}`} style={activeStep.color ? { color: activeStep.color } : {}}>
                  {(() => {
                    const txt = getCurrentText();
                    return typeof txt === 'object' ? txt.text : txt;
                  })()}
                </p>

                {/* Audio Control Button */}
                {currentAudio && (
                  <div className="audio-controls" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                    <button
                      className="audio-control-btn"
                      onClick={toggleAudio}
                      title={isAudioPlaying ? "Pause" : "Play"}
                    >
                      {isAudioPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none" /><path d="M8 5v14l11-7z" /></svg>
                      )}
                    </button>
                    <span className="audio-timer" style={{ fontSize: '0.9rem', color: '#ddd' }}>
                      {formatTime(audioCurrentTime)} / {formatTime(audioDuration)}
                    </span>
                  </div>
                )}
              </div>

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
              "/assets/delon.png": delon,
              "/assets/lucas.png": lucas,
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


