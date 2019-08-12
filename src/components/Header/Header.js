import React, { Component } from 'react';
import { ReactComponent as MaxIcon } from '../../assets/icons/max.svg';
import { withTranslation } from 'react-i18next';
import portfolioImageOne from '../../assets/images/image1.png';



class Header extends Component {
    render() {
        return (
            <>
                <header id="home" className="header">
                    <article className="article">
                        <h1>{this.props.t('home.heading')}</h1>
                        <MaxIcon className="secondary underscore" />
                        <p>{this.props.t('home.article')}</p>
                    </article>
                    <figure className="figure"><img src={portfolioImageOne} alt="test" /></figure>
                </header>
            </>
        );
    }
}

export default withTranslation('common')(Header);
