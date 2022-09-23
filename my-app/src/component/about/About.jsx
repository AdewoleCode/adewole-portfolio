import React from 'react';
import './About.css';
import man from '../../assets/man.png'
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>ABOUT ME!</h2>

      <div className='container about-container'>
        <div className="about-me">
          <div className="me-img">
            <img src={man} alt="ABOUT IMAGE" />

          </div>
        </div>
        <div className="about-content">

   

          <p>I’m an experienced Frontend Engineer with over a years of programming experience. </p>

          <p>I am a passionate self-learner, exploring and building projects using various technologies that follows W3C Web Standards.</p>
          <p>
            I am well versed in React and NextJS. As a developer, I enjoy bridging the gap between functionality and design. My goal is to
            always build web applications that are efficient while providing quality user experiences.
            Also, I am highly responsive to client needs and committed to helping people realize their vision.
          </p>

          <Link to="/contact" className='btn btn-primary'>Let's talk!</Link>
        </div>

      </div>
    </section>
  )
}

export default About
