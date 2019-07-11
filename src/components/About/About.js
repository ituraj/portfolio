import React, { Component } from 'react';
import { ReactComponent as BarIcon } from '../../assets/icons/bar.svg';
import { withTranslation } from 'react-i18next';
import testImage from '../../assets/images/test.png';

class About extends Component {
    render() {
        return (
            <>
                <section id="about" className="about">
                    <figure className="figure"><img src={testImage} alt="test" /></figure>
                    <article className="article">
                        <h2> {this.props.t('about.h2')}</h2>
                        <BarIcon className="secondary bar-lg" />
                        <p>My name is Izabela Turaj and I would like to become front end developer in the future.
                        <br/>
                        <br/>
                        Currently looking for an opportunity to join a team of developers and gain more practical skills.

                            </p>
                    </article>
                </section>
            </>
        );
    }
}

export default withTranslation('common')(About);