import React from 'react';

const DisclaimerPopup = ({ onContinue, language }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <h1 style={styles.title}>L'aventure commence !</h1>

        <p style={styles.text}>
          A contre courant est un webdocumentaire à but informatif et de divertissement. propose d’incarner un étudiant en situation de réorientation et se veut crédible, sans chercher à représenter de manière exhaustive toutes les réalités possibles.
        </p>

        <p style={styles.text}>
          Les choix, dialogues et situations de la partie fictionnelle n’ont pas pour vocation de montrer un parcours idéal ni de fournir des conseils personnalisés.
          Des contenus documentaires et des témoignages de personnes réelles viennent toutefois enrichir l’expérience et apporter des éléments d’information concrets.
        </p>

        <p style={styles.text}>
          Il est donc recommandé d’aborder cette aventure avec discernement, en distinguant la fiction interactive des informations et témoignages issus de la réalité.
        </p>

        <button
          onClick={onContinue}
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.backgroundColor = '#e0a82e';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#fdb933';
          }}
        >
          {language === 'fr' ? "J'ai compris" : "I understood"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  container: {
    backgroundColor: '#fffcf4',
    padding: '3rem',
    borderRadius: '20px',
    maxWidth: '800px',
    width: '90%',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    border: '4px solid #fdb933',
    color: '#5a4a42', // Brownish text color from image
  },
  title: {
    color: '#4a3b32', // Darker brown for title
    fontSize: '2.5rem',
    marginBottom: '2rem',
    fontFamily: '"Chewy", cursive, sans-serif', // Assuming a fun font is available or fallback
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    color: '#5a4a42',
  },
  button: {
    marginTop: '1rem',
    padding: '1rem 3rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    backgroundColor: '#fdb933',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.2s',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  }
};

export default DisclaimerPopup;
