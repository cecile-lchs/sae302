import React from 'react';
import { translations } from '../translations';

const SettingsModal = ({ isOpen, onClose, language = "fr", setLanguage }) => {
  // Use translations based on current language
  // Fallback to FR if translation missing
  const t = translations[language]?.settings || translations.fr.settings;

  // Styles based on project theme (Dark Blue #2c3e50, Yellow #fdb933)
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? 'visible' : 'hidden',
      transition: 'opacity 0.3s ease, visibility 0.3s ease',
      display: 'flex',
      justifyContent: 'flex-start', // Align to left
    },
    modal: {
      width: '400px',
      height: '100vh',
      backgroundColor: '#2c3e50', // rgb(44, 62, 80)
      color: 'white',
      padding: '0rem 2rem 100px', // Updated padding from user request
      boxShadow: 'rgba(0, 0, 0, 0.5) 2px 0px 10px',
      transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 0.3s ease-out',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      fontFamily: '"Segoe UI", sans-serif'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #fdb933', // rgb(253, 185, 51)
      paddingBottom: '1rem',
      marginBottom: '1rem',
      flexShrink: 0
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#fdb933',
      margin: '0px'
    },
    closeButton: {
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '2rem',
      cursor: 'pointer',
      padding: '0px 0.5rem'
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      flexShrink: 0
    },
    sectionTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#fdb933',
      textTransform: 'uppercase',
      marginBottom: '0.5rem'
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    label: {
      fontSize: '1rem'
    },
    slider: {
      width: '150px',
      accentColor: '#fdb933'
    },
    toggle: {
      position: 'relative',
      display: 'inline-block',
      width: '50px',
      height: '24px'
    },
    toggleInput: {
      opacity: 0,
      width: 0,
      height: 0
    },
    toggleSlider: {
      position: 'absolute',
      cursor: 'pointer',
      inset: '0px', // Using inset as per user HTML
      backgroundColor: '#ccc',
      transition: '.4s',
      borderRadius: '24px'
    },
    toggleSliderBefore: (checked) => ({
      position: 'absolute',
      content: '""',
      height: '16px',
      width: '16px',
      left: '4px',
      bottom: '4px',
      backgroundColor: 'white',
      transition: '.4s',
      borderRadius: '50%',
      transform: checked ? 'translateX(26px)' : 'translateX(0)'
    }),
    buttonGroup: {
      display: 'flex',
      gap: '0.5rem',
      marginTop: '0.5rem'
    },
    optionButton: (active) => ({
      flex: '1 1 0%', // Match user flex: 1 1 0%
      padding: '0.5rem',
      border: active ? '1px solid #fdb933' : '1px solid #cccccc',
      backgroundColor: active ? '#fdb933' : 'transparent',
      color: active ? '#2c3e50' : 'white',
      borderRadius: '20px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '0.8rem',
      transition: '0.2s'
    })
  };

  // Switch Toggle Component
  const ToggleSwitch = ({ checked, onChange }) => (
    <label style={styles.toggle}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={styles.toggleInput}
      />
      <span style={{
        ...styles.toggleSlider,
        backgroundColor: checked ? '#fdb933' : '#ccc'
      }}>
        <span style={styles.toggleSliderBefore(checked)}></span>
      </span>
    </label>
  );

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h2 style={styles.title}>{t.title}</h2>
          <button style={styles.closeButton} onClick={onClose}>&times;</button>
        </div>

        {/* Audio Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.sound}</div>
          <div style={styles.row}>
            <span style={styles.label}>{t.sfx}</span>
            <input type="range" style={styles.slider} />
          </div>
          <div style={styles.row}>
            <span style={styles.label}>{t.music}</span>
            <input type="range" style={styles.slider} />
          </div>
        </div>



        {/* Language Section - NEW */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>{t.language}</div>
          <div style={{ display: 'flex', justifyContent: 'center', background: '#34495e', borderRadius: '30px', padding: '5px' }}>
            <button
              style={{ ...styles.optionButton(language === 'fr'), borderRadius: '25px' }}
              onClick={() => setLanguage('fr')}
            >
              {t.french}
            </button>
            <button
              style={{ ...styles.optionButton(language === 'en'), borderRadius: '25px' }}
              onClick={() => setLanguage('en')}
            >
              {t.english}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsModal;
