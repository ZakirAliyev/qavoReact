import './index.scss'
import qavo from '/src/assets/qavo.png'
import qavo1 from '/src/assets/qavo1.png'
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomeWelcome() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <section id={"homeWelcome"}>
            <div className={"container"} data-aos="fade-up">
                <div className={"wrapper"}>
                    <img src={qavo} alt={"Qavo"} className="overlay-image1"/>
                    <img src={qavo1} alt={"Qavo"} className="overlay-image2"/>
                </div>
            </div>
        </section>
    );
}

export default HomeWelcome;
