import React from 'react';
import './HistoryModal.css';

const HistoryModal = ({ isOpen, onClose, history = [], choices = [], language = 'fr' }) => {
  const t = {
    fr: {
      title: "Historique",
      conversations: "Conversations",
      choices: "Choix effectués",
      emptyHistory: "Aucune conversation pour le moment.",
      emptyChoices: "Aucun choix effectué pour le moment.",
      choiceLabel: "Choix",
      you: "Vous"
    },
    en: {
      title: "History",
      conversations: "Conversations",
      choices: "Choices Made",
      emptyHistory: "No conversation yet.",
      emptyChoices: "No choices made yet.",
      choiceLabel: "Choice",
      you: "You"
    }
  };

  const text = t[language] || t.fr;

  // Prevent click propagation from modal content to overlay
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={`history-modal-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      <div
        className={`history-modal-container ${isOpen ? 'open' : ''}`}
        onClick={handleContentClick}
      >
        <div className="history-header">
          <h2 className="history-title">{text.title}</h2>
          <button className="history-close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="history-content">
          {/* Left Column: Conversation History */}
          <div className="history-column">
            <div className="column-header">{text.conversations}</div>
            {history.length === 0 ? (
              <p className="empty-state">{text.emptyHistory}</p>
            ) : (
              history.map((item, index) => (
                <div key={index} className="history-item">
                  <span className="history-speaker">{item.speaker || "???"}</span>
                  <p className="history-text">{item.text}</p>
                </div>
              ))
            )}
          </div>

          {/* Right Column: Choices History */}
          <div className="history-column">
            <div className="column-header">{text.choices}</div>
            {choices.length === 0 ? (
              <p className="empty-state">{text.emptyChoices}</p>
            ) : (
              choices.map((choice, index) => (
                <div key={index} className="choice-item">
                  <span className="choice-label">{text.choiceLabel}</span>
                  <p className="choice-text">"{choice.text}"</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryModal;
