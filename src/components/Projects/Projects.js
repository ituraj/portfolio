import React, { Component } from 'react';
import { ReactComponent as MaxIcon } from '../../assets/icons/max.svg';
import { ReactComponent as MinIcon } from '../../assets/icons/min.svg';
import { withTranslation } from 'react-i18next';
// import projectImageOne from '../../assets/images/project1.png';
import projectImageTwo from '../../assets/images/project2.png';
import projectImageThree from '../../assets/images/project3.png';

class Projects extends Component {
    render() {
        return (
            <>
                <section id="projects" className="projects">
                    <section className="project">
                        <article className="article">
                            <h2>{this.props.t('projects.heading-one')}</h2>
                            <MaxIcon className="secondary tag-lg" />
                            <p>{this.props.t('projects.article-one')}</p>
                            <a href="https://github.com/ituraj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-social">Live</a>
                            <a href="https://github.com/ituraj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-social">Github</a>
                            <section className="tags">
                                <span>  <MinIcon className="tertiary tag-sm" /><p className="tag-text">React.js</p></span>
                                <span>  <MinIcon className="tertiary tag-sm" /><p className="tag-text">Bootstrap 4</p></span>
                            </section>
                        </article>
                        <figure className="figure">
                            <img src={projectImageThree} alt="test" />
                        </figure>

                    </section>
                    <section className="project">
                        <figure className="figure">
                            <img src={projectImageTwo} alt="test" />
                        </figure>
                        <article className="article">
                            <h2>{this.props.t('projects.heading-two')}</h2>
                            <MaxIcon className="secondary tag-lg" />
                            <p>{this.props.t('projects.article-two')}</p>
                            <a href="https://github.com/ituraj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-social">Live</a>
                            <a href="https://github.com/ituraj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-social">Github</a>
                            <section className="tags">
                                <span>  <MinIcon className="tertiary tag-sm" /><p className="tag-text">Angular 2+</p></span>
                                <span>  <MinIcon className="tertiary tag-sm" /><p className="tag-text">Firebase</p></span>
                            </section>
                        </article>

                    </section>
                    <section className="project">
                        <article className="article">
                            <h2>{this.props.t('projects.heading-three')}</h2>
                            <MaxIcon className="secondary tag-lg" />
                            <p>{this.props.t('projects.article-three')}</p>
                            <a href="https://github.com/ituraj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-social">Live</a>
                            <a href="https://github.com/ituraj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-social">Github</a>
                            <section className="tags">
                                <span>  <MinIcon className="tertiary tag-sm" /><p className="tag-text">Angular 2+</p></span>
                                <span>  <MinIcon className="tertiary tag-sm" /><p className="tag-text">Bootstrap 4</p></span>
                            </section>
                        </article>
                        <figure className="figure">
                            <img src={projectImageThree} alt="test" />

                        </figure>
                    </section>
                </section >
            </>
        );
    }
}

export default withTranslation('common')(Projects);
