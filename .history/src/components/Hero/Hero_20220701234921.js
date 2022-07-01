import React from 'react'

import { Section, SectionText, SectionTitle, NameTitle } from '../../styles/GlobalComponents'
import { LeftSection, Title } from './HeroStyles'

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
      </div>
    </Section>
  )
}

export default Hero