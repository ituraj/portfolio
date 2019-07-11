import React from 'react';
import { ReactComponent as BarIcon } from '../../assets/icons/bar.svg';
import testImage from '../../assets/images/test.png';


function Header() {
    return (
        <>
            <header id="home" className="header">
                <article className="article">
                    <h1>Izabela Turaj</h1>
                    <BarIcon className="secondary bar-lg" />
                    <p>Aspiring front end developer, minimalistic design enthusiast and hopeless wanderer.</p>
                </article>
                <figure className="figure"><img src={testImage} alt="test" /></figure>
            </header>
        </>
    );
}

export default Header;
