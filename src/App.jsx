import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RSVPForm from './RSVPForm';
import ThankYou from './ThankYou';
import Error from './Error';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rsvp' element={<RSVPForm />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
