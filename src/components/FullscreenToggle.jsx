import React, { useState, useEffect } from 'react';
import fullscreenIcon from '../assets/fullscreen.svg';
import fullscreenExitIcon from '../assets/close_fullscreen.svg';
import './FullscreenToggle.css';

const FullscreenToggle = () => {
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

  return (
    <div
      className="fullscreen-toggle-btn"
      onClick={toggleFullScreen}
      title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
    >
      <img
        src={isFullscreen ? fullscreenExitIcon : fullscreenIcon}
        alt="Fullscreen Toggle"
        className="fullscreen-icon"
      />
    </div>
  );
};

export default FullscreenToggle;
