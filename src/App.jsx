import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import Game from "./pages/Game";
import Cinema from "./pages/Cinema";
import Settings from "./pages/Settings";
import EmailWidget from "./components/EmailWidget";
import SettingsModal from "./components/SettingsModal";
import PageTransition from "./components/PageTransition";
import PortraitOverlay from "./components/PortraitOverlay";
import FullScreenPopup from "./components/FullScreenPopup";
import TopControls from "./components/TopControls";

import HistoryModal from "./components/HistoryModal";
import TutorialOverlay from "./components/TutorialOverlay"; // NEW

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showSettings, setShowSettings] = useState(false);
  const [hasNotification, setHasNotification] = useState(false); // State for email notification
  const [language, setLanguage] = useState("en"); // 'fr' or 'en'
  const [isTransitioning, setIsTransitioning] = useState(false); // Transition state

  // New Global User State
  const [userData, setUserData] = useState({
    pseudo: "",
    character: null
  });

  // Chapter State
  const [unlockedChapters, setUnlockedChapters] = useState(["chapter1"]);
  const [activeChapter, setActiveChapter] = useState("chapter1");

  // History State
  const [showHistory, setShowHistory] = useState(false);
  const [gameHistory, setGameHistory] = useState({
    conversations: [],
    choices: []
  });

  // Tutorial State
  const [tutorialStatus, setTutorialStatus] = useState('idle'); // idle, intro, waiting-dialogue, dialogue, waiting-choice, choice, completed
  const [tutorialStep, setTutorialStep] = useState(0);
  // We track completion to not show again in same session (or use localStorage for perm)
  const [tutorialCompleted, setTutorialCompleted] = useState({ intro: false, dialogue: false, choice: false });

  // TUTORIAL STEPS DEFINITION
  const TUTORIAL_INTRO = [
    { targetId: '#nav-home', position: 'right', content: { fr: "Voici l'accueil. Vous pouvez y revenir à tout moment.", en: "This is Home. You can return here anytime." } },
    { targetId: '#nav-docs', position: 'right', content: { fr: "Consultez la documentation ici.", en: "Check the documentation here." } },
    { targetId: '#nav-cinema', position: 'right', content: { fr: "Revoyez vos chapitres débloqués au Cinéma.", en: "Review unlocked chapters in Cinema." } },
    { targetId: '#btn-history', position: 'bottom', content: { fr: "Accédez à l'historique de vos conversations et choix ici (visible en jeu).", en: "Access conversation and choice history here (visible in-game)." } },
    { targetId: '#btn-docs', position: 'bottom', content: { fr: "Un accès rapide à la documentation.", en: "Quick access to documentation." } },
    { targetId: '#btn-fullscreen', position: 'bottom', content: { fr: "Basculez en plein écran pour une meilleure immersion.", en: "Toggle fullscreen for better immersion." } },
    { targetId: '#char-selection-grid', position: 'left', content: { fr: "C'est l'heure de choisir votre avatar !", en: "Time to choose your avatar!" } },
  ];

  const TUTORIAL_DIALOGUE = [
    { targetId: '#dialogue-box', position: 'top', content: { fr: "Voici la zone de dialogue. Cliquez pour avancer.", en: "This is the dialogue box. Click to advance." } }
  ];

  const TUTORIAL_CHOICE = [
    { targetId: '#choice-container', position: 'left', content: { fr: "À vous de jouer ! Vos choix influencent l'histoire.", en: "Your turn! Your choices impact the story." } }
  ];

  // Start Tutorial when entering game if intro not done
  useEffect(() => {
    if (currentPage === 'game' && !tutorialCompleted.intro && tutorialStatus === 'idle') {
      // Small delay to let UI mount
      setTimeout(() => {
        setTutorialStatus('intro');
        setTutorialStep(0);
      }, 1000);
    }
  }, [currentPage, tutorialCompleted.intro, tutorialStatus]);

  const handleTutorialEvent = (event) => {
    if (event === 'dialogue-ready' && !tutorialCompleted.dialogue && tutorialStatus === 'waiting-dialogue') {
      setTutorialStatus('dialogue');
      setTutorialStep(0);
    }
    if (event === 'choice-ready' && !tutorialCompleted.choice && (tutorialStatus === 'waiting-choice' || tutorialStatus === 'waiting-dialogue')) {
      setTutorialStatus('choice');
      setTutorialStep(0);
    }
  };

  const handleTutorialNext = () => {
    let currentSteps = [];
    if (tutorialStatus === 'intro') currentSteps = TUTORIAL_INTRO;
    if (tutorialStatus === 'dialogue') currentSteps = TUTORIAL_DIALOGUE;
    if (tutorialStatus === 'choice') currentSteps = TUTORIAL_CHOICE;

    if (tutorialStep < currentSteps.length - 1) {
      setTutorialStep(tutorialStep + 1);
    } else {
      // Finished current sequence
      if (tutorialStatus === 'intro') {
        setTutorialCompleted(prev => ({ ...prev, intro: true }));
        setTutorialStatus('waiting-dialogue');
      } else if (tutorialStatus === 'dialogue') {
        setTutorialCompleted(prev => ({ ...prev, dialogue: true }));
        setTutorialStatus('waiting-choice');
      } else if (tutorialStatus === 'choice') {
        setTutorialCompleted(prev => ({ ...prev, choice: true }));
        setTutorialStatus('completed');
      }
    }
  };

  const handleTutorialSkip = () => {
    // Skip marks current sequence as done
    if (tutorialStatus === 'intro') {
      setTutorialCompleted(prev => ({ ...prev, intro: true }));
      setTutorialStatus('waiting-dialogue');
    } else if (tutorialStatus === 'dialogue') {
      setTutorialCompleted(prev => ({ ...prev, dialogue: true }));
      setTutorialStatus('waiting-choice');
    } else if (tutorialStatus === 'choice') {
      setTutorialCompleted(prev => ({ ...prev, choice: true }));
      setTutorialStatus('completed');
    }
  };


  // Temporary testing function: toggle notification when clicking the email icon
  const handleEmailClick = () => {
    setHasNotification(!hasNotification);
  };


  const handleTransitionNavigate = (page) => {
    if (page === currentPage) {
      if (page === 'settings') setShowSettings(true);
      return;
    }

    if (page === "settings") {
      setShowSettings(true);
      return;
    }

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPage(page);
      setShowSettings(false);
      setIsTransitioning(false);
    }, 1100);
  };

  const handleNavigate = (page) => {
    handleTransitionNavigate(page);
  };

  // History handling
  const handleHistoryUpdate = (item) => {
    if (item.type === 'dialogue') {
      setGameHistory(prev => ({
        ...prev,
        conversations: [...prev.conversations, item]
      }));
    } else if (item.type === 'choice') {
      setGameHistory(prev => ({
        ...prev,
        choices: [...prev.choices, item]
      }));
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const handleChapterComplete = (completedChapterId) => {
    // Logic to unlock the next chapter
    const chapterOrder = ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"];
    const currentIndex = chapterOrder.indexOf(completedChapterId);

    if (currentIndex !== -1 && currentIndex < chapterOrder.length - 1) {
      const nextChapter = chapterOrder[currentIndex + 1];
      if (!unlockedChapters.includes(nextChapter)) {
        setUnlockedChapters(prev => [...prev, nextChapter]);
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home language={language} onNavigate={handleNavigate} userData={userData} />;
      case "docs":
        return <Documentation language={language} onNavigate={handleNavigate} />;
      case "game":
        return (
          <Game
            language={language}
            userData={userData}
            setUserData={setUserData}
            activeChapter={activeChapter}
            unlockedChapters={unlockedChapters} // Pass unlockedChapters
            onChapterComplete={(completedChapterId) => {
              handleChapterComplete(completedChapterId); // Use the new handler
              handleTransitionNavigate('cinema');
            }}
            onHistoryUpdate={handleHistoryUpdate}
            onTutorialEvent={handleTutorialEvent}
          />
        );
      case "cinema":
        return (
          <Cinema
            language={language}
            unlockedChapters={unlockedChapters}
            onSelectChapter={(chapterId) => {
              setActiveChapter(chapterId);
              handleTransitionNavigate('game');
            }}
          />
        );
      default:
        return <Home language={language} onNavigate={handleNavigate} />;
    }
  };

  // Sidebar logic
  const showSidebar = currentPage !== 'home' && currentPage !== 'docs';

  // Resolve current active tutorial steps
  let activeSteps = [];
  if (tutorialStatus === 'intro') activeSteps = TUTORIAL_INTRO;
  else if (tutorialStatus === 'dialogue') activeSteps = TUTORIAL_DIALOGUE;
  else if (tutorialStatus === 'choice') activeSteps = TUTORIAL_CHOICE;

  const isTutorialOpen = ['intro', 'dialogue', 'choice'].includes(tutorialStatus);


  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", overflow: "hidden", position: "relative" }}>
      <PortraitOverlay language={language} />
      <FullScreenPopup />
      <TopControls
        onHistoryClick={toggleHistory}
        onNavigate={handleNavigate}
        language={language}
        showGameTools={currentPage === 'game'}
      />
      <PageTransition isVisible={isTransitioning} />

      {showSidebar && (
        <Sidebar
          onNavigate={handleNavigate}
          activePage={showSettings ? "settings" : currentPage}
          language={language}
        />
      )}

      {showSidebar && <EmailWidget hasNotification={hasNotification} onClick={handleEmailClick} />}

      {/* Page Content */}
      {renderPage()}

      {/* Settings Modal Layer */}
      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        language={language}
        setLanguage={setLanguage}
      />

      {/* History Modal Layer */}
      <HistoryModal
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
        history={gameHistory.conversations}
        choices={gameHistory.choices}
        language={language}
      />

      {/* Tutorial Overlay */}
      <TutorialOverlay
        isOpen={isTutorialOpen}
        steps={activeSteps}
        currentStepIndex={tutorialStep}
        onNext={handleTutorialNext}
        onSkip={handleTutorialSkip}
        language={language}
      />
    </div>
  );
}
