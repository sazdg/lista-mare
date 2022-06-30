import '../App.css'; 
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../screen/Home.js';
import Accedi from '../screen/Accedi.js';

const Pagine = () => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/accedi" element={<Accedi />} />
    </Routes>
    );


export default Pagine;