import './index.scss'
import HomeLeftMenu from "../HomeLeftMenu/index.jsx";
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomeBanner(y) {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <section id={"homeBanner"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <HomeLeftMenu number={2} y={y}/>
                        <div className={"col-11 cen"}>
                            <h2>Rəqəmsal.<span style={{
                                color: '#7E7E7E'
                            }}>Dünyada.</span></h2>
                            <h2>Realistik Həllər.</h2>
                            <h2>& Daha Çoxu.</h2>
                        </div>
                    </div>
                    <div className="band">
                        <div className="text-slider">
                            <span>creative design</span>
                            <div className={"dot"}>
                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                </svg>
                            </div>
                            <span>ui/ux</span>
                            <div className={"dot"}>
                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                </svg>
                            </div>
                            <span>marketing</span>
                            <div className={"dot"}>
                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                </svg>
                            </div>
                            <span>creative design</span>
                            <div className={"dot"}>
                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                </svg>
                            </div>
                            <span>ui/ux</span>
                            <div className={"dot"}>
                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                </svg>
                            </div>
                            <span>marketing</span>
                        </div>
                    </div>
                    <div className="band1">
                        <div className="text-slider">
                            <span>creative design</span>
                            <div className={"dot"}>
                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                </svg>
                            </div>
                            <span>ui/ux</span>
                            <div className={"dot"}>
                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                </svg>
                            </div>
                            <span>marketing</span>
                            <div className={"dot"}>
                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                </svg>
                            </div>
                            <span>creative design</span>
                            <div className={"dot"}>
                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                </svg>
                            </div>
                            <span>ui/ux</span>
                            <div className={"dot"}>
                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                </svg>
                            </div>
                            <span>marketing</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeBanner;