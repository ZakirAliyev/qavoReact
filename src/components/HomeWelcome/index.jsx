import './index.scss'
import qavo from '/src/assets/qavo.png'
import qavo1 from '/src/assets/qavo1.png'

import React from 'react';

function HomeWelcome() {
    return (
        <section id={"homeWelcome"}>
            <div className={"container"}>
                <div className={"wrapper"}>
                    <img src={qavo} alt={"Qavo"} className="overlay-image1"/>
                    <img src={qavo1} alt={"Qavo"} className="overlay-image2"/>
                </div>
            </div>
        </section>
    );
}

export default HomeWelcome;
