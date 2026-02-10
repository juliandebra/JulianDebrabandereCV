import React from 'react'
import JcGif from '../assets/vinilosgif.gif'
import Somos from '../assets/Somos Mas - ONG.gif'
import Hf from '../assets/hotelfoodgif.gif'
import Cart from '../assets/Cartgif.gif'
import Credit from '../assets/creditsimulator.gif'
import Nular from '../assets/nulargif.gif'
import GifSection from './GifSection'
import MyNotes from '../assets/myNotes.gif'
import GPgif from '../assets/GP demo.gif'

const Projects = ({ projectsRef, theme }) => {
  const sections = [
    {
      href: 'https://app.globalcitizens.co/',
      img: GPgif,
      h2: 'GlobalCitizens',
      p: 'Visa Processing SaaS featuring a dynamic Country Explorer and a step-by-step Plan Manager. Built with a focus on complex state management for visa eligibility algorithms and high-fidelity mobile-first interfaces.',
      libraries: [
        'Next.js',
        'TanStack Query',
        'Framer Motion',
        'Tailwind CSS',
        'Google Maps API',
        'React Hook Form',
      ],
    },
    {
      href: 'https://ensolvers-front-yi4a.vercel.app/',
      img: MyNotes,
      h2: 'myNotes App',
      p: 'Notes maker. Frontend with React. Backend with Node and express. DB with PostgreSQL. (Please, have patience to start using the app, because server takes a few seconds to start)',
      libraries: [
        'Axios',
        'Postgresql',
        'React-router-dom',
        'Sweet Alert 2',
        'Sequelize',
      ],
      github: 'https://github.com/juliandebra/ensolvers-front',
    },
    {
      href: 'https://clientes.nular.co/',
      img: Nular,
      h2: 'Nular',
      p: 'Testing Platform for UX/UI designers where you can create quizzes and have a feedback about the app you are testing',
      libraries: [
        'Firebase',
        'Redux',
        'Chakra UI',
        'Sweet Alert 2',
        'React-router-dom',
        'React-select',
        'Styled Components',
        'd3 Cloud',
      ],
    },
    {
      href: 'https://jc-front.vercel.app/',
      img: JcGif,
      h2: 'Johnny Cash Vinilos',
      p: ' E-commerce. Frontend with React, DB with Firebase and Backend with Node.js /n Libraries used:',
      libraries: [
        'Firebase',
        'Three Fiber',
        'Mercado Pago',
        'React Router Dom',
        'Formik',
        'Material UI',
        'React Bootstrap',
        'Axios',
        'Styled Components',
        'Sweet Alert 2',
        'Font Awesome',
      ],
    },
    {
      href: 'https://ongsomos-mas.vercel.app/',
      img: Somos,
      h2: 'Somos más - Alkemy',
      p: ' Project made between a few collaborators. In this site, you can create an account and have access to the backoffice where you can read, edit and publish each section of the NGO. /n Libraries used:',
      libraries: [
        'Formik',
        'CKeditor',
        'Google Maps',
        'React Router Dom',
        'Jest',
        'Mercado Pago',
        'Redux',
        'Axios',
        'LeafLet',
        'Sweet Alert 2',
      ],
      github: 'https://github.com/alkemyTech/OT144-CLIENT',
    },
    {
      href: 'https://hotel-food-chi.vercel.app/',
      img: Hf,
      h2: 'HotelFood Menues',
      p: ' Project where you can login with a mocked account. Once you are logged, you can look for a recipe in the search bar. When you click one recipe you can have a detail of this and have the option to add to your menu. /n Libraries used:',
      libraries: [
        'Font Awesome',
        'React Router Dom',
        'Formik',
        ' React Bootstrap',
        'Axios',
        'Styled Components',
        'Font Awesome',
      ],
      github: 'https://github.com/juliandebra/HotelFood',
    },
  ]

  return (
    <div ref={projectsRef}>
      <h1 className='Subtitle'>PROJECTS</h1>

      <div className='Grid-Section'>
        {sections.map((section, index) => (
          <GifSection key={index} section={section} theme={theme} />
        ))}
      </div>
    </div>
  )
}

export default Projects
