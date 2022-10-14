import React from 'react'
import '../portfolio/Portfolio.css';
import IMG1 from '.././../assets/portfolio1.jpg';
import IMG2 from '.././../assets/portfolio2.jpg';
import IMG3 from '.././../assets/portfolio3.jpg';
import IMG4 from '.././../assets/portfolio4.jpg';
import IMG5 from '.././../assets/portfolio5.png';
import IMG6 from '.././../assets/portfolio6.jpg';
import PortfolioDes from '../portfolio-desc/PortfolioDes';

import { Routes, Route, Link } from 'react-router-dom';

const projects = [
    {
        id: "01",
        projectName: "cypto web",
        imgUrl: IMG1,
        desc: "entals is an aplication that is designed to heldemonstrates a renting website using the react js fra work.Rentals provides a selection of a product istack jjjj"
    },
    {
        id: "01",
        projectName: "cypto web",
        imgUrl: IMG2,
        desc: "entals is an aplication that is designed to heldemonstrates a renting website using the react js fra work.Rentals provides a selection of a product istack jjjj"
    },
    {
        id: "01",
        projectName: "cypto web",
        imgUrl: IMG3,
        desc: "entals is an aplication that is designed to heldemonstrates a renting website using the react js fra work.Rentals provides a selection of a product istack jjjj"
    },
    {
        id: "01",
        projectName: "cypto web",
        imgUrl: IMG4,
        desc: "entals is an aplication that is designed to heldemonstrates a renting website using the react js fra work.Rentals provides a selection of a product istack jjjj"
    },
    {
        id: "01",
        projectName: "cypto web",
        imgUrl: IMG5,
        desc: "entals is an aplication that is designed to heldemonstrates a renting website using the react js fra work.Rentals provides a selection of a product istack jjjj"
    },
]


const Portfolio = () => {
    return (

        <>
            <section id='project'>
                <h5>Portfolio</h5>
                <h2>Here are some of the projects i have dedicated my time to...</h2>

                <div className="container portfolio-container">

                    {projects.map(project => {
                        return (

                            <article className='portfolio-item'>
                            <div className='portfolio-img'>
                                <img src={project.imgUrl} alt="web" />
                            </div>
                            <h3>{project.projectName}</h3>
                            <div className="portfolio-cta">
                                <a href="#" className='btn' target="_blank">Github</a>
                                <Link to="/project/des" className='btn btn-primary'>More info</Link>
                            </div>
                        </article>
                        )
                    })}





                   

                    {/* <article className='portfolio-item'>
                        <div className='portfolio-img'>
                            <img src={IMG1} alt="web" />
                        </div>
                        <h3>this is the name of the project</h3>
                        <div className="portfolio-cta">
                            <a href="#" className='btn' target="_blank">Github</a>
                            <a href="#" className='btn btn-primary'>More Info</a>
                        </div>
                    </article>


                    <article className='portfolio-item'>
                        <div className='portfolio-img'>
                            <img src={IMG1} alt="web" />
                        </div>
                        <h3>this is the name of the project</h3>
                        <div className="portfolio-cta">
                            <a href="#" className='btn' target="_blank">Github</a>
                            <a href="#" className='btn btn-primary'>LMore Info</a>
                        </div>
                    </article> */}


                    {/* <article className='portfolio-item'>
                        <div className='portfolio-img'>
                            <img src={IMG1} alt="web" />
                        </div>
                        <h3>this is the name of the project</h3>
                        <div className="portfolio-cta">
                            <a href="#" className='btn' target="_blank">Github</a>
                            <a href="#" className='btn btn-primary' >More Info</a>
                        </div>
                    </article> */}


                    {/* <article className='portfolio-item'>
                        <div className='portfolio-img'>
                            <img src={IMG1} alt="web" />
                        </div>
                        <h3>this is the name of the project</h3>
                        <div className="portfolio-cta">
                            <a href="#" className='btn' target="_blank">Github</a>
                            <a href="#" className='btn btn-primary'>More Info</a>
                        </div>
                    </article>


                    <article className='portfolio-item'>
                        <div className='portfolio-img'>
                            <img src={IMG1} alt="web" />
                        </div>
                        <h3>this is the name of the project</h3>
                        <div className="portfolio-cta">
                            <a href="#" className='btn' target="_blank">Github</a>
                            <a href="#" className='btn btn-primary' >More Info</a>
                        </div>
                    </article> */}

                </div>
            </section>

            <Routes>
                <Route path="/project/des" element={<PortfolioDes />} />


            </Routes>
        </>
    )
}

export default Portfolio