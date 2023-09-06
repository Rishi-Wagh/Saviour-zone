import React  from 'react'
import './login.style.scss'
import { Link } from 'react-router-dom'

const Loginpage = () => {


  return (
    <div className="login">
        <div className="cart">
            <div className="left">
                <h1> Welcome! </h1>
                 <p> Tag Line! </p>

                 <Link to={'/org'} >
                 <button> Register </button>
                 </Link> 
            </div>
            <div className="right">
                <h1>Sign Up</h1>

                <form>
                    <input type='text' placeholder='username'></input>
                    <input type='password' placeholder='password'></input>
                    
                    <button > log in </button>
                   
                </form>
            </div>
        </div>
    </div>
  )
}

export default Loginpage