import React, { Component } from 'react';
import { ReactComponent as MaxIcon } from '../../assets/icons/max.svg';
import { withTranslation } from 'react-i18next';
import testImage from '../../assets/images/test.png';

class About extends Component {
    render() {
        return (
            <>
                <section id="about" className="about">
                    <figure className="figure"><img src={testImage} alt="test" /></figure>
                    <article className="article">
                        <h2> {this.props.t('about.heading')}</h2>
                        <MaxIcon className="secondary bar-lg" />
                        <p>{this.props.t('about.article')}</p>
                    </article>
                </section>
            </>
        );
    }
}

export default withTranslation('common')(About);