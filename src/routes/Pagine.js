import '../App.css'; 
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../screen/Home.js';
import Accedi from '../screen/Accedi.js';
import Layout from '../routes/Layout.js'

const Pagine = () => (
    <BrowserRouter>
    <Layout/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accedi" element={<Accedi />} />
        </Routes>
    </BrowserRouter>
       

    );


export default Pagine;