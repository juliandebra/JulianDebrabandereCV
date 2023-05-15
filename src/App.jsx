import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Tech from './Components/Tech'
import Projects from './Components/Projects'

function App() {
  
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  useEffect(() => {
    localStorage.setItem('theme', theme ? true : false)
  }, [theme])

  useEffect(() => {

  }, [])

  return (
    <div className={theme ? "App" : "App-light"}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <About theme={theme}/>
      <Tech/>
      <Projects theme={theme}/>
    </div>
  )
}

export default App
