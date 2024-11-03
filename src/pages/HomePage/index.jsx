import './index.scss'

import HomeWelcome from "../../components/HomeWelcome/index.jsx";
import HomeContactUs from "../../components/HomeContactUs/index.jsx";
import HomeServices from "../../components/HomeServices/index.jsx";

function HomePage() {
    return (
        <section id={"homePage"}>
            {/*<HomeWelcome/>*/}
            {/*<HomeContactUs/>*/}
            <HomeServices/>
        </section>
    );
}

export default HomePage;