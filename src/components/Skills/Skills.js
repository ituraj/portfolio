import React, { Component } from 'react';
import { ReactComponent as MaxIcon } from '../../assets/icons/max.svg';
import { ReactComponent as MinIcon } from '../../assets/icons/min.svg';
import { withTranslation } from 'react-i18next';


class Skills extends Component {
    render() {
        return (
            <>
                <section id="skills" className="skills">
                    <article className="heading">
                        <h2>{this.props.t('skills.heading')}</h2>
                        <MaxIcon className="secondary tag-lg" />
                    </article>
                    <article className="article">
                        <span>  <MinIcon className="primary tag-sm" /><p className="tag-text">HTML5</p></span>
                        <span>  <MinIcon className="primary tag-sm" /><p className="tag-text">JavaScript</p></span>
                        <span>  <MinIcon className="primary tag-sm" /><p className="tag-text">React.js</p></span>
                        <span>  <MinIcon className="primary tag-sm" /><p className="tag-text">Angular 2</p></span>
                        <span>  <MinIcon className="primary tag-sm" /><p className="tag-text">CSS3</p></span>
                        <span>  <MinIcon className="primary tag-sm" /><p className="tag-text">SCSS</p></span>
                        <span>  <MinIcon className="primary tag-sm" /><p className="tag-text">Bootstrap 4</p></span>
                        <span>  <MinIcon className="primary tag-sm" /><p className="tag-text">Foundation 6</p></span>
                        <span>  <MinIcon className="primary tag-sm" /><p className="tag-text">Firebase</p></span>
                        <span>  <MinIcon className="primary tag-sm" /><p className="tag-text">UX/UI</p></span>
                        <span>  <MinIcon className="primary tag-sm" /><p className="tag-text">RWD</p></span>
                        <span>  <MinIcon className="primary tag-sm" /><p className="tag-text">Agile</p></span>
                    </article>
                </section>
            </>
        );
    }
}

export default withTranslation('common')(Skills);
