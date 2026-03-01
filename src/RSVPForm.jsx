import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RSVPForm.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

function RSVPForm() {
  const navigate = useNavigate();
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [rsvp, setRSVP] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'rsvps'), {
        first,
        last,
        email,
        rsvp,
        timestamp: new Date(),
      });

      console.log('RSVP saved!');
      navigate('/thank-you'); // Redirect
    } catch (error) {
      console.error('Error saving RSVP:', error);
    }
  };

  return (
    <div className='rsvp-page'>
      <form className='rsvp-form' onSubmit={handleSubmit}>
        <p className='back-btn' onClick={() => navigate('/')}>
          ← Back to Invitation
        </p>
        <h2>RSVP Form</h2>
        <div className='form-group'>
          <label>First Name:</label>
          <input
            type='text'
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Last Name:</label>
          <input
            type='text'
            value={last}
            onChange={(e) => setLast(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>RSVP:</label>
          <select
            value={rsvp}
            onChange={(e) => setRSVP(e.target.value)}
            required
          >
            <option value='' disabled>
              Select
            </option>
            <option value='yes'>Yes, I'll be attending</option>
            <option value='no'>No, I can't make it</option>
          </select>
        </div>
        <button className='rsvp-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default RSVPForm;
