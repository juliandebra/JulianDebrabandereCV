import React from 'react'

import ProfileImage from '../assets/ProfileImage.jpg'
const About = ({theme}) => {
  return (
    <>
        <h1 className="Title">JULIAN DEBRABANDERE</h1>
        <h1 className="Subtitle">Front-End Developer</h1>
        <div className='About'>
            <img src={ProfileImage} className="photo" alt=""/>
            <p>
                Hi! My name is Julian. I am a Front-End Developer with junior level. 
                Since I started programming, I have not stopped learning. 
                Every day, I try to improve my skills with React, JS, HTML & CSS. 
                At the same time, I am studying the basics with NodeJS, SQL and Python, 
                to start integrating the back-end to my projects. 
                If you want to know more about my profile, please contact me.
            </p>
            <a href="mailto:julian.debra25@gmail.com" style={{textDecoration:"none"}} target="_blank">
                <button className={theme ? "Contact-Button" : "Contact-Button-light" }>Contact Me</button>
            </a>
        </div>
        
    </>
  )
}

export default About