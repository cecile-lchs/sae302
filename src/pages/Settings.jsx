import React from 'react';

const Settings = () => {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#7f8c8d',
      color: 'white',
      flexDirection: 'column'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>⚙️ Paramètres</h1>
      <p style={{ fontSize: '1.2rem' }}>Configurez vos préférences ici.</p>
    </div>
  );
};

export default Settings;
