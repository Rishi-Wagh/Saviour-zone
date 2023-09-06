import React from 'react'
import './org.style.scss'
import { Link } from 'react-router-dom'
const Organization = () => {
  return (
    <div className="organization">
        <div className="menue">
           <div className="head">
             <h1> Who is This ?</h1>
           </div>
            <div className="cards">
                <div className="donar">
                    <Link to={'/register'} style={{textDecoration: 'none' , color: 'white' , fontSize: '50px'}}>
                     <span>Donar</span>
                    </Link>
                </div>
                <div className="hospital">
                   <Link to={'/register'} style={{textDecoration: 'none' , color: 'white', fontSize: '50px'}} >
                   <span>Recipent</span>
                   </Link>
                </div>
                <div className="ngo">
                  <Link to={'/register'} style={{textDecoration: 'none' , color: 'white', fontSize: '50px'}} >
                   <span>Hospital</span>
                   </Link>
                </div>
                <div className="others">
                    <span>Others</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Organization