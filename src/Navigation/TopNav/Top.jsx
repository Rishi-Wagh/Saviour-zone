import React from 'react'
import {Link , Outlet} from 'react-router-dom';
import './top.style.scss';

const Top = () => {
  return (
    <>
     <div className='top'>
        <Link to={'/'} className='element'> 
         <span>Home</span>
        </Link>

        <Link to={'/blog'} className='element'>
         <span>Blog</span>
        </Link>
    
        <Link to={'/joinus'} className='element'>
         <span> Join Us </span>
        </Link>
        
        <Link to={'/aboutus'} className='element'>
         <span>About US</span>
        </Link>
        
        <Link to={'/login'} className='element'>
         <span>Login</span>
        </Link>   
    </div>
    
    <Outlet />
    </>
   
  )
}

export default Top