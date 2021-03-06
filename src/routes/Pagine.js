import '../App.css'; 
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../screen/Home.js';
import Accedi from '../screen/Accedi.js';
import Layout from '../routes/Layout.js'
import Dashboard from '../screen/Dashboard.js';
import AddThings from '../screen/AddThings';

const Pagine = () => (
    <BrowserRouter>
    <Layout/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accedi" element={<Accedi />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/aggiungicose" element={<AddThings />} />
        </Routes>
    </BrowserRouter>
       

    );


export default Pagine;