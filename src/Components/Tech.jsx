import React from 'react'
import Html from "../assets/html.png"
import Css from "../assets/css.png"
import Js from "../assets/javascript.png"
import ReactLogo from "../assets/react.png"
import Fb from "../assets/firebase.png"
import Py from "../assets/python.png"
import Sql from "../assets/sql.png"
import Node from "../assets/node.png"
import C from "../assets/c.png"
import Jira from "../assets/jira.png"
import Motoko from "../assets/Motoko.jpg"
import PgLogo from '../assets/pg-logo.svg'
import seqLogo from '../assets/sequelize-logo.svg'

const Tech = () => {
  return (
    <>
        <h1 className='Subtitle'>Technologies</h1>
        <div className="Tech">
            <img src={ReactLogo} alt="react" className="react" title='React'/>
            <img src={Html} alt="html" className="html" title='HTML'/>
            <img src={Css} alt="css" className="css" title='CSS'/>
            <img src={Js} alt="js" className="js" title='Javascript'/>
            <img src={Fb} alt="firebase" className="firebase" title='Firebase'/>
            <img src={Py} alt="python" className="python" title='Python'/>
            <img src={Sql} alt="sql" className="sql" title='SQL'/>
            <img src={Node} alt="node" className="node" title='Node.js'/>
            <img src={C} alt="c" className="c" title='C'/>
            <img src={Jira} alt="jira" className="jira" title='Jira'/>
            <img src={PgLogo} alt="postgreSQL" className="pg" title='PostgreSQL'/>
            <img src={seqLogo} alt="sequelize" className="sequelize" title='Sequelize'/>
            <img src={Motoko} alt="motoko" className="motoko" title='Motoko'/>
        </div>
    </>
  )
}

export default Tech