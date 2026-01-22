import React, { useState, useEffect } from 'react';
import './FullScreenPopup.css';

const FullScreenPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showExitHint, setShowExitHint] = useState(false);

  useEffect(() => {
    // Check if device is likely mobile or landscape mobile based on screen size
    // Check if device is likely mobile or landscape mobile based on screen size AND touch capability
    const checkScreenSize = () => {
      const isSmallScreen = window.innerWidth <= 900 || window.innerHeight <= 600;
      const hasTouch = navigator.maxTouchPoints > 0;

      // Only show if mobile/tablet (touch + small screen) AND not already in fullscreen
      if (isSmallScreen && hasTouch && !document.fullscreenElement) {
        const hasDismissed = sessionStorage.getItem('fullscreenDismissed');
        if (!hasDismissed) {
          setIsVisible(true);
        }
      } else if (!hasTouch) {
        // Ensure it hides if resizing on desktop
        setIsVisible(false);
      }
    };

    // Initial check
    checkScreenSize();

    // Re-check on resize to handle manual browser resizing during testing
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handleYes = () => {
    // Request full screen
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen().then(() => {
        setIsVisible(false);
        setShowExitHint(true);
        // Hide hint after 6 seconds
        setTimeout(() => setShowExitHint(false), 6000);
      }).catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
        setIsVisible(false); // Close anyway if fails
      });
    } else {
      // Fallback for older browsers (unlikely needed for this stack but safety net)
      setIsVisible(false);
    }
  };

  const handleNo = () => {
    setIsVisible(false);
    sessionStorage.setItem('fullscreenDismissed', 'true');
  };

  // If in fullscreen, we might want to listen to changes to show popup again if they exit?
  // User said "if responsive... popup...". 
  // Let's keep it simple: Show on load if mobile/responsive size.

  return (
    <>
      {isVisible && (
        <div className="fullscreen-overlay">
          <div className="fullscreen-popup">
            <h2 className="fs-title">Expérience Optimale</h2>
            <p className="fs-text">
              Pour une meilleure expérience de jeu, nous vous recommandons de passer en mode plein écran.
            </p>
            <div className="fs-buttons">
              <button className="fs-btn fs-btn-yes" onClick={handleYes}>
                Oui, je veux
              </button>
              <button className="fs-btn fs-btn-no" onClick={handleNo}>
                Non, merci
              </button>
            </div>
          </div>
        </div>
      )}

      {showExitHint && (
        <div className="fullscreen-hint">
          Appuyez sur Échap ou cliquez ici pour quitter le plein écran
        </div>
      )}
    </>
  );
};

export default FullScreenPopup;
