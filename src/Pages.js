import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import UserInterface from './Pages/UserInterface';

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='user/:id' element={<UserInterface />} />
        </Routes>
    )
}

export default Pages;