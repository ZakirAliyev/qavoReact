import './index.scss'

import HomeWelcome from "../../components/HomeWelcome/index.jsx";
import HomeContactUs from "../../components/HomeContactUs/index.jsx";

function HomePage() {
    return (
        <section id={"homePage"}>
            <HomeWelcome/>
            <HomeContactUs/>
        </section>
    );
}

export default HomePage;