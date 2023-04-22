import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "semantic-ui-react";

export default class AutoPlay extends Component {
  render() {
    let arrImg = [
      {
        id: 1,
        imageLink: 'banner-1.png'
      },
      {
        id: 2,
        imageLink: 'banner-2.png'
      },
      {
        id: 3,
        imageLink: 'banner-3.jpg'
      },
      {
        id: 4,
        imageLink: 'banner-3.jpg'
      },
      {
        id: 5,
        imageLink: 'banner-3.jpg'
      }
    ]
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Container>

          <Slider {...settings}>
            {arrImg && arrImg.length > 0 && arrImg.map(item => (
              <div key={item.id}>
                <img src={item.imageLink} alt="anh banner" style={{
                  height
                    : '500px',
                  width: '100%'
                }} />
              </div>

            ))}
          </Slider>
        </Container>

      </div>
    );
  }
}