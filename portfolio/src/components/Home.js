import React from 'react';
import './Home.css';
import profilePic from './assets/profile.jpg'; // Make sure to add an image to this path

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hero-text">
              <h1>GERMAN <span>DEL RIO</span></h1>
              <p className="subheading">Junior Developer</p>
            </div>
            <div className="col-md-6">
              <img src={profilePic} alt="Profile" className="img-fluid profile-pic" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
