import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RSVPForm from './RSVPForm';
import ThankYou from './ThankYou';
import Error from './Error';
import GuestList from './GuestList';
import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rsvp' element={<RSVPForm />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/error' element={<Error />} />
        <Route path='/guest-list' element={<GuestList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
