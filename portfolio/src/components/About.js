import React from 'react';
import profilePic from './assets/profile2.jpg'; // Make sure to add an image to this path
import { Element } from 'react-scroll';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 0;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColMd6 = styled.div`
  width: 50%;
  padding: 15px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProfilePic = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const AboutContent = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const AboutHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
`;

const AboutSubheading = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #666;
  margin-bottom: 1.5rem;
`;

const HorizontalRule = styled.hr`
  border-top: 2px solid #ddd;
  margin: 1.5rem 0;
`;

const AboutParagraph = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const About = () => {
  return (
    <Element name="about">
      <AboutSection>
        <Container>
          <Row>
            <ColMd6>
              <ProfilePic src={profilePic} alt="Profile" />
            </ColMd6>
            <ColMd6>
              <AboutContent>
                <AboutHeading>German Del Rio</AboutHeading>
                <AboutSubheading>Junio developer</AboutSubheading>
                <HorizontalRule />
                <AboutParagraph>My name is German Del Rio. I am a software enginner, and I'm very passionate and dedicated to my work.</AboutParagraph>
                <AboutParagraph>With a passion for creating efficient and scalable web applications, I have experience in both frontend and backend development</AboutParagraph>
                <Button className="btn btn-dark">Learn More</Button>
              </AboutContent>
            </ColMd6>
          </Row>
        </Container>
      </AboutSection>
    </Element>
  );
}

export default About;
