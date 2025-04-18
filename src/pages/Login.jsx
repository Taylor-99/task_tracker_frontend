import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Assuming your backend sends back: { token: 'jwt-token', username: '...' }
                localStorage.setItem('token', data.token); // Save the token
                localStorage.setItem('user', data.username);
                navigate('/'); // or navigate.replace
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Network error');
        }
    };

    const handleChange = (e) => {
        setLoginData({
            ...loginData, 
            [e.target.name]: e.target.value
        })
    }
    

  return (
    <div>
        <h1>Welcome</h1>
        <p>Let's get productive!</p>

        <form onSubmit={(e) => {
            e.preventDefault();
            setError('');
            handleLogin()
        }}>
            <h2>
                Login 
                <br></br> 
                <small>New user? click here to Signup!</small>
            </h2>

            {error && <p className="text-red-500 mb-4" >{error}</p>}

            <label htmlFor="email">Email: </label>
            <input type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={loginData.email} 
            onChange={handleChange}    
            required
            />

            <br></br>

            <label htmlFor="password">Password: </label>
            <input type="password" 
            name="password" 
            placeholder="Enter your password"
            value={loginData.password} 
            onChange={handleChange} 
            required
            />

            <br></br>
            <br></br>

            <input type="submit" 
            value="LogIn"/>

        </form>      
    </div>
  )
}

export default Login