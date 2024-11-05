import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

import HomeWelcome from "../../components/HomeWelcome/index.jsx";
import HomeContactUs from "../../components/HomeContactUs/index.jsx";
import HomeServices from "../../components/HomeServices/index.jsx";
import HomeAboutUs from "../../components/HomeAboutUs/index.jsx";
import HomeNavbar from "../../components/HomeNavbar/index.jsx";

function HomePage() {
    const homePageRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (homePageRef.current) {
                const currentScrollPosition = homePageRef.current.scrollTop;
                setScrollPosition(currentScrollPosition);
            }
        };

        const homePageElement = homePageRef.current;

        if (homePageElement) {
            homePageElement.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (homePageElement) {
                homePageElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <section id="homePage" ref={homePageRef}>
            <HomeNavbar />
            <div className="snapSection">
                <HomeWelcome/>
            </div>
            <div className="snapSection">
                <HomeAboutUs y={scrollPosition} />
            </div>
            <div className="snapSection">
                <HomeServices y={scrollPosition} />
            </div>
            <div className="snapSection">
                <HomeContactUs y={scrollPosition} />
            </div>
        </section>
    );
}

export default HomePage;
