// src/Home.js
import React from 'react';
import styled from 'styled-components';
import profilePic from './assets/profile.jpg'; // Asegúrate de agregar una imagen en esta ruta


const Home = () => {
  return (
      <HomeContainer>
        <Hero>
          <Container>
            <Row>
              <HeroText>
                <h1>GERMAN <span>DEL RIO</span></h1>
                <Subheading>Junior Developer</Subheading>
              </HeroText>
              <Col>
                <ProfilePic src={profilePic} alt="Profile" />
              </Col>
            </Row>
          </Container>
        </Hero>
      </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  background-color: #f7f7f7;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const HeroText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 4rem;
    font-weight: bold;

    span {
      display: block;
      color: #000;
    }
  }
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;

const Col = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ProfilePic = styled.img`
  max-width: 100%;
  border-radius: 5px;

  @media (max-width: 768px) {
    max-width: 75%;
    margin: 0 auto;
  }
`;
