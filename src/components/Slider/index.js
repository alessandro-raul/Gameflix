/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-next:before, [dir=rtl] .slick-next:before {
    content: '→';
  }

  .slick-prev:before, [dir=rtl] .slick-prev:before {
    content: '←';
  }

  .slick-prev {
    transition: 0.5s;
    height: 165px;
    left: 0;
    width: 45px;
    bottom: 5px;
  }

  .slick-prev:hover {
    transition: 0.5s;
    height: 165px;
    left: 0;
    width: 45px;
    bottom: 5px;
    background-color: rgba(0,0,0,0.3)
  }

  .slick-next {
    transition: 0.5s;
    right: 0px;
    height: 165px;
    width: 45px;
    bottom: 5px;
  }
  
  .slick-next:hover{
    transition: 0.5s;
    right: 0px;
    height: 165px;
    width: 45px;
    bottom: 5px;
    background-color: rgba(0,0,0,0.3)
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      slidesToScroll: 2,  
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 