import React, { Component } from 'react';
import { ReactComponent as MinIcon } from '../../assets/icons/min.svg';
import { withTranslation } from 'react-i18next';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            overlay: false
        };
        this.handleOverlay = this.handleOverlay.bind(this);
    }

    handleOverlay() {
        this.setState({
            overlay: !this.state.overlay
        });
        document.body.classList.add('overflow-hidden');
    }
    render() {
        const { i18n } = this.props;
        return (
            <>
                <nav className="nav-small">
                    <span>Izabela Turaj</span>
                    {this.state.overlay === true ?
                        <button className="close-menu" onClick={this.handleOverlay}>
                            <MinIcon className="nav-bar underscore" />
                            <MinIcon className="nav-bar underscore" />
                        </button>
                        :
                        <button className="burger-menu" onClick={this.handleOverlay}>
                            <MinIcon className="nav-bar underscore" />
                            <MinIcon className="nav-bar underscore" />
                            <MinIcon className="nav-bar underscore" />
                        </button>
                    }
                    <div
                        id="overlay"
                        className={this.state.overlay === false ? "hidden" : "visible"}>
                        <ul className="nav-items">
                            <li><a href="#home" onClick={this.handleOverlay}>{this.props.t('nav.home')}</a></li>
                            <li><a href="#about" onClick={this.handleOverlay}>{this.props.t('nav.about')}</a></li>
                            <li><a href="#skills" onClick={this.handleOverlay}>{this.props.t('nav.skills')}</a></li>
                            <li><a href="#projects" onClick={this.handleOverlay}>{this.props.t('nav.projects')}</a></li>
                            <li><a href="#contact" onClick={this.handleOverlay}>{this.props.t('nav.contact')}</a></li>
                        </ul>

                        <ul className="nav-languages">

                            <li><button className={`btn ${
                                i18n.language === "en" ? "btn__active" : ""
                                }`} onClick={() => i18n.changeLanguage('en')}>EN</button></li>
                            <li><button className={`btn ${
                                i18n.language === "dk" ? "btn__active" : ""
                                }`} onClick={() => i18n.changeLanguage('dk')}>DK</button></li>
                            <li><button className={`btn ${
                                i18n.language === "pl" ? "btn__active" : ""
                                }`} onClick={() => i18n.changeLanguage('pl')}>PL</button></li>
                        </ul>
                    </div>
                </nav>

                <nav className="nav-large">
                    <ul className="nav-items">
                        <li><a href="#home"> {this.props.t('nav.home')}</a></li>
                        <li><a href="#about">{this.props.t('nav.about')}</a></li>
                        <li><a href="#skills">{this.props.t('nav.skills')}</a></li>
                        <li><a href="#projects">{this.props.t('nav.projects')}</a></li>
                        <li><a href="#contact">{this.props.t('nav.contact')}</a></li>
                    </ul>

                    <ul className="nav-languages">

                        <li><button className={`btn ${
                            i18n.language === "en" ? "btn__active" : ""
                            }`} onClick={() => i18n.changeLanguage('en')}>EN</button></li>
                        <li><button className={`btn ${
                            i18n.language === "dk" ? "btn__active" : ""
                            }`} onClick={() => i18n.changeLanguage('dk')}>DK</button></li>
                        <li><button className={`btn ${
                            i18n.language === "pl" ? "btn__active" : ""
                            }`} onClick={() => i18n.changeLanguage('pl')}>PL</button></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default withTranslation('common')(Nav);
