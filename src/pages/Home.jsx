import { translations } from '../translations';
// import UiButton from '../components/UiButton'; // Removed as it does not exist

const Home = ({ language, onNavigate }) => {
  const t = translations[language].home;

  // Update translations for new buttons if not present, or hardcode/add to translation file later
  // For now I'll use hardcoded or generic keys if available, or just add them dynamically
  const btnPlay = language === 'fr' ? "JOUER" : "PLAY";
  const btnDocs = language === 'fr' ? "DOCUMENTATION" : "DOCUMENTATION";

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#fffcf4',
      color: 'white',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px', color: '#fdb933' }}>VISUAL NOVEL</h1>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <button
          onClick={() => onNavigate('game')}
          style={{
            padding: '1.5rem 3rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#fdb933',
            color: '#2c3e50',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          {btnPlay}
        </button>

        <button
          onClick={() => onNavigate('docs')}
          style={{
            padding: '1.5rem 3rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: 'transparent',
            color: '#fdb933',
            border: '3px solid #fdb933',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s, background 0.2s',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.backgroundColor = 'rgba(253, 185, 51, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          {btnDocs}
        </button>
      </div>
    </div>
  );
};

export default Home;
