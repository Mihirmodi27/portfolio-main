import React from 'react';
import { AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin, AiFillBehanceSquare, AiFillDribbbleSquare } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { SiMedium } from 'react-icons/si'
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91 8141052176">+91 7096610139</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:mehere.designs@gmail.com">
            mehere.designs@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>#Believe</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
