import React from 'react';
import { HashRouter, Routes, Route }from 'react-router-dom';
import {LandingPage} from '../pages/landingPage/LandingPage';
import {Home} from "../pages/home/Home";
import Layout from "../componets/templates/Layout";
import About from "../pages/about/About";

const App = () => {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/home" element={<Home />}/>
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="*" element={<h1>Not Found</h1>}/>
                </Routes>
            </Layout>
        </HashRouter>
    );
};

export default App;
