import React from 'react'
import '../portfolio/Portfolio.css';
import IMG1 from '.././../assets/portfolio1.jpg';
import IMG2 from '.././../assets/portfolio2.jpg';
import IMG3 from '.././../assets/portfolio3.jpg';
import IMG4 from '.././../assets/portfolio4.jpg';
import IMG5 from '.././../assets/portfolio5.png';
import IMG6 from '.././../assets/portfolio6.jpg';
import PortfolioDes from '../portfolio-desc/PortfolioDes';
import PortfolioCard from './PortfolioCard';

import { Routes, Route, Link } from 'react-router-dom';

import Projects from '../../helper/Projects';
import { useParams } from 'react-router-dom';

const Portfolio = () => {

    let {id} = useParams()
    const projectL = Projects[id]
    return (

        <>
            <section id='project'>
                <h5>Portfolio</h5>
                <h2>Here are some of the projects i have dedicated my time to...</h2>

                <div className="container portfolio-container">

                    {Projects.map((project, index) => {
                        return (
                            <PortfolioCard index={index} image={project.imgUrl} name={project.projectName} />
                        )
                    })}


                </div>
            </section>
        </>
    )
} 

export default Portfolio