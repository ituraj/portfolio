import React, { Component } from 'react';
import { ReactComponent as BarIcon } from '../../assets/icons/bar.svg';
import { withTranslation } from 'react-i18next';
import testImage from '../../assets/images/test.png';

class Footer extends Component {
    render() {
        return (
            <>
                <footer id="contact" className="footer">
                    <figure className="figure"><img src={testImage} alt="test" /></figure>
                    <article className="article">
                        <h2>{this.props.t('contact.heading')}</h2>
                        <BarIcon className="secondary bar-lg" />
                        <p>{this.props.t('contact.article')}</p>
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">i.turaj@gmail.com</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">+45 527 64 927</p></span>
                    </article>
                </footer>
            </>
        );
    }
}


export default withTranslation('common')(Footer);
