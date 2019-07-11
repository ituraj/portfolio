import React from 'react';
import { ReactComponent as BarIcon } from '../../assets/icons/bar.svg';

function Skills() {
    return (
        <>
            <section id="skills" className="skills">
                <article className="heading">
                    <h2>Skills</h2>
                    <BarIcon className="quaternary bar-lg" />
                </article>
                <article className="article">
                    <span>  <BarIcon className="primary bar-sm" /><p>HTML5</p></span>
                    <span>  <BarIcon className="primary bar-sm" /><p>JavaScript</p></span>
                    <span>  <BarIcon className="primary bar-sm" /><p>React.js</p></span>
                    <span>  <BarIcon className="primary bar-sm" /><p>Angular 2</p></span>
                    <span>  <BarIcon className="primary bar-sm" /><p>CSS3</p></span>
                    <span>  <BarIcon className="primary bar-sm" /><p>SCSS</p></span>
                    <span>  <BarIcon className="primary bar-sm" /><p>Bootstrap 4</p></span>
                    <span>  <BarIcon className="primary bar-sm" /><p>Foundation 6</p></span>
                    <span>  <BarIcon className="primary bar-sm" /><p>UX/UI</p></span>
                    <span>  <BarIcon className="primary bar-sm" /><p>RWD</p></span>
                    <span>  <BarIcon className="primary bar-sm" /><p>Agile</p></span>
                </article>
            </section>
        </>
    );
}

export default Skills;
