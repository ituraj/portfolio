import React, { Component } from 'react';
import { ReactComponent as MaxIcon } from '../../assets/icons/max.svg';
import { withTranslation } from 'react-i18next';
import portfolioImageTwo from '../../assets/images/image2.png';

class About extends Component {
    render() {
        return (
            <>
                <section id="about" className="about">
                    <figure className="figure"><img src={portfolioImageTwo} alt="test" /></figure>
                    <article className="article">
                        <h2> {this.props.t('about.heading')}</h2>
                        <MaxIcon className="secondary tag-lg" />
                        <p>{this.props.t('about.article-one')}</p>
                    </article>
                </section>
            </>
        );
    }
}

export default withTranslation('common')(About);