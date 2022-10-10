import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 350px;
  background-color: pink;
  overflow: hidden;
`;
const Banner = styled.img`
  height: 300px;
  margin: 0 auto;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Wrapper>
        <div>
          <Slider {...settings}>
            <div>
              <h3>
                <Banner src="/example_01.jpeg" alt="어쩌구저쩌구" />
              </h3>
            </div>
            <div>
              <h3>
                <Banner src="/example_02.jpeg" alt="어쩌구저쩌구" />
              </h3>
            </div>
            <div>
              <h3>
                <Banner src="/example_03.jpeg" alt="어쩌구저쩌구" />
              </h3>
            </div>
            <div>
              <h3>
                <Banner src="/example_04.jpeg" alt="어쩌구저쩌구" />
              </h3>
            </div>
            <div>
              <h3>
                <Banner src="/example_05.jpeg" alt="어쩌구저쩌구" />
              </h3>
            </div>
            <div>
              <h3>
                <Banner src="/example_06.jpeg" alt="어쩌구저쩌구" />
              </h3>
            </div>
          </Slider>
        </div>
      </Wrapper>
    </>
  );
}
