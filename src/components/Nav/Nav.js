import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Nav extends Component {
    render() {
        const { i18n } = this.props;
        return (
            <nav className="nav">

                <button className="btn" onClick={() => i18n.changeLanguage('en')}>en</button>

                <button className="btn" onClick={() => i18n.changeLanguage('dk')}>dk</button>

                <button className="btn" onClick={() => i18n.changeLanguage('pl')}>pl</button>


            </nav>
        );
    }
}

export default withTranslation('common')(Nav);
