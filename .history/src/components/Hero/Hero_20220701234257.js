import React from 'react'

import { Section, SectionText, SectionTitle, NameTitle } from '../../styles/GlobalComponents'
import { LeftSection } from './HeroStyles'

const Hero = (props) => {
  return (
    <Section>
      <div className='hero-section'>
        <LeftSection>
          <NameTitle>
            HEY IT'S ME HERE
          </NameTitle>
          <SectionTitle main>
            MIHIR MODI
          </SectionTitle>
          <SectionText>
            A self-taught product designer based in Gujarat, India with good hands on experience at creating and delivering user-centered interfaces. I'm passionate about improving people's lives through design and am constantly looking to learn new things everyday.
          </SectionText>
          <a className='hover-underline-animation' href='https://www.linkedin.com/in/mihirmodi272/'>Contact me</a>
        </LeftSection>
      </div>
    </Section>
  )
}

export default Hero