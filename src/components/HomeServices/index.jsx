import './index.scss';
import HomeNavbar from "../HomeNavbar/index.jsx";
import HomeLeftMenu from "../HomeLeftMenu/index.jsx";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomeServices() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <HomeNavbar />
            <section id="homeServices">
                <div className="container" data-aos="fade-up">
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
                    <div className="row">
                        <HomeLeftMenu />
                        <div className="col-11 cen">
                            <div className="row row1">
                                {[
                                    { title: "SWEJI CAKE HOUSE", name: "AMİL HÜSEYİNOV", img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" },
                                    { title: "FRİPS FRUİT CHİPS", name: "AQİL MƏMMƏDZADƏ", img: "https://plus.unsplash.com/premium_photo-1683134080778-aaa686741d0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvcnRyYWl0fGVufDB8fDB8fHww" },
                                    { title: "MACİS CONSULTİNG", name: "XƏYALƏ SURXAYLI", img: "https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg" },
                                    { title: "KHANSA FINANCE", name: "NURU XƏLİLOV", img: "https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg" }
                                ].map((item, index) => (
                                    <div className="col-13 box" key={index}>
                                        <div className="layer">
                                            <div className="firstWord">{item.title}</div>
                                            <div className="secondWord">{item.name}</div>
                                        </div>
                                        <img src={item.img} alt="Image" />
                                    </div>
                                ))}
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
