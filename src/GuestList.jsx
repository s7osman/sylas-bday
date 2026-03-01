import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import './GuestList.css'; // we'll add whimsical styling here

function GuestListPage() {
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_APP_GUEST_LIST_PW) {
      setVerified(true);
      setError('');
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'rsvps'));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setGuests(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching guests:', err);
        setLoading(false);
      }
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleBackHome = () => {
    setVerified(false);
    navigate('/');
  };

  if (!verified) {
    return (
      <div className='password-page'>
        <h2>Guest List Access</h2>
        <p>Please enter the password to view the guest list.</p>
        <form onSubmit={handlePasswordSubmit} className='password-form'>
          <input
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='submit'>Submit</button>
        </form>
        {error && <p className='error'>{error}</p>}
        <button className='home-btn' onClick={handleBackHome}>
          Back to Home
        </button>
      </div>
    );
  }

  if (loading) return <p>Loading guest list...</p>;

  const yesGuests = guests.filter((g) => g.rsvp === 'yes');
  const noGuests = guests.filter((g) => g.rsvp === 'no');

  return (
    <div className='guestlist-page'>
      <h2>Guest List</h2>
      <p className='total'>🎉 Total attending: {yesGuests.length}</p>

      <div className='rsvp-section yes-section'>
        <h3>✅ Yes</h3>
        <ul>
          {yesGuests.map((guest, idx) => (
            <li key={idx}>
              {guest.first} {guest.last} ({guest.email})
            </li>
          ))}
        </ul>
      </div>

      <div className='rsvp-section no-section'>
        <h3>❌ No</h3>
        <ul>
          {noGuests.map((guest, idx) => (
            <li key={idx}>
              {guest.first} {guest.last} ({guest.email})
            </li>
          ))}
        </ul>
      </div>

      <button className='home-btn' onClick={handleBackHome}>
        Back to Home
      </button>
    </div>
  );
}

export default GuestListPage;
