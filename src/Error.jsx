import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYou.css';

function Error() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className='thankyou-page'>
      <div className='thankyou-card'>
        <h2>ERROR!</h2>
        <p>Sorry! There was an issue with your RSVP, please try again!</p>
        <button className='home-button' onClick={handleHome}>
          Back to View Invitation
        </button>
      </div>
    </div>
  );
}

export default Error;
