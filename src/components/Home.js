import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-text">
        <h1>Welcome to Employee Management System</h1>
        <p>Manage your employees effectively with our simple and intuitive tool.</p>
        <button onClick={() => window.location.href = '/employee-list'}>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
