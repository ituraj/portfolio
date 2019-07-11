import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Nav extends Component {
    render() {
        const { i18n } = this.props;
        return (
            <nav className="nav">
                <ul className="nav-items">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <ul className="nav-languages">

                    <li><button className="btn" onClick={() => i18n.changeLanguage('en')}>EN</button></li>
                    <li><button className="btn" onClick={() => i18n.changeLanguage('dk')}>DK</button></li>
                    <li><button className="btn" onClick={() => i18n.changeLanguage('pl')}>PL</button></li>
                </ul>
            </nav>
        );
    }
}

export default withTranslation('common')(Nav);
