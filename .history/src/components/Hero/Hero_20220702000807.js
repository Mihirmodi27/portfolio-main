import React from 'react'

import { Section, SectionText, SectionTitle, NameTitle } from '../../styles/GlobalComponents'
import { Title, Img, LeftSection, RightSection, ImgSection, MainText } from './HeroStyles'


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
          A product designer based in Gujarat, India. Having a curious personality I am passionate about improving myself everyday, challenging myself and constantly looking forward to learn new stuff everyday.
        </MainText>
      </div>
    </Section>
  )
}

export default Hero