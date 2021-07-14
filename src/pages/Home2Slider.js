import ShowWindow4 from "../components/showWindow/ShowWindow4";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 700,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div>
      
        <Slider {...settings}>
          <div>
            <ShowWindow4></ShowWindow4>
          </div>
          <div>
          <ShowWindow4></ShowWindow4>
          </div>
          <div>
          <ShowWindow4></ShowWindow4>
          </div>
          <div>
          <ShowWindow4></ShowWindow4>
          </div>
          <div>
          <ShowWindow4></ShowWindow4>
          </div>
          <div>
          <ShowWindow4></ShowWindow4>
          </div>
          <div>
          <ShowWindow4></ShowWindow4>
          </div>
          <div>
          <ShowWindow4></ShowWindow4>
          </div>
        </Slider>
      </div>
    );
  }
}