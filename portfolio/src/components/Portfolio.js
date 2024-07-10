// src/Portfolio.js
import React from 'react';
import styled from 'styled-components';
import Genuiz from '../components/assets/Genuiz.png';
import Emocare from '../components/assets/emocare.png';
import MoneyMentor from '../components/assets/MoneyMentor.png';

const PortfolioSection = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  position: relative;
  z-index: 1;
`;

const PortfolioGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const PortfolioItem = styled.div`
  width: 30%;
  margin-bottom: 30px;
  text-align: center;
`;

const PortfolioImage = styled.img`
  width: 200px;
  heigth: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const PortfolioTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.5rem;
`;

const PortfolioCategory = styled.p`
  color: gray;
  font-size: 1rem;
`;

const portfolioItems = [
  {
    title: 'Genuiz',
    category: 'AI Quizz generator',
    imgUrl: Genuiz,
    url: 'https://github.com/GermanDelRioGuzman/GENUIZ', 
  },
  {
    title: 'Emocare',
    category: 'AI emotional assistant',
    imgUrl: Emocare,
    url: 'https://github.com/GermanDelRioGuzman/EmoCare',
  },
  {
    title: 'MoneyMentor',
    category: 'AI financial advisor',
    imgUrl: MoneyMentor,
    url: 'https://github.com/GermanDelRioGuzman/Moneymentor',
  }
];

const Portfolio = () => (
  <PortfolioSection>
    <Title>Featured Works</Title>
    <PortfolioGrid>
      {portfolioItems.map((item, index) => (
        <PortfolioItem key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <PortfolioImage src={item.imgUrl} alt={item.title} />
            </a>
          <PortfolioTitle>{item.title}</PortfolioTitle>
          <PortfolioCategory>{item.category}</PortfolioCategory>
        </PortfolioItem>
      ))}
    </PortfolioGrid>
  </PortfolioSection>
);

export default Portfolio;
