import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


function Login() {
   const navigate = useNavigate();

   const handleLogin = () => {
      navigate('/waiter')
   }

  return (
   <div className='container1'>
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required/>
                {/* <FaUser className='icon' /> */}
             </div>
             <div className='input-box'>
                <input type='text' placeholder='Password' required/>
                {/* <FaLock className='icon'/> */}
                
             </div>
             <div className='input-box'>
                <input type='text' placeholder='Status' required/>
             </div>
             <div className='remember-forget'>
                <label><input type='checkbox'/>Remember me</label>
                <a href='#'>Forget password?</a>
             </div>
             <button onClick={handleLogin}  className="btn"type='submit'>Login</button>
        </form>
    </div>
    </div>
  )
}

export default Login;