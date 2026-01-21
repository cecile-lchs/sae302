import React from 'react';
import storyFr from '../storyFr.json';
import storyEn from '../storyEn.json';

const Cinema = ({ language, unlockedChapters = [], onSelectChapter }) => {
  const story = language === 'en' ? storyEn : storyFr;
  // Get all chapter keys (chapter1, chapter2, etc.)
  const chapters = Object.keys(story);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Les facettes de la réorientation</h1>
      <p style={styles.subtitle}>
        {language === 'fr'
          ? "Sélectionnez un chapitre pour commencer ou rejouer."
          : "Select a chapter to start or replay."}
      </p>

      <div style={styles.grid}>
        {chapters.map((chapterId) => {
          const chapterData = story[chapterId];
          const isUnlocked = unlockedChapters.includes(chapterId);

          return (
            <div
              key={chapterId}
              style={{
                ...styles.card,
                opacity: isUnlocked ? 1 : 0.5,
                cursor: isUnlocked ? 'pointer' : 'not-allowed',
                transform: isUnlocked ? 'scale(1)' : 'scale(0.95)',
                filter: isUnlocked ? 'none' : 'grayscale(100%)'
              }}
              onClick={() => {
                if (isUnlocked && onSelectChapter) {
                  onSelectChapter(chapterId);
                }
              }}
            >
              <div style={styles.cardContent}>
                <h2 style={styles.cardTitle}>
                  {chapterData.title || chapterId}
                </h2>
                <p style={styles.cardDesc}>
                  {chapterData.description || (language === 'fr' ? "Aucune description" : "No description")}
                </p>
                {!isUnlocked && <div style={styles.lockOverlay}>🔒 {language === 'fr' ? "Verrouillé" : "Locked"}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fffcf4', // Matching the new light theme request
    color: '#2c3e50',
    flexDirection: 'column',
    padding: '2rem'
  },
  header: {
    fontSize: '3rem',
    marginBottom: '10px',
    color: '#fdb933'
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#666'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '1000px'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
    position: 'relative',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cardContent: {
    padding: '20px',
    textAlign: 'center'
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#2c3e50'
  },
  cardDesc: {
    fontSize: '1rem',
    color: '#7f8c8d'
  },
  lockOverlay: {
    marginTop: '10px',
    fontWeight: 'bold',
    color: '#e74c3c'
  }
};

export default Cinema;
