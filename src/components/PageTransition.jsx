import React from 'react';
import logo from '../assets/logo.svg';

const PageTransition = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div style={styles.overlay}>
      <style>
        {`
          @keyframes spinTwoTurns {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); } /* 360 * 2 = 720 */
          }
        `}
      </style>
      <img
        src={logo}
        alt="Loading..."
        style={styles.logo}
      />
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: '#ff7f00',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    transition: 'opacity 0.1s ease-out'
  },
  logo: {
    width: '150px',
    height: '150px',
    animation: 'spinTwoTurns 1s ease-in-out forwards'
  }
};

export default PageTransition;
