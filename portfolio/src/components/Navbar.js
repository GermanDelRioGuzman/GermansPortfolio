import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="nav-right">
        <a class="nav-item" href="#">About</a>
        <a class="nav-item" href="#">Portfolio</a>
        <a class="nav-item" href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;