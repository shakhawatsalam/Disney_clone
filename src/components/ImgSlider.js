import React from 'react'
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...settings}>
            <div>
                <h1>1</h1>
            </div>
            <div>
                <h1>2</h1>
            </div>
            <div>
                <h1>3</h1>
            </div>
            <div>
                <h1>4</h1>
            </div>
            <div>
                <h1>5</h1>
            </div>
        </Slider>
    )
}

export default ImgSlider