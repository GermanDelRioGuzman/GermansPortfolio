import React from 'react';
import './Home.css';
import profilePic from './assets/profile.jpg'; // Make sure to add an image to this path

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">My Portfolio</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#">News</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hero-text">
              <h1>BERNARD <span>SYDNEY</span></h1>
              <p className="subheading">Creative Web & App Developer</p>
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
