import React from 'react';
import "./style.css";
import styled from 'styled-components';

//image
import mainBanner1 from './image/main_banner1.png'
import mainBanner2 from './image/main_banner2.png'
import mainBanner3 from './image/main_banner3.png'
import mainBanner4 from './image/main_banner4.png'

const bannerImage = [
    mainBanner1,
    mainBanner2,
    mainBanner3,
    mainBanner4
  ]
  
  const weight = {
    thin: 200,
    regular: 300,
    medium: 400,
    bold: 500
  };
  
  const Slide = styled.a`
    width: 100%;
    height: 400px;
    display: block;
    background: url(${(props) => props.bannerImage || bannerImage[0]});
    background-size: cover;
    background-position: center center;
  `;
  
  const BannerText = styled.div`
    position: absolute;
    top: 50%;
    left: 26%;
    transform: translateY(-50%);
    letter-spacing: -0.06em;
    text-align: left;
    z-index: 0;
    color: ${(props) => props.fontColor ? '#fff' : '#333'};
  `;
  
  const Title = styled.h4`
    font-size: ${(props) => props.fontSize ? '18px' : '32px'};
    font-weight: ${(props) => props.fontWeight || weight.bold};
    margin-bottom: ${(props) => props.marginBottom ? '30px' : '10px'};
  `;

  function MainBanner1(props) {
    return (
      <>
        <a href='#'>
          <Slide bannerImage={props.bannerImage}></Slide>
        </a>
        <BannerText fontColor>
          <Title fontWeight={weight.thin}>{props.banText.title}</Title>
          <Title marginBottom fontWeight={weight.medium}>{props.banText.subtitle}</Title>
          <Title fontSize fontWeight={weight.medium}>{props.banText.content}</Title>
        </BannerText>
      </>
    )
  };
  
  function MainBanner2(props) {
    return (
      <>
        <a href='#'>
          <Slide bannerImage={props.bannerImage}></Slide>
        </a>
        <BannerText>
          <Title fontWeight={weight.regular}>{props.banText.title}</Title>
          <Title marginBottom>{props.banText.subtitle}</Title>
          <Title fontSize>{props.banText.content}</Title>
        </BannerText>
      </>
    )
  };

  export {
    MainBanner1,
    MainBanner2
  }