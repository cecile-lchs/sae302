import React from 'react';
import './Sidebar.css';
import homeIcon from '../assets/page-daccueil.svg';
import documentIcon from '../assets/documentation.svg';
import playIcon from '../assets/jouer.svg';
import parametreIcon from '../assets/parametres.svg';
import clapIcon from '../assets/clap.svg';


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
        >
          <img src={homeIcon} alt={t.home} className="icon" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
          <span className="nav-label">{t.home}</span>
        </div>

        <div
          className={`nav-item ${activePage === 'docs' ? 'active' : ''}`}
          onClick={() => onNavigate('docs')}
        >
          <img src={documentIcon} alt={t.docs} className="icon" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
          <span className="nav-label">{t.docs}</span>
        </div>

        {/* Updated "Play" Button - Central/Bulge */}
        <div
          className={`nav-item ${activePage === 'game' ? 'active' : ''}`}
          onClick={() => onNavigate('game')}
        >
          <img src={playIcon} alt={t.play} className="icon" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
          <span className="nav-label">{t.play}</span>
        </div>

        <div
          className={`nav-item ${activePage === 'cinema' ? 'active' : ''}`}
          onClick={() => onNavigate('cinema')}
        >
          <img src={clapIcon} alt={t.cinema} className="icon" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
          <span className="nav-label">{t.cinema}</span>
        </div>
      </div>

      <div className="spacer"></div>

      {/* Bottom Group */}
      <div className="nav-group bottom-group">
        <div
          className={`nav-item ${activePage === 'settings' ? 'active' : ''}`}
          onClick={() => onNavigate('settings')}
        >
          <img src={parametreIcon} alt={t.settings} className="icon" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
          <span className="nav-label">{t.settings}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
