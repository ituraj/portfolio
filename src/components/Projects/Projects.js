import React, { Component } from 'react';
import { ReactComponent as MaxIcon } from '../../assets/icons/max.svg';
import { ReactComponent as MinIcon } from '../../assets/icons/min.svg';
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
                            <MaxIcon className="tertiary bar-lg" />
                            <p>{this.props.t('projects.article-one')}</p>
                            <span>  <MinIcon className="primary bar-sm" /><p className="bar-text">React.js</p></span>
                            <span>  <MinIcon className="primary bar-sm" /><p className="bar-text">Bootstrap 4</p></span>
                        </article>

                    </section>
                    <section className="project">
                        <figure className="figure"><img src={projectImage} alt="test" /></figure>
                        <article className="article">
                            <h2>{this.props.t('projects.heading-two')}</h2>
                            <MaxIcon className="quaternary bar-lg" />
                            <p>{this.props.t('projects.article-two')}</p>
                            <span>  <MinIcon className="primary bar-sm" /><p className="bar-text">React.js</p></span>
                            <span>  <MinIcon className="primary bar-sm" /><p className="bar-text">Bootstrap 4</p></span>
                        </article>

                    </section>
                    <section className="project">
                        <figure className="figure"><img src={projectImage} alt="test" /></figure>
                        <article className="article">
                            <h2>{this.props.t('projects.heading-three')}</h2>
                            <MaxIcon className="primary bar-lg" />
                            <p>{this.props.t('projects.article-three')}</p>
                            <span>  <MinIcon className="primary bar-sm" /><p className="bar-text">React.js</p></span>
                            <span>  <MinIcon className="primary bar-sm" /><p className="bar-text">Bootstrap 4</p></span>
                        </article>

                    </section>
                </section>
            </>
        );
    }
}

export default withTranslation('common')(Projects);
