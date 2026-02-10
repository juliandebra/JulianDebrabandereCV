import React from 'react'

import ProfileImage from '../assets/ProfileImage.jpg'
const About = ({ aboutRef, theme }) => {
  return (
    <div ref={aboutRef}>
      <h1 className='Title'>JULIAN DEBRABANDERE</h1>
      <h1 className='Subtitle'>Full Stack Developer</h1>
      <div className='About'>
        <img src={ProfileImage} className='photo' alt='' />
        <p>
          Hi, I’m Julian. I build web products where complexity is unavoidable.
        </p>

        <p>
          I’m a Full Stack Developer focused on React, TypeScript, Next.js, and
          Node.js, with experience modernizing legacy systems, designing
          scalable frontend architectures, and translating messy business rules
          into clean, maintainable code.
        </p>

        <p>
          I’ve worked in startups as the main technical decision-maker, built
          real-time dashboards and SaaS platforms, and integrated external
          services like payments, maps, and auth providers.
        </p>

        <p>
          Alongside development, I teach web technologies — a role that
          constantly pushes me to write clearer code and communicate better.
        </p>

        <a
          href='mailto:julian.debra25@gmail.com'
          style={{ textDecoration: 'none' }}
          target='_blank'
        >
          <button className={theme ? 'Contact-Button' : 'Contact-Button-light'}>
            Contact Me
          </button>
        </a>
      </div>
    </div>
  )
}

export default About
