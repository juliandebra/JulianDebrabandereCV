import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Tech from './Components/Tech'
import Projects from './Components/Projects'

function App() {

  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const redirectProjects = () => {
    projectsRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const redirectAbout = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  useEffect(() => {
    localStorage.setItem('theme', theme ? true : false)
  }, [theme])



  return (
    <div className={theme ? "App" : "App-light"}>
      <Navbar redirectAbout={redirectAbout} redirectProjects={redirectProjects} theme={theme} setTheme={setTheme}/>
      <About  theme={theme} aboutRef={aboutRef}/>
      <Tech/>
      <Projects theme={theme} projectsRef={projectsRef}/>
    </div>
  )
}

export default App
