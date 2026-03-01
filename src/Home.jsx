import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/rsvp');
  };

  return (
    <>
      <div className='container'>
        <img
          src='/invi-img.png'
          alt='Invitation'
          className='centered-image'
        ></img>
      </div>
      <div className='rsvp-btn-container'>
        <button onClick={handleClick}>RSVP Now!</button>
      </div>
      <div className='arrival-container'>
        <p className='arrival-note'>
          Have some Mickey Mouse gear? Feel free to wear it and join the fun!
        </p>
        <p className='arrival-text'>
          <span>Arrival Instructions</span> Upon arrival, in the garage (P1),
          please park near visitor parking #188, which is in front of the
          elevator. Press the intercom for security to let you into the
          building. Once inside, head to the lobby and let security know you're
          here for Sylas's birthday party, and they will direct you to the party
          room.
        </p>
        <p className='arrival-contact'>
          If you have any questions, please contact <br />
          <span>Lien: 647-869-6017 or Roshawn: 647-678-0772</span>
        </p>
      </div>
    </>
  );
}

export default Home;
