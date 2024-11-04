import './index.scss'
import HomeNavbar from "../HomeNavbar/index.jsx";
import HomeLeftMenu from "../HomeLeftMenu/index.jsx";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomeAboutUs() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <HomeNavbar/>
            <section id={"homeAboutUs"}>
                <div className={"container"} data-aos="fade-up">
                    <div className={"row"}>
                        <HomeLeftMenu/>
                        <div className={"col-11 cen"}>
                            <iframe src="https://www.youtube.com/embed/rNbM6GiceCc?si=PzpFk4QxYz_fOnBA"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <button>ƏLAQƏYƏ KEÇ</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeAboutUs;