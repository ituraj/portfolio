import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Nav extends Component {
    render() {
        const { i18n } = this.props;
        return (
            <nav className="nav">
                <ul className="nav__items">
                    <li><a href="#home-page">Izabela Turaj</a></li>
                    <li><a href="#about-page">About</a></li>
                    <li><a href="#skills-page">Skills</a></li>
                    <li><a href="#projects-page">Projects</a></li>
                    <li><a href="#contact-page">Contact</a></li>
                </ul>
                <ul className="nav__languages">
                    <li><button className="btn" onClick={() => i18n.changeLanguage('en')}>EN</button></li>
                    <li><button className="btn" onClick={() => i18n.changeLanguage('dk')}>DK</button></li>
                    <li><button className="btn" onClick={() => i18n.changeLanguage('pl')}>PL</button></li>
                </ul>
            </nav>
        );
    }
}

export default withTranslation('common')(Nav);
