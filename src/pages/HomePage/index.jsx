import './index.scss'

import React from 'react';
import HomeWelcome from "../../components/HomeWelcome/index.jsx";
import HomeNavbar from "../../components/HomeNavbar/index.jsx";

function HomePage(props) {
    return (
        <section id={"homePage"}>
            <HomeWelcome/>
            <HomeNavbar/>
        </section>
    );
}

export default HomePage;