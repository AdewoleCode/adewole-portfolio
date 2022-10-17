import React from 'react'
import '../portfolio-desc/PortfolioDes.css'
import Img1 from '../../assets/portfolio1.jpg';
import { TbArrowBackUp } from 'react-icons/tb'
import { Link } from 'react-router-dom';
import { projects } from '../portfolio/Portfolio';

const PortfolioDes = () => {
    return (

        <>
            {
                projects.map(project => {
                    return (
                        <section id='des'>
                <div className="container des-container">
                  <div className="proj-image">
                        <div className="portfolio-image">
                             <img src={project.imgUrl} alt="" />
        //                 </div>
        //                 <div className="des-cta">
        //                     <a href="#" className='btn' target="_blank">Github</a>
        //                     <a href="#" className='btn btn-primary' target="_blank">Live URL</a>
        //                 </div>
        //             </div>
        //             <div className="proj-stacks">
        //                 <h2>{project.projectName}</h2>
        {/* //                 <p>Rentals is an aplication that is designed to help
        //                     demonstrates a renting website using the react js fra
        //                     work. Rentals provides a selection of a product in the aplication from fir
        //                     estore database and displays them for rent. Users can select to display products in single category, click on any
        //                     product to get more information including ratings, description, reviews , rentals has a built in timing sys
        //                     tem which is triggered o
        //                     nces the user completes his/her paymment using paystack
        //                 </p> */}
                            <p>{project.desc}</p>
        //                 <div className="stacks">
        //                     <h3>Technologies Used</h3>
        //                     <ol>
        //                         <li><span>01.</span> Firebase</li>
        //                         <li><span>02.</span> ReactJS</li>
        //                         <li><span>03.</span> Redux </li>
        //                         <li><span>04.</span> Tailwind Css</li>
        //                     </ol>
        //                 </div>

        //             </div>
        //         </div>
        //         <Link to="/project" className='btn des-btn'>{<TbArrowBackUp />}</Link>

        //     </section>


                    )
                })
            }
        </>




        //     <div className="container des-container">
        //         <div className="proj-image">
        //             <div className="portfolio-image">
        //                 <img src={Img1} alt="" />
        //             </div>
        //             <div className="des-cta">
        //                 <a href="#" className='btn' target="_blank">Github</a>
        //                 <a href="#" className='btn btn-primary' target="_blank">Live URL</a>
        //             </div>
        //         </div>
        //         <div className="proj-stacks">
        //             <h2>Ecommerce Web App</h2>
        //             <p>Rentals is an aplication that is designed to help
        //                 demonstrates a renting website using the react js fra
        //                 work. Rentals provides a selection of a product in the aplication from fir
        //                 estore database and displays them for rent. Users can select to display products in single category, click on any
        //                 product to get more information including ratings, description, reviews , rentals has a built in timing sys
        //                 tem which is triggered o
        //                 nces the user completes his/her paymment using paystack
        //             </p>
        //             <div className="stacks">
        //                 <h3>Technologies Used</h3>
        //                 <ol>
        //                     <li><span>01.</span> Firebase</li>
        //                     <li><span>02.</span> ReactJS</li>
        //                     <li><span>03.</span> Redux </li>
        //                     <li><span>04.</span> Tailwind Css</li>
        //                 </ol>
        //             </div>

        //         </div>
        //     </div>
        //     <Link to="/project" className='btn des-btn'>{<TbArrowBackUp />}</Link>

        // </section>
    )
}

export default PortfolioDes