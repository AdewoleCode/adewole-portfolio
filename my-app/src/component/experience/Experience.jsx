import React from 'react'
import '../experience/Experience.css'
import { BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Experience</h5>
            <h2>The stacks i work with!</h2>

            <div className="container experience-container">
                <div className="front-end">
                    <h3>Frontend Development</h3>
                    <div className="experience-cont">
                        <article>
                            <BsPatchCheckFill className='exp-icon'  />
                            <h4>HTML</h4>
                        </article>
                        <article>
                            <BsPatchCheckFill className='exp-icon' />
                            <h4>JAVASCRIPT</h4>
                        </article>
                        <article>
                            <BsPatchCheckFill className='exp-icon' />
                            <h4>BOOTSRAP</h4>
                        </article>
                        <article>
                            <BsPatchCheckFill className='exp-icon' />
                            <h4>TAILWIND CSS</h4>
                        </article>
                        <article>
                            <BsPatchCheckFill className='exp-icon' />
                            <h4>NEXT.JS</h4>
                        </article>
                        <article>
                            <BsPatchCheckFill className='exp-icon' />
                            <h4>REACT</h4>
                        </article>
                    </div>
                </div>

                {/* backend */}
                <div className="back-end">
                    <h3>Backend Development</h3>
                    <div className="experience-cont">
                        <article>
                            <BsPatchCheckFill className='exp-icon' />
                            <h4>NODE JS</h4>
                        </article>
                        <article>
                            <BsPatchCheckFill className='exp-icon' />
                            <h4>FIREBASE</h4>
                        </article>
                        <article className='icb'>
                            <BsPatchCheckFill className='exp-icon' />
                            <h4>PHP AND MYSQL (in view...)</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Experience