import { useState } from 'react';
import './App.css';

//Frontend

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function createAccount(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json();
        console.log(data);
    }

    return (
        <div>
            <h1>Create an Account</h1>
            <form onSubmit={createAccount}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                <br />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <br />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <br />
                <input type="submit" value="Register"/>
            </form>
        </div>
        
        
    );
}

export default App;
