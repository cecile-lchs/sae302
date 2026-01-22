import React from 'react';
import storyFr from '../storyFr.json';
import storyEn from '../storyEn.json';
import './Cinema.css';

const Cinema = ({ language, unlockedChapters = [], onSelectChapter }) => {
  const story = language === 'en' ? storyEn : storyFr;
  // Get all chapter keys (chapter1, chapter2, etc.)
  const chapters = Object.keys(story);

  return (
    <div className="cinema-container">
      <h1 className="cinema-header">Les facettes de la réorientation</h1>
      <p className="cinema-subtitle">
        {language === 'fr'
          ? "Sélectionnez un chapitre pour commencer ou rejouer."
          : "Select a chapter to start or replay."}
      </p>

      <div className="chapters-grid">
        {chapters.map((chapterId) => {
          const chapterData = story[chapterId];
          const isUnlocked = unlockedChapters.includes(chapterId);

          return (
            <div
              key={chapterId}
              className={`chapter-card ${!isUnlocked ? 'locked' : ''}`}
              onClick={() => {
                if (isUnlocked && onSelectChapter) {
                  onSelectChapter(chapterId);
                }
              }}
            >
              <div className="card-content">
                <h2 className="card-title">
                  {chapterData.title || chapterId}
                </h2>
                <p className="card-desc">
                  {chapterData.description || (language === 'fr' ? "Aucune description" : "No description")}
                </p>
                {!isUnlocked && <div className="lock-overlay">🔒 {language === 'fr' ? "Verrouillé" : "Locked"}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cinema;
