import React from 'react';

const Cinema = () => {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#c0392b',
      color: 'white',
      flexDirection: 'column'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>🎬 Clap Cinéma</h1>
      <p style={{ fontSize: '1.2rem' }}>Galerie et scènes cinématiques.</p>
    </div>
  );
};

export default Cinema;
