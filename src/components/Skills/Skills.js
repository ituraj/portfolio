import React, { Component } from 'react';
import { ReactComponent as BarIcon } from '../../assets/icons/bar.svg';
import { withTranslation } from 'react-i18next';


class Skills extends Component {
    render() {
        return (
            <>
                <section id="skills" className="skills">
                    <article className="heading">
                        <h2>{this.props.t('skills.heading')}</h2>
                        <BarIcon className="quaternary bar-lg" />
                    </article>
                    <article className="article">
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">HTML5</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">JavaScript</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">React.js</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">Angular 2</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">CSS3</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">SCSS</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">Bootstrap 4</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">Foundation 6</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">UX/UI</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">RWD</p></span>
                        <span>  <BarIcon className="primary bar-sm" /><p className="bar-text">Agile</p></span>
                    </article>
                </section>
            </>
        );
    }
}

export default withTranslation('common')(Skills);
