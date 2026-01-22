import React from 'react';
import './DisclaimerPopup.css';

const DISCLAIMER_CONTENT = {
  fr: {
    title: "L'aventure commence !",
    p1: "A contre courant est un webdocumentaire à but informatif et de divertissement. Il propose d’incarner un étudiant en situation de réorientation et se veut crédible, sans chercher à représenter de manière exhaustive toutes les réalités possibles.",
    p2: "Les choix, dialogues et situations de la partie fictionnelle n’ont pas pour vocation de montrer un parcours idéal ni de fournir des conseils personnalisés. Des contenus documentaires et des témoignages de personnes réelles viennent toutefois enrichir l’expérience et apporter des éléments d’information concrets.",
    p3: "Il est donc recommandé d’aborder cette aventure avec discernement, en distinguant la fiction interactive des informations et témoignages issus de la réalité.",
    button: "J'ai compris"
  },
  en: {
    title: "The adventure begins!",
    p1: "Against the Current is a web documentary for informational and entertainment purposes. It proposes to embody a student in a situation of reorientation and aims to be credible, without seeking to exhaustively represent all possible realities.",
    p2: "The choices, dialogues, and situations in the fictional part are not intended to show an ideal path or provide personalized advice. However, documentary content and testimonials from real people enrich the experience and provide concrete information.",
    p3: "It is therefore recommended to approach this adventure with discernment, distinguishing interactive fiction from information and testimonials drawn from reality.",
    button: "I understood"
  }
};

const DisclaimerPopup = ({ onContinue, language }) => {
  const content = DISCLAIMER_CONTENT[language] || DISCLAIMER_CONTENT.fr;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-container">
        <h1 className="disclaimer-title">{content.title}</h1>

        <p className="disclaimer-text">
          {content.p1}
        </p>

        <p className="disclaimer-text">
          {content.p2}
        </p>

        <p className="disclaimer-text">
          {content.p3}
        </p>

        <button
          onClick={onContinue}
          className="disclaimer-button"
        >
          {content.button}
        </button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
