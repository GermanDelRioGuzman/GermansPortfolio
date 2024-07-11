// src/Navbar.js
import styled, { keyframes } from 'styled-components';
import React, { useState } from 'react';
import menuIcon from '../components/assets/hamburger.png';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <HamburgerIcon onClick={() => setIsOpen(!isOpen)} />
      <NavRight isOpen={isOpen}>
        <StyledLink to="about" smooth={true} duration={0}>About</StyledLink>
        <StyledLink to="portfolio" smooth={true} duration={0}>Portfolio</StyledLink>
        <StyledLink to="contact" smooth={true} duration={0}>Contact</StyledLink>
      </NavRight>
    </NavbarContainer>
  );
}

export default Navbar;

// Crear un componente Link estilizado
const StyledLink = styled(ScrollLink)`
  color: gray; /* Cambia el color del texto */
  text-decoration: none; /* Elimina el subrayado */
  margin: 0 15px; /* Añade márgenes a los lados para separar los enlaces */
  cursor: pointer; /* Cambia el cursor a pointer */
  font-weight: bold; /* Hace el texto en negrita */

  &:hover {
    color: black; /* Cambia el color al pasar el mouse */
  }

  @media (max-width: 768px) {
    margin: 10px 0; /* Ajusta el margen para que los elementos estén más espaciados verticalmente */
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Navbar container with a specific width
const NavbarContainer = styled.nav`
  position: fixed; /* Hacer que la navbar esté fija */
  top: 0;
  width: 100%; /* Set to 100% for full width or specify another value */
  margin: 0 auto; /* Center the navbar container */
  display: flex; /* Use flex layout to align items */
  justify-content: space-between; /* Space out the hamburger icon and nav items */
  align-items: center; /* Align items vertically */
  height: 50px;
  background-color: white; /* Optional: Set a background color for the navbar */
  border-bottom: 1px solid #ddd; /* Optional: Add a bottom border for visual separation */
  z-index: 1000; /* Ensure the navbar is on top of other elements */
`;

const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column; /* Cambia la dirección a columna */
    align-items: flex-start; /* Alinea los elementos al inicio */
    position: absolute;
    left: 0;
    top: 50px;
    background-color: white;
    width: 100%;
    text-align: left; /* Alinea el texto a la izquierda */
    padding-left: 20px; /* Añade un padding a la izquierda para separar el texto del borde */
    animation: ${slideDown} 0.3s ease-out forwards;
  }
`;

//hamburguer icon component
const HamburgerIcon = styled.img.attrs({
  src: menuIcon,
  alt: 'Menu',
})`
  width: 30px; // Adjust size as needed
  height: 30px; // Adjust size as needed
  cursor: pointer;

  @media (min-width: 769px) {
    display: none; // Hide the icon on larger screens
  }
`;
