import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className='notfound-page'>
      <div className='notfound-card'>
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>We can't seem to find the page you were looking for.</p>
        <button onClick={goHome}>Go Back Home</button>
      </div>
    </div>
  );
}

export default NotFound;
