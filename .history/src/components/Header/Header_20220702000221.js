import Link from 'next/link';
import React from 'react';
import { AiFillTwitterSquare, AiFillLinkedin, AiFillBehanceSquare, AiFillDribbbleSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Span, Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white' }} >
          <img src='/images/MD.png' width="100px" height="auto" />
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
        <Link href="#about">
          <NavLink style={{ color: "white" }}>
            About Me
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
