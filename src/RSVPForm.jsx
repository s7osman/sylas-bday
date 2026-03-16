import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RSVPForm.css';

function RSVPForm() {
  const navigate = useNavigate();

  return (
    <div className='rsvp-page'>
      <div className='rsvp-closed-banner'>
        <p className='back-btn' onClick={() => navigate('/')}>
          ← Back to Invitation
        </p>

        <h2>RSVP Closed</h2>

        <p>
          The RSVP deadline has passed and the form is now closed. Thank you to
          everyone who responded.
        </p>
      </div>
    </div>
  );
}

export default RSVPForm;
