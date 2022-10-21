import React from 'react';
import { HashRouter, Routes, Route }from 'react-router-dom';
import {LandingPage} from '../pages/landingPage/LandingPage';
import {Home} from "../pages/home/Home";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/home" element={<Home />}/>
            </Routes>
        </HashRouter>
    );
};

export default App;
