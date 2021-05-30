import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="menu first"><a href="#">Profile</a></div>
      <div className="menu"><a href="#">Messages</a></div>
      <div className="menu"><a href="#">News</a></div>
      <div className="menu"><a href="#">Music</a></div>
      <div className="menu last"><a href="#">Settings</a></div>
    </div>
  );
}

export default Navbar;