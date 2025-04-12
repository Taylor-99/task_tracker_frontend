import React from 'react'
import { useState } from 'react';

function Login() {

    const [showLogin, setShowLogin] = useState(true)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState('');


  return (
    <div>
            <h1>Welcome</h1>
            {
                showLogin?
                <section>
                    <h2 onClick={() => setShowLogin(!showLogin)}>
                        Login 
                        <br></br> 
                        <small>New user? click here to Signup!</small>
                    </h2>

                    {error && <p>{error}</p>}

                    <label htmlFor="username">Username: </label>
                    <input type="text" 
                    name="username" 
                    placeholder="Enter your username" 
                     
                    required
                    />

                    <br></br>

                    <label htmlFor="password">Password: </label>
                    <input type="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    
                    required
                    />

                    <br></br>
                    <br></br>

                    <input type="submit" 
                    value="LogIn"/>
                </section> :

                 <section>
                 <h2 onClick={() => setShowLogin(!showLogin)}>
                    SignUp 
                    <br></br> 
                    <small>Already have an account? click to Login</small>
                </h2>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <label htmlFor="username">Username: </label>
                <input type="text" 
                name="username" 
                placeholder="Enter your username" 
                
                />

                <br></br>

                <label htmlFor="password">Password: </label>
                <input type="password" 
                name="password" 
                placeholder="Enter your password" 
                
                />

                    <br></br>
                    <br></br>

                <input type="submit" 
                value="Sign Up"/>
             </section>
            }        
        </div>
  )
}

export default Login