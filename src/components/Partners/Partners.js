import React from 'react'
import Slider from "react-slick";
import "./partners.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {

    const settings = {
        className: "slider variable-width",
        variableWidth: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    const partners = [
        {
            id: 1,
            url:'../../img/suppliers/abu.svg'
        },
        {
            id: 2,
            url:'../../img/suppliers/agent-bud.svg'
        },
        {
            id: 3,
            url:'../../img/suppliers/bi1.svg'
        },
        {
            id: 4,
            url:'../../img/suppliers/first-home.svg'
        },
        {
            id: 5,
            url:'../../img/suppliers/gildia.svg'
        },
        {
            id: 6,
            url:'../../img/suppliers/gold.svg'
        },
        {
            id: 7,
            url:'../../img/suppliers/liber.svg'
        },
        {
            id: 8,
            url:'../../img/suppliers/metalvis.svg'
        },
        {
            id: 9,
            url:'../../img/suppliers/monolit.svg'
        },
        {
            id: 10,
            url:'../../img/suppliers/opeol.svg'
        },
        {
            id: 11,
            url:'../../img/suppliers/vival.svg'
        },
        {
            id: 12,
            url:'../../img/suppliers/vodaland.svg'
        },
        {
            id: 13,
            url:'../../img/customers/cim.svg'
        },
        {
            id: 14,
            url:'../../img/customers/develop.svg'
        },
        {
            id: 15,
            url:'../../img/customers/unbuild.svg'
        },
    ];

    return (
        <div id='partners' className='partners'>
            <Slider {...settings}>
                <div className='partners__img' style={{ width: 413 }}>
                    <img src='../../img/customers/unbuild.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 180 }}>
                    <img src='../../img/customers/develop.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 172 }}>
                    <img src='../../img/customers/cim.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 117 }}>
                    <img src='../../img/suppliers/vodaland.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 131 }}>
                    <img src='../../img/suppliers/vival.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 261 }}>
                    <img src='../../img/suppliers/opeol.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 180 }}>
                    <img src='../../img/suppliers/monolit.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 657 }}>
                    <img src='../../img/suppliers/metalvis.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 107 }}>
                    <img src='../../img/suppliers/liber.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 244 }}>
                    <img src='../../img/suppliers/gold.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 182 }}>
                    <img src='../../img/suppliers/gildia.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 170 }}>
                    <img src='../../img/suppliers/first-home.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 170 }}>
                    <img src='../../img/suppliers/bi1.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 170 }}>
                    <img src='../../img/suppliers/agent-bud.svg'></img>
                </div>
                <div className='partners__img' style={{ width: 265 }}>
                    <img src='../../img/suppliers/abu.svg'></img>
                </div>
            </Slider>
        </div>
    )
}

export default Partners
