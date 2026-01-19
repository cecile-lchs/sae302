import React from 'react';
import './Sidebar.css';
import homeIcon from '../assets/page-daccueil.png';
import documentIcon from '../assets/documentation.png';
import playIcon from '../assets/jouer.png';
import parametreIcon from '../assets/parametres.png';
import clapIcon from '../assets/clap.png';


const Sidebar = ({ onNavigate, activePage, language = "fr" }) => {
  // Simple translation map for Sidebar items

  const translations = {
    fr: {
      home: "Accueil",
      docs: "Documentation",
      play: "Jouer",
      cinema: "Clap Cinéma",
      settings: "Paramètres"
    },
    en: {
      home: "Home",
      docs: "Documentation",
      play: "Play",
      cinema: "Cinema Clap",
      settings: "Settings"
    }
  };

  const t = translations[language] || translations.fr;

  return (
    <div className="sidebar">
      {/* Top Group */}
      <div className="nav-group">
        <div
          className={`nav-item ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => onNavigate('home')}
          title={t.home}
        >
          <img src={homeIcon} alt={t.home} className="icon" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        </div>

        <div
          className={`nav-item ${activePage === 'docs' ? 'active' : ''}`}
          onClick={() => onNavigate('docs')}
          title={t.docs}
        >
          <img src={documentIcon} alt={t.docs} className="icon" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        </div>

        {/* Updated "Play" Button - Central/Bulge */}
        <div
          className={`nav-item ${activePage === 'game' ? 'active' : ''}`}
          onClick={() => onNavigate('game')}
          title={t.play}
        >

          <img src={playIcon} alt={t.play} className="icon" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />

        </div>

        <div
          className={`nav-item ${activePage === 'cinema' ? 'active' : ''}`}
          onClick={() => onNavigate('cinema')}
          title={t.cinema}
        >
          <img src={clapIcon} alt={t.cinema} className="icon" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        </div>
      </div>

      <div className="spacer"></div>

      {/* Bottom Group */}
      <div className="nav-group bottom-group">
        <div
          className={`nav-item ${activePage === 'settings' ? 'active' : ''}`}
          onClick={() => onNavigate('settings')}
          title={t.settings}
        >
          <img src={parametreIcon} alt={t.settings} className="icon" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
