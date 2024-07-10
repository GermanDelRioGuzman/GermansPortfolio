import React from 'react';
import './About.css';
import profilePic from './assets/profile2.jpg'; // Make sure to add an image to this path

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={profilePic} alt="Profile" className="img-fluid profile-pic" />
          </div>
          <div className="col-md-6">
            <div className="about-content">
              <h2>German Del Rio</h2>
              <h3>Full stack developer</h3>
              <hr />
              <p>My name is German Del Rio. I am a web developer, and I'm very passionate and dedicated to my work.</p>
              <p>With a passion for creating efficient and scalable web applications, I have experience in both frontend and backend development</p>
              <button className="btn btn-dark">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
