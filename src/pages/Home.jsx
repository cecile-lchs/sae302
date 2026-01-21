import { useState } from 'react';
import { translations } from '../translations';
import partieJouerBg from '../assets/PartieJouer.png';
import partieDocumentBg from '../assets/PartieDocument.png';

import './Home.css';

const Home = ({ language, onNavigate }) => {
  const [hoverSide, setHoverSide] = useState(null); // 'left', 'right', or null

  const btnPlay = language === 'fr' ? "JOUER" : "PLAY";
  const btnDocs = language === 'fr' ? "DOCUMENTATION" : "DOCUMENTATION";

  return (
    <div className="home-container">
      {/* Title Overlay */}
      <div className="title-overlay">
        <h1 className="home-title">A CONTRE COURANT</h1>
      </div>

      {/* Left Side - JOUER */}
      <div
        className={`split-section split-left`}
        style={{
          // We keep the flex logic for desktop/landscape interaction, CSS overrides it for portrait tablet
          flex: hoverSide === 'left' ? 1.5 : (hoverSide === 'right' ? 0.8 : 1),
          filter: hoverSide === 'right' ? 'brightness(0.6)' : 'brightness(1)'
        }}
        onClick={() => onNavigate('game')}
        onMouseEnter={() => setHoverSide('left')}
        onMouseLeave={() => setHoverSide(null)}
      >
        <div
          className="section-overlay"
          style={{
            backgroundColor: hoverSide === 'left' ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.4)',
            transform: hoverSide === 'left' ? 'scale(1.1)' : 'scale(1)'
          }}
        >
          <h2 className="button-text">{btnPlay}</h2>
        </div>
      </div>

      {/* Separator Line */}
      <div className="separator"></div>

      {/* Right Side - DOCUMENTATION */}
      <div
        className={`split-section split-right`}
        style={{
          flex: hoverSide === 'right' ? 1.5 : (hoverSide === 'left' ? 0.8 : 1),
          filter: hoverSide === 'left' ? 'brightness(0.6)' : 'brightness(1)'
        }}
        onClick={() => onNavigate('docs')}
        onMouseEnter={() => setHoverSide('right')}
        onMouseLeave={() => setHoverSide(null)}
      >
        <div
          className="section-overlay"
          style={{
            backgroundColor: hoverSide === 'right' ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.4)',
            transform: hoverSide === 'right' ? 'scale(1.1)' : 'scale(1)'
          }}
        >
          <h2 className="button-text">{btnDocs}</h2>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden'
  },
  titleOverlay: {
    position: 'absolute',
    top: '10%',
    left: '0',
    width: '100%',
    textAlign: 'center',
    zIndex: 10,
    pointerEvents: 'none' // Allows clicking through the title
  },
  title: {
    fontSize: '5rem',
    color: '#fdb933',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    margin: 0,
    fontFamily: "'Segoe UI', sans-serif", // Or your custom font
    letterSpacing: '5px'
  },
  splitLeft: {
    flex: 1,
    backgroundImage: `url(${partieJouerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    transition: 'flex 0.3s ease'
  },
  splitRight: {
    flex: 1,
    backgroundImage: `url(${partieDocumentBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    transition: 'flex 0.3s ease'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)', // Darker for Play side image
    padding: '20px 40px',
    borderRadius: '10px',
    transition: 'background-color 0.3s ease'
  },
  overlayRight: {
    backgroundColor: 'transparent',
    padding: '20px 40px',
    borderRadius: '10px',
    border: '3px solid #fdb933'
  },
  buttonText: {
    fontSize: '3rem',
    color: 'white',
    margin: 0,
    textTransform: 'uppercase',
    textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
    // Different color for docs text since background is light?
    // Let's make right side text dark if bg is light, or add darker overlay
  },
  separator: {
    width: '4px',
    backgroundColor: '#fdb933',
    height: '100%',
    zIndex: 5
  }
};

// Add hover effects via CSS-in-JS logic or just keep simple for now. 
// For better hover handling in inline-styles, we'd need state, but for simplicity:

export default Home;
