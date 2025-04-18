import React from 'react'

const Signup = () => {

    const navigate = useNavigate();

    const [signupData, setsignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handlesignup = async () => {
        try {
            const response = await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
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

        <section>
            <h2>
                Sign Up 
                <br></br> 
                <small>Already Have an account? click here to Login!</small>
            </h2>

            <label htmlFor="firstName">First Name: </label>
            <input type="text" 
            name="firstName" 
            placeholder="Enter your First Name" 
            required
            />
            
            <br></br>

            <label htmlFor="lastName">Last Name: </label>
            <input type="text" 
            name="lastName" 
            placeholder="Enter your Last Name" 
            required
            />

            <br></br>

            <label htmlFor="email">Email: </label>
            <input type="email" 
            name="email" 
            placeholder="Enter your email" 
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
        </section>      
    </div>
  )
}

export default Signup