import React from 'react';

const Documentation = ({ language, onNavigate }) => {
  const btnText = language === 'fr' ? "ACCÉDER AU JEU" : "PLAY GAME";

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#34495e',
      color: 'white',
      flexDirection: 'column'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>📄 Documentation</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>La documentation du projet se trouvera ici.</p>

      <button
        onClick={() => onNavigate('game')}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          backgroundColor: '#fdb933',
          color: '#2c3e50',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Documentation;
