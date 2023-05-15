import { faCircleInfo, faCode, faInfo, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const GifSection = ({section}) => {

    const [openModal, setOpenModal] = useState(false)

  return (
    <>
            <div className="gif-section">  
                <a href={section.href} target="_blank" >
                    <img src={section.img} alt="" className="img"/>
                </a>
                <div className="Bot-Img">
                    <h2>{section.h2}</h2>
                    <FontAwesomeIcon 
                        style={{ margin: '10px', padding: '8px'}}
                        className="material-icons" icon={faCircleInfo} onClick={() => setOpenModal(true)}/>
                    <div id="modal5" className="modal" style={{display: openModal ?  'block' : 'none'}}>
                        <FontAwesomeIcon 
                            onClick={() => setOpenModal(false)} 
                            icon={faXmark} className="material-icons" 
                            style={{ margin: '10px', padding: '5px 7px 5px 7px', position: 'absolute', right: 0}}
                        />
                        <p>
                            {section.p}
                        </p>
                        <ul className="LibrariesList">
                            {section.libraries.map((lib, index) => <li key={index}>{lib}</li> )}
                        </ul>
                    </div>
                    {section.github && 
                        <a href={section.github} target="_blank">
                            <FontAwesomeIcon  className="material-icons" icon={faCode} 
                            style={{ marginTop: '4px', marginRight: '20px', padding: '7px 5px 7px 5px'}}
                            />
                        </a>  
                    }
                </div>   
            </div>
    </>
  )
}

export default GifSection