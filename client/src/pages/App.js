import { React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './index'
import Register from './register'

import './App.css';

//Frontend

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
