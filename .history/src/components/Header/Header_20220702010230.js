import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin, AiFillBehanceSquare, AiFillDribbbleSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { BsMedium } from 'react-icons/bs';
import { SiMedium } from 'react-icons/si'
import { Span, Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white' }} >
          <img src='/images/MD.svg' width="50px" height="auto" />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink style={{ color: "white" }}>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/mihirmodi272/">
          <NavLink style={{ color: "white" }}>
            Resume
          </NavLink>
        </a>
      </li>
      <li>
        <Link href="#about">
          <NavLink style={{ color: "white" }}>
            About Me
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://www.instagram.com/mehere.designs/'>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.behance.net/mehereon27'>
        <AiFillBehanceSquare size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://dribbble.com/MeHereon27'>
        <AiFillDribbbleSquare size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/MeHereon27'>
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/mihirmodi272/'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://medium.com/@meheree'>
        <SiMedium size="2.5rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
