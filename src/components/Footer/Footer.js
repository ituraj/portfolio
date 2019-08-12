import React, { Component } from 'react';
import { ReactComponent as MaxIcon } from '../../assets/icons/max.svg';
import { ReactComponent as MinIcon } from '../../assets/icons/min.svg';
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
                        <MaxIcon className="secondary underscore" />
                        <p>{this.props.t('contact.article')}</p>

                        <span>  <MinIcon className="primary underscore" /><p className="bar-text">i.turaj@gmail.com</p></span>
                        <span>  <MinIcon className="primary underscore" /><p className="bar-text">+45 527 64 927</p></span>
                    </article>
                </footer>
            </>
        );
    }
}


export default withTranslation('common')(Footer);
