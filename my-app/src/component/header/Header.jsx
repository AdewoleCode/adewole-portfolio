import React from "react";
import './Header.css';
import CTA from "../header/CTA";
import HeaderSocials from "./headerSocials";
import UNDRAW1  from '../../assets/react.png.svg'
import {GrReactjs} from 'react-icons/gr';
import {TbBrandJavascript} from 'react-icons/tb'
import {SiTailwindcss} from 'react-icons/si'
import {SiNextdotjs} from 'react-icons/si'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header  id="home">
            <div className="container header-container" id="">
                <h1>Ademola Adewole</h1>
                <h5>Front-end Engineer</h5>
                <div className="header-icons">
                    <a href="http://github.com/facebook/react" target='_blank'><GrReactjs/></a>
                    <a href="http://javascript.com" target='_blank'><TbBrandJavascript/></a>
                    <a href="http://tailwindcss.com" target='_blank'><SiTailwindcss/></a>
                    <a href="http://nextjs.org" target='_blank'><SiNextdotjs/></a>
                </div>
                <h5  className="text-light h5">Focused on styling responsive and accessible interfaces and experiences on the web</h5>
                <CTA />

                <HeaderSocials />
                <div className="me">
                    <img src={UNDRAW1} alt="" />
                </div>

                <a href="#contact" className="scroll-down">Adewole</a>
            </div>
        </header>
    )
}


export default Header;
