import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    /* height: calc(100vh - 100px); */
    height: 100vh;
    background: url('./img/background.png');
    background-size: cover;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
   
`
const Title = styled.h1`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 64px;
    color: #FFFFFF;
    /* margin-top: 130px; */
    @media only screen and (max-width: 800px) {
      font-size: 24px;
    }
`
const IntroText = styled.span`
    color: #FFFFFF;
    font-size: 24px;
    word-wrap: break-word;
    width: 1087px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 36px;
    @media only screen and (max-width: 800px) {
       font-size: 12px;
       width: 80%;
       line-height: 20px;

    }

`
const CallToAction = styled.button`
    padding: 15px 61px;
    background-color: #05A850;
    border-radius: 5px;
    border: 0;
    margin-top: 62px;
    cursor: pointer;
    font-weight: 700;
    font-size: 24px;
    color: #FFF;
    @media only screen and (max-width: 800px) {
      font-size: 12px;
    }
`
const SlideBtn = styled.img`
    background-repeat: no-repeat;
    object-fit: cover;
    width: 30px;
    height: 46px;
    display: flex;
    padding: 5px 3px;
    align-items: center;
    justify-content: center;
    border: 2px solid #777777;
    border-radius: 17px;
    cursor: pointer;
    margin-top: 67px;
`
const Banner = () => {
  return (
    <Container>
      <Title>a dynamic judiciary</Title>
        <IntroText>The National Judicial Council is one of the Federal Executive Bodies created by the 1999 Constitution of the Federal Republic of Nigeria</IntroText>
        <CallToAction>Get in Touch</CallToAction>
        <SlideBtn src='./img/slide.svg' alt='' />    
    </Container>
  )
}

export default Banner