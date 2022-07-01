import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .hover-underline-animation {
    padding-top: 10px;
    display: inline-block;
    position: relative;
    color: white;
    font-size: 20px;
    font-weight: 610;
  }
  
  .hover-underline-animation:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  .intro{
    width: 800px;
    height: 20vh;
    margin-bottom: 5vh;
    margin-left: 150px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    margin-bottom: 40px;
    background:
    linear-gradient(to right, cyan 2px, transparent 2px) 0 0,
    linear-gradient(to right, cyan 2px, transparent 2px) 0 100%,
    linear-gradient(to left, cyan 2px, transparent 2px) 100% 0,
    linear-gradient(to left, cyan 2px, transparent 2px) 100% 100%,
    linear-gradient(to bottom, cyan 2px, transparent 2px) 0 0,
    linear-gradient(to bottom, cyan 2px, transparent 2px) 100% 0,
    linear-gradient(to top, cyan 2px, transparent 2px) 0 100%,
    linear-gradient(to top, cyan 2px, transparent 2px) 100% 100%;

  background-repeat: no-repeat;
  background-size: 20px 20px;
  }
  .hero-section{
    display: flex;
  }s
`;

export default GlobalStyles;