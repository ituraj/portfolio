import React from 'react';
import testImage from '../../assets/images/test.png';

function Footer() {
    return (
        <>
            <footer id="contact-page" className="footer">
                <figure className="figure"><img src={testImage} alt="test" /></figure>
                <article className="article">
                    <h2>Contact</h2>
                    <p>Looking for an opportunity to join a team of happy developers and gain more practical skills.</p>
                </article>
            </footer>
        </>
    );
}

export default Footer;
