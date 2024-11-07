import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

import HomeWelcome from "../../components/HomeWelcome/index.jsx";
import HomeContactUs from "../../components/HomeContactUs/index.jsx";
import HomeServices from "../../components/HomeServices/index.jsx";
import HomeAboutUs from "../../components/HomeAboutUs/index.jsx";
import HomeNavbar from "../../components/HomeNavbar/index.jsx";
import HomeBanner from "../../components/HomeBanner/index.jsx";
import HomePortfolio from "../../components/HomePortfolio/index.jsx";

function HomePage() {
    const homePageRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleWheel = (event) => {
            if (scrolling) return;

            const homePageElement = homePageRef.current;
            if (homePageElement) {
                const sectionHeight = window.innerHeight;
                const scrollDown = event.deltaY > 0;
                const targetPosition = scrollDown
                    ? scrollPosition + sectionHeight
                    : scrollPosition - sectionHeight;

                setScrolling(true);
                homePageElement.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });

                setTimeout(() => setScrolling(false), 800); // Geçiş süresi ayarı
                setScrollPosition(targetPosition);
            }
        };

        const homePageElement = homePageRef.current;
        if (homePageElement) {
            homePageElement.addEventListener('wheel', handleWheel);
        }

        return () => {
            if (homePageElement) {
                homePageElement.removeEventListener('wheel', handleWheel);
            }
        };
    }, [scrollPosition, scrolling]);

    return (
        <section id="homePage" ref={homePageRef} style={{scrollBehavior: 'smooth', overflowY: 'hidden'}}>
            <HomeNavbar/>
            <div className="snapSection">
                <HomeWelcome/>
            </div>
            <div className="snapSection">
                <HomeBanner y={scrollPosition}/>
            </div>
            <div className="snapSection">
                <HomeAboutUs y={scrollPosition}/>
            </div>
            <div className="snapSection">
                <HomeServices y={scrollPosition}/>
            </div>
            <div className="snapSection">
                <HomePortfolio y={scrollPosition}/>
            </div>
            <div className="snapSection">
                <HomeContactUs y={scrollPosition}/>
            </div>
        </section>
    );
}

export default HomePage;
