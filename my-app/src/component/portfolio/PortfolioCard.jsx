import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../portfolio/Portfolio.css'



const PortfolioCard = ({image, name, index}) => {

    const navigate = useNavigate(index)
    return (
        <div>
            <article className='portfolio-item'>
                <div className='portfolio-img'>
                    <img src={image} alt="web" />
                </div>
                <h3>{name}</h3>
                <div className="portfolio-cta">
                    <a href="#" className='btn' target="_blank">Live Url</a>
                    <a className='btn btn-primary' onClick={()=> {
                        navigate("/project/" + index)
                    }}>More info</a>
                </div>
            </article>


        </div>
    )
}

export default PortfolioCard