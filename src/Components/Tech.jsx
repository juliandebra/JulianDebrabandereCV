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

const Tech = () => {
  return (
    <>
        <h1 className='Subtitle'>Technologies</h1>
        <div className="Tech">
            <img src={Html} alt="html" className="html"/>
            <img src={Css} alt="css" className="css"/>
            <img src={Js} alt="js" className="js"/>
            <img src={ReactLogo} alt="react" className="react"/>
            <img src={Fb} alt="firebase" className="firebase"/>
            <img src={Py} alt="python" className="python"/>
            <img src={Sql} alt="sql" className="sql"/>
            <img src={Node} alt="node" className="node"/>
            <img src={C} alt="c" className="c"/>
            <img src={Jira} alt="jira" className="jira"/>
            <img src={Motoko} alt="motoko" className="motoko"/>
        </div>
    </>
  )
}

export default Tech