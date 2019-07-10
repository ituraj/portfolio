import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class About extends Component {
    render() {
        return (
            <>
                <section className="about">
                    <figure>Lol image</figure>
                    <article>
                        <h2> {this.props.t('about.h2')}</h2>
                        <h2>About</h2>
                        <p>My name is Izabela Turaj and I would like to become front end developer in the future. Currently looking for an opportunity to join a team of developers and gain more practical skills. My biggest passion is traveling.</p>
                    </article>
                </section>
            </>
        );
    }
}

export default withTranslation('common')(About);