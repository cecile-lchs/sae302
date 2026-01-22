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

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showSettings, setShowSettings] = useState(false);
  const [hasNotification, setHasNotification] = useState(false); // State for email notification
  const [language, setLanguage] = useState("fr"); // 'fr' or 'en'
  const [isTransitioning, setIsTransitioning] = useState(false); // Transition state

  // New Global User State
  const [userData, setUserData] = useState({
    pseudo: "",
    character: null
  });

  // Chapter State
  const [unlockedChapters, setUnlockedChapters] = useState(["chapter1"]);
  const [activeChapter, setActiveChapter] = useState("chapter1");

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
            onChapterComplete={(nextChapterId) => {
              if (nextChapterId && !unlockedChapters.includes(nextChapterId)) {
                setUnlockedChapters([...unlockedChapters, nextChapterId]);
              }
              handleTransitionNavigate('cinema');
            }}
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

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh", overflow: "hidden", position: "relative" }}>
      <PortraitOverlay language={language} />
      <PageTransition isVisible={isTransitioning} />

      {showSidebar && (
        <Sidebar onNavigate={handleNavigate} activePage={showSettings ? "settings" : currentPage} language={language} />
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
    </div>
  );
}
