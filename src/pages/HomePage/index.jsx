import './index.scss'

import HomeWelcome from "../../components/HomeWelcome/index.jsx";
import HomeContactUs from "../../components/HomeContactUs/index.jsx";
import HomeServices from "../../components/HomeServices/index.jsx";
import HomeAboutUs from "../../components/HomeAboutUs/index.jsx";

function HomePage() {
    return (
        <section id={"homePage"}>
            <HomeWelcome/>
            <HomeAboutUs/>
            <HomeServices/>
            <HomeContactUs/>
        </section>
    );
}

export default HomePage;