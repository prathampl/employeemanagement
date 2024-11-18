import React from 'react';
import './Logout.css';

const Logout = () => {
  const handleLogout = () => {
    alert('You have been logged out.');
    window.location.href = '/login';
  };

  return (
    <div className="logout">
      <h1>Are you sure you want to logout?</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
