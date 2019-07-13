import React, { Component } from 'react';
import { ReactComponent as BarIcon } from '../../assets/icons/bar.svg';
import { withTranslation } from 'react-i18next';
import projectImage from '../../assets/images/project.png';

class Projects extends Component {
    render() {
        return (
            <>
                <section id="projects" className="projects">
                    <section className="project">
                        <figure className="figure"><img src={projectImage} alt="test" /></figure>
                        <article className="article">
                            <h2>{this.props.t('projects.heading-one')}</h2>
                            <BarIcon className="tertiary bar-lg" />
                            <p>{this.props.t('projects.article-one')}</p>
                            <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">React.js</p></span>
                            <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">Bootstrap 4</p></span>
                        </article>

                    </section>
                    <section className="project">
                        <figure className="figure"><img src={projectImage} alt="test" /></figure>
                        <article className="article">
                            <h2>{this.props.t('projects.heading-two')}</h2>
                            <BarIcon className="quaternary bar-lg" />
                            <p>{this.props.t('projects.article-two')}</p>
                            <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">React.js</p></span>
                            <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">Bootstrap 4</p></span>
                        </article>

                    </section>
                    <section className="project">
                        <figure className="figure"><img src={projectImage} alt="test" /></figure>
                        <article className="article">
                            <h2>{this.props.t('projects.heading-three')}</h2>
                            <BarIcon className="primary bar-lg" />
                            <p>{this.props.t('projects.article-three')}</p>
                            <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">React.js</p></span>
                            <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">Bootstrap 4</p></span>
                        </article>

                    </section>
                </section>
            </>
        );
    }
}

export default withTranslation('common')(Projects);
