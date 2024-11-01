import './index.scss'
import bars from '/src/assets/bars.svg'
import qavoLogo from '/src/assets/qavoLogo.png'

import React from 'react';
import {IoSearchOutline} from "react-icons/io5";

function HomeNavbar() {
    return (
        <section id={"homeNavbar"}>
            <div className={"container"}>
                <nav>
                    <div className={"wrapper"}>
                        <div>FB</div>
                        <div className={"dot"}>
                            <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                            </svg>
                        </div>
                        <div>IG</div>
                        <div className={"dot"}>
                            <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                            </svg>
                        </div>
                        <div>IN</div>
                        <div className={"dot"}>
                            <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.625" cy="2.5" r="2.5" fill="#FF7E21"/>
                            </svg>
                        </div>
                    </div>
                    <div className={"logo"}>
                        <img src={qavoLogo} alt={"Qavo"}/>
                    </div>
                    <div className={"last"}>
                        <IoSearchOutline className={"icon"}/>
                        <div className={"line"}></div>
                        <div className={"menuWrapper"}>
                            <span>Menyu</span>
                            <img src={bars} alt={"Bars"}/>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default HomeNavbar;