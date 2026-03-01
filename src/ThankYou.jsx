import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYou.css';

function ThankYou() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className='thankyou-page'>
      <div className='thankyou-card'>
        <h2>Form Complete!</h2>
        <p>Thank you for RSVP-ing! 🎉</p>
        <button className='home-button' onClick={handleHome}>
          Back to View Invitation
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
