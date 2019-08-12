import React, { Component } from 'react';
import { ReactComponent as MaxIcon } from '../../assets/icons/max.svg';
import { ReactComponent as MinIcon } from '../../assets/icons/min.svg';
import { withTranslation } from 'react-i18next';
import portfolioImageThree from '../../assets/images/image3.png';

class Footer extends Component {
    render() {
        return (
            <>
                <footer id="contact" className="footer">
                    <figure className="figure"><img src={portfolioImageThree} alt="test" /></figure>
                    <article className="article">
                        <h2>{this.props.t('contact.heading')}</h2>
                        <MaxIcon className="secondary underscore" />
                        <p>{this.props.t('contact.article')}</p>
                        <a href="https://github.com/ituraj"
                            target="_blank"
                            rel="noopener noreferrer" className="btn-social">Github</a>
                        <a href="https://github.com/ituraj"
                            target="_blank"
                            rel="noopener noreferrer" className="btn-social">LinkedIn</a>
                        <a href="https://github.com/ituraj"
                            target="_blank"
                            rel="noopener noreferrer" className="btn-social">Resume</a>
                        <section className="tags">
                            <span>
                                <MinIcon className="tertiary underscore" />
                                <p className="tag-text">i.turaj@gmail.com</p>
                            </span>
                            <span> <MinIcon className="tertiary underscore" />
                                <p className="tag-text">+45 527 64 927</p>
                            </span>
                        </section>
                    </article>
                </footer>
            </>
        );
    }
}


export default withTranslation('common')(Footer);
