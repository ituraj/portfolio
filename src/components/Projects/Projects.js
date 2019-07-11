import React from 'react';
import projectImage from '../../assets/images/project.png';

function Projects() {
    return (
        <>
            <section id="projects-page" className="projects">
                <section className="project">
                    <article className="article">
                        <h2>React Project</h2>
                        <p>Travel and leisure theme for ecommerce business created with React.js and Bootstrap 4.</p>
                        <p>React.js</p>
                        <p>Bootstrap 4</p>
                    </article>
                    <figure className="figure"><img src={projectImage} alt="test" /></figure>
                </section>
                <section className="project">
                    <figure className="figure"><img src={projectImage} alt="test" /></figure>
                    <article className="article">
                        <h2>React Project</h2>
                        <p>Travel and leisure theme for ecommerce business created with React.js and Bootstrap 4.</p>
                        <p>React.js</p>
                        <p>Bootstrap 4</p>
                    </article>

                </section>
                <section className="project">
                    <article className="article">
                        <h2>React Project</h2>
                        <p>Travel and leisure theme for ecommerce business created with React.js and Bootstrap 4.</p>
                        <p>React.js</p>
                        <p>Bootstrap 4</p>
                    </article>
                    <figure className="figure"><img src={projectImage} alt="test" /></figure>
                </section>
            </section>
        </>
    );
}

export default Projects;
