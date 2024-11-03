import './index.scss'

import React from 'react';
import qavoBlack from "../../assets/qavoBlack1.png";

function HomeLeftMenu(props) {
    return (
        <div className={"col-1 firstCol"}>
            <img src={qavoBlack} alt={"Qavo"}/>
            <h3>GİRİŞ</h3>
            <h3>TANITIM</h3>
            <h3>RƏYLƏR</h3>
            <h3>PORTFOLIO</h3>
            <h3>ƏLAQƏ</h3>
        </div>
    );
}

export default HomeLeftMenu;