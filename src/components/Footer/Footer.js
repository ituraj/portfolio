import React from 'react';
import { ReactComponent as BarIcon } from '../../assets/icons/bar.svg';
import testImage from '../../assets/images/test.png';

function Footer() {
    return (
        <>
            <footer id="contact" className="footer">
                <figure className="figure"><img src={testImage} alt="test" /></figure>
                <article className="article">
                    <h2>Contact</h2>
                    <BarIcon className="secondary bar-lg" />
                    <p>Looking for an opportunity to join a team of happy developers and gain more practical skills.</p>
                </article>
            </footer>
        </>
    );
}

export default Footer;
