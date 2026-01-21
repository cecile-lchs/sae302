import React from 'react';
import './PortraitOverlay.css';
import rotateIcon from '../assets/rotate_phone.svg'; // We might need an icon, or just text. I'll use text for now or simple CSS shape.

const PortraitOverlay = ({ language }) => {
  return (
    <div className="portrait-overlay">
      <div className="overlay-content">
        <div className="rotate-icon">↻</div>
        <p>
          {language === 'fr'
            ? "Veuillez tourner votre appareil en mode paysage pour une meilleure expérience."
            : "Please rotate your device to landscape mode for the best experience."}
        </p>
      </div>
    </div>
  );
};

export default PortraitOverlay;
