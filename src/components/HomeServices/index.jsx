import './index.scss'
import HomeNavbar from "../HomeNavbar/index.jsx";
import HomeLeftMenu from "../HomeLeftMenu/index.jsx";

function HomeServices() {
    return (
        <>
            <HomeNavbar/>
            <section id={"homeServices"}>
                <div className={"container"}>
                    <div style={{
                        color: 'black',
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        fontSize: '150px',
                        WebkitTextStroke: '1px #262626'
                    }}>
                        ONLAR NƏ DEYİR?
                    </div>
                    <div className={"row"}>
                        <HomeLeftMenu/>
                        <div className={"col-11 cen"}>
                            <div className={"row row1"}>
                                <div className={"col-13 box"}>
                                    <div className={"layer"}>
                                        <div className={"firstWord"}>SWEJI CAKE HOUSE</div>
                                        <div className={"secondWord"}>AMİL HÜSEYİNOV</div>
                                    </div>
                                    <img
                                        src={"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"}
                                        alt={"Image"}/>
                                </div>
                                <div className={"col-13 box"}>
                                    <div className={"layer"}>
                                        <div className={"firstWord"}>FRİPS FRUİT CHİPS</div>
                                        <div className={"secondWord"}>AQİL MƏMMƏDZADƏ</div>
                                    </div>
                                    <img
                                        src={"https://plus.unsplash.com/premium_photo-1683134080778-aaa686741d0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvcnRyYWl0fGVufDB8fDB8fHww"}
                                        alt={"Image"}/>
                                </div>
                                <div className={"col-13 box"}>
                                    <div className={"layer"}>
                                        <div className={"firstWord"}>MACİS CONSULTİNG</div>
                                        <div className={"secondWord"}>XƏYALƏ SURXAYLI</div>
                                    </div>
                                    <img
                                        src={"https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg"}
                                        alt={"Image"}/>
                                </div>
                                <div className={"col-13 box"}>
                                    <div className={"layer"}>
                                        <div className={"firstWord"}>KHANSA FINANCE</div>
                                        <div className={"secondWord"}>NURU XƏLİLOV</div>
                                    </div>
                                    <img
                                        src={"https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg"}
                                        alt={"Image"}/>
                                </div>
                            </div>
                            <button>İNDİ ƏLAQƏYƏ KEÇ</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeServices;