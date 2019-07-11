import React, { Component } from 'react';
import { ReactComponent as BarIcon } from '../../assets/icons/bar.svg';
import { withTranslation } from 'react-i18next';
import testImage from '../../assets/images/test.png';


class Header extends Component {
    render() {
        return (
            <>
                <header id="home" className="header">
                    <article className="article">
                        <h1>{this.props.t('home.heading')}</h1>
                        <BarIcon className="secondary bar-lg" />
                        <p>{this.props.t('home.article')}</p>
                    </article>
                    <figure className="figure"><img src={testImage} alt="test" /></figure>
                </header>
            </>
        );
    }
}

export default withTranslation('common')(Header);
