import React from 'react';
import testImage from '../../assets/images/test.png';

function Header() {
    return (
        <>
            <header className="header">
                <article className="article">
                    <h1>Izabela Turaj</h1>
                    <p>Aspiring front end developer, minimalistic design enthusiast and hopeless wanderer.</p>
                </article>
                <figure className="figure"><img src={testImage} alt="test" /></figure>
            </header>
        </>
    );
}

export default Header;
