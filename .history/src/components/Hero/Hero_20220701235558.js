import React from 'react'

import { Section, SectionText, SectionTitle, NameTitle } from '../../styles/GlobalComponents'
import { title, LeftSection, RightSection, ImgSection, MainText } from './HeroStyles'


const Hero = (props) => {
  return (
    <Section>
      <div className='hero-section'>
        <LeftSection>
          <NameTitle main>
            HEY IT'S ME HERE
          </NameTitle>
          <SectionTitle main>
            MIHIR MODI
          </SectionTitle>
          <Title style={{ color: "white" }}>
            DESIGNER. CREATOR. GAMER
          </Title>
          <a className='hover-underline-animation' href='https://www.linkedin.com/in/mihirmodi272/'>Contact me</a>
        </LeftSection>
        <RightSection>
          <ImgSection>
            <Img src='/images/banner_3 1.png' />
          </ImgSection>
        </RightSection>
      </div>
      <div className='intro'>
        <MainText>
          The purpose of making this Portfolio is to Showcase the work I have done in Front-End Development. Currently, I am looking to work as an Intern.
        </MainText>
      </div>
    </Section>
  )
}

export default Hero