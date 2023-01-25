import { useState, React } from 'react';
import { Link } from 'react-router-dom'

//Frontend

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function checkUser(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json();
        console.log(data);
        if (data.user === false) {
            console.log("user doesnt exist");
        }
        else {
            console.log("log in successful");
        }
    }

    return (
        <div>
            <h1>Sign in</h1>
            <form onSubmit={checkUser}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <br />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <br />
                <input type="submit" value="Log in"/>
            </form>
            <Link to='register'>Create account</Link> 
        </div>
        
        
    );
}

export default Login;
