import React, { useState, useEffect } from 'react';
import './TopControls.css';

// Icons
import historyIcon from '../assets/history.svg';
import documentIcon from '../assets/documentation.png';
import fullscreenIcon from '../assets/fullscreen.svg';
import fullscreenExitIcon from '../assets/close_fullscreen.svg';

const TopControls = ({ onHistoryClick, onNavigate, language = 'fr', showGameTools = false }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync state with actual fullscreen status
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

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

  const t = {
    fr: {
      history: "Historique",
      docs: "Documentation",
      fullscreen: "Plein écran",
      exitFullscreen: "Quitter le plein écran"
    },
    en: {
      history: "History",
      docs: "Documentation",
      fullscreen: "Fullscreen",
      exitFullscreen: "Exit Fullscreen"
    }
  };

  const text = t[language] || t.fr;

  return (
    <div className="top-controls-container">
      {showGameTools && (
        <>
          {/* History Button */}
          <div
            id="btn-history"
            className="control-btn"
            onClick={onHistoryClick}
            title={text.history}
          >
            <img src={historyIcon} alt="History" className="control-icon" />
          </div>

          {/* Documentation Button */}
          <div
            id="btn-docs"
            className="control-btn"
            onClick={() => onNavigate('docs')}
            title={text.docs}
          >
            <img src={documentIcon} alt="Documentation" className="control-icon" />
          </div>
        </>
      )}





      {/* Fullscreen Button */}
      <div
        id="btn-fullscreen"
        className="control-btn"
        onClick={toggleFullScreen}
        title={isFullscreen ? text.exitFullscreen : text.fullscreen}
      >
        <img
          src={isFullscreen ? fullscreenExitIcon : fullscreenIcon}
          alt="Fullscreen"
          className="control-icon"
          style={{ filter: 'brightness(0)' }}
        />
      </div>
    </div>
  );
};

export default TopControls;
