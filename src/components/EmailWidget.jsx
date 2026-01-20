import React from 'react';
import emailIcon from '../assets/email.png';
import emailNotifIcon from '../assets/email_notif.png';

const EmailWidget = ({ hasNotification, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '20px',
        right: '90px',
        zIndex: 100, // Highest z-index to be on top of everything
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      title={hasNotification ? "Nouveau message !" : "Messagerie"}
    >
      <img
        src={hasNotification ? emailNotifIcon : emailIcon}
        alt="Email"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))'
        }}
      />
    </div>
  );
};

export default EmailWidget;
