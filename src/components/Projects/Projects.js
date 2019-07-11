import React from 'react';
import { ReactComponent as BarIcon } from '../../assets/icons/bar.svg';
import projectImage from '../../assets/images/project.png';

function Projects() {
    return (
        <>
            <section id="projects" className="projects">
                <section className="project">
                    <article className="article">
                        <h2>React Project</h2>
                        <BarIcon className="tertiary bar-lg" />
                        <p>Travel and leisure theme for ecommerce business created with React.js and Bootstrap 4.</p>
                        <span>  <BarIcon className="primary bar-sm" /><p>React.js</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p>Bootstrap 4</p></span>
                    </article>
                    <figure className="figure"><img src={projectImage} alt="test" /></figure>
                </section>
                <section className="project">
                    <figure className="figure"><img src={projectImage} alt="test" /></figure>
                    <article className="article">
                        <h2>React Project</h2>
                        <BarIcon className="quaternary bar-lg" />
                        <p>Travel and leisure theme for ecommerce business created with React.js and Bootstrap 4.</p>
                        <span>  <BarIcon className="primary bar-sm" /><p>React.js</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p>Bootstrap 4</p></span>
                    </article>

                </section>
                <section className="project">
                    <article className="article">
                        <h2>React Project</h2>
                        <BarIcon className="primary bar-lg" />
                        <p>Travel and leisure theme for ecommerce business created with React.js and Bootstrap 4.</p>
                        <span>  <BarIcon className="primary bar-sm" /><p>React.js</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p>Bootstrap 4</p></span>
                    </article>
                    <figure className="figure"><img src={projectImage} alt="test" /></figure>
                </section>
            </section>
        </>
    );
}

export default Projects;
