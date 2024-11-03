import './index.scss'
import HomeNavbar from "../HomeNavbar/index.jsx";
import qavoBlack from "/src/assets/qavoBlack1.png"
import HomeLeftMenu from "../HomeLeftMenu/index.jsx";

function HomeContactUs() {
    return (
        <>
            <HomeNavbar/>
            <section id={"homeContactUs"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <HomeLeftMenu/>
                        <div className={"col-11 cen"}>
                            <h2>AXTARDıĞIN PARTNİYOR BİZİK!</h2>
                            <h3>Bizimlə əlaqəyə keç və rəqəmsalda uğurla addımla</h3>
                            <div className={"row row1"}>
                                <div className={"col-3 box"}>
                                    <div className={"first"}>CALENDLY</div>
                                    <div>Görüş təyin et.</div>
                                </div>
                                <div className={"col-3 box"}>
                                    <div className={"first"}>WHATSAPP</div>
                                    <div>Birbaşa əlaqəyə keç</div>
                                </div>
                                <div className={"col-3 box"}>
                                    <div className={"first"}>EMAIL</div>
                                    <div>Bizə məktub yaz</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeContactUs;