import React from "react";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import About from './component/about/About';
import Experience from './component/experience/Experience';
import Footer from './component/footer/Footer';
import Contact from "./component/contact/Contact"
import Portfolio from './component/portfolio/Portfolio'
// import PortfolioDes from "./component/portfolio-desc/PortfolioDes";

import { Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <>
                <Nav />
                {/* < PortfolioDes/> */}
                {/* <Header /> */}

                {/* <About />
                <Experience />
                <Portfolio />
                <Contact />
                <Footer /> */}

                {/* <Routes>
                    <Route path="/" element={<Nav />}/>
                    <Route path="/about" element={<About />}/>
                </Routes> */}
        </>
    )
}

export default App;