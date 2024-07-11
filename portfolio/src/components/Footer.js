import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Element } from 'react-scroll';



const FooterSection = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px 0;
`;

const FooterTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const FooterText = styled.p`
  margin: 5px 0;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #ccc;
    }
  }
`;

const Footer = () => {
  return (
    <Element name="contact">
    <FooterSection>
      <FooterColumn>
        <FooterTitle>GERMAN DEL RIO</FooterTitle>
        <FooterText>PORTFOLIO</FooterText>
      </FooterColumn>
      <FooterColumn>
        <FooterText>germangzmav@outlook.com</FooterText>
        <FooterText>+52 393 936 4648</FooterText>
      </FooterColumn> 
      <FooterColumn>
        <SocialIcons>
          <a href="https://www.linkedin.com/in/germ%C3%A1n-avelino-del-r%C3%ADo-guzm%C3%A1n-a1292225a/" aria-label="Linkedin"><FaLinkedin /></a>
          <a href="https://github.com/GermanDelRioGuzman" aria-label="Twitter"><FaGithub /></a>
        </SocialIcons>
      </FooterColumn>
    </FooterSection>
    </Element>
  );
}

export default Footer;
