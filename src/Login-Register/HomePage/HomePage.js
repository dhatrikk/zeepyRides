import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1>Welcome !!</h1>
      <p>Please login or register to continue.</p>
      <div className="button-group">
        <button className="button" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="button" onClick={() =>navigate('/register')}> 
          Register
        </button>
      </div>
    </div>
  )
}

export default HomePage;