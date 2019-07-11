import React from 'react';
import testImage from '../../assets/images/test.png';
import { ReactComponent as BarIcon } from '../../assets/icons/bar.svg';

function Header() {
    return (
        <>
            <header id="home-page" className="header">
                <article className="article">
                    <h1>Izabela Turaj</h1>
                    <BarIcon fill="#99cfb2" />
                    <p>Aspiring front end developer, minimalistic design enthusiast and hopeless wanderer.</p>
                </article>
                <figure className="figure"><img src={testImage} alt="test" /></figure>
            </header>
        </>
    );
}

export default Header;
