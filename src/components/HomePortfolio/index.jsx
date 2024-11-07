import './index.scss'
import HomeLeftMenu from "../HomeLeftMenu/index.jsx";
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from "/src/assets/image1.jpeg"
import image2 from "/src/assets/image2.jpeg"
import image3 from "/src/assets/image3.jpeg"

function HomePortfolio(y) {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <section id={"homePortfolio"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <HomeLeftMenu number={4} y={y}/>
                        <div className={"col-11 cen"}>
                            <h2>Portfolio</h2>
                            <div className={"line"}></div>
                            <span style={{
                                WebkitTextStroke: '1px #262626',
                            }}>p</span>
                            <div className={"row"}>
                                <div className={"col-3"}>
                                    <div className={"img"}>
                                        <img src={image3} alt={"Image"}/>
                                        <h5 style={{
                                            marginLeft: '-55px'
                                        }}>Lucky Office Support</h5>
                                        <div className={"wrapper"}>
                                            <div className={"dot"}>
                                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                                </svg>
                                            </div>
                                            <h6>Social media</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col-3"}>
                                    <div className={"img"}>
                                        <img src={image2} alt={"Image"}/>
                                        <h5 style={{
                                            marginLeft: '-40px'
                                        }}>Sweji Cake House</h5>
                                        <div className={"wrapper"}>
                                            <div className={"dot"}>
                                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                                </svg>
                                            </div>
                                            <h6>Social media</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col-3"}>
                                    <div className={"img"}>
                                        <img src={image1} alt={"Image"}/>
                                        <h5>Macis Consulting</h5>
                                        <div className={"wrapper"}>
                                            <div className={"dot"}>
                                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                                                </svg>
                                            </div>
                                            <h6>Social media</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span style={{
                    WebkitTextStroke: '1px #363636',
                }} className={"span2"}>NƏ İŞ GÖRDÜK</span>
            </section>
        </>
    );
}

export default HomePortfolio;