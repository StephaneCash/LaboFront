import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashborad from '../pages/Dashborad';
import Eleves from '../pages/Eleves';
import Inscription from '../pages/Inscription';
import Login from '../pages/Login';

function RoutesComponents() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/inscription' element={<Inscription />} />
                <Route path="/dashboard" element={<Dashborad />} />
                <Route path="/eleves" element={<Eleves />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponents