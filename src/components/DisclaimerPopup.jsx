import React from 'react';
import './DisclaimerPopup.css';

const DisclaimerPopup = ({ onContinue, language }) => {
  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-container">
        <h1 className="disclaimer-title">L'aventure commence !</h1>

        <p className="disclaimer-text">
          A contre courant est un webdocumentaire à but informatif et de divertissement. propose d’incarner un étudiant en situation de réorientation et se veut crédible, sans chercher à représenter de manière exhaustive toutes les réalités possibles.
        </p>

        <p className="disclaimer-text">
          Les choix, dialogues et situations de la partie fictionnelle n’ont pas pour vocation de montrer un parcours idéal ni de fournir des conseils personnalisés.
          Des contenus documentaires et des témoignages de personnes réelles viennent toutefois enrichir l’expérience et apporter des éléments d’information concrets.
        </p>

        <p className="disclaimer-text">
          Il est donc recommandé d’aborder cette aventure avec discernement, en distinguant la fiction interactive des informations et témoignages issus de la réalité.
        </p>

        <button
          onClick={onContinue}
          className="disclaimer-button"
        >
          {language === 'fr' ? "J'ai compris" : "I understood"}
        </button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
