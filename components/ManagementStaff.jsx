import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-bottom: 100px;
    
`
const Title = styled.h2`
    font-size: 2rem;
    color: #05A850;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;

`
const Hr = styled.hr`
border: 3px solid #05A850;
background-color: #05A850;
width: 100px;
margin: 0 auto;
height: 0;
`

const CouncilGallery = styled.div`
  margin-top: 100px;
  overflow: hidden;
  position: relative;
  padding: 30px;
  height: 550px;
  padding: 20px;
  `
const Wrapper = styled.div`
  width: 300vw;
  padding: 10px;
  height: 600px;
  display: flex;
  overflow: hidden;
  position: relative;
  flex-wrap: wrap;
  transition: all 1.5s ease-in-out ;
  
`
const ImageContainer = styled.div`
    position: relative;
    width: 355px;
    height: 538px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 12px 12px 02px -5px rgba(5, 168, 80,1);
    margin-left: 35px;
    margin-bottom: 40px;
    cursor: pointer;
    :hover {
  transform: translateY(-30px);
}
   
`
const ProfileImg = styled.div`
  width: 100%;
  height: 100%;
  max-height: 379px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
`
const ImageCard =  styled.img`
  width: 100%;
  z-index: 999;
  max-height: 379px;
  object-fit: cover;
  border-radius: 5px;
  `
const DetailsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  top: 404px;
  left: 0;
  right: 0;

`
const Rank = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: #041730;
  text-transform: uppercase;
  text-align: center;

`
const FullName = styled.h6`
  font-weight: 700;
  font-size: 16px;
  color: #041730;
  text-transform: uppercase;
  margin-top: 10px;
  text-align: center;

`
const Position = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #041730;
  text-transform: capitalize;
  margin-top: 5px;
  text-align: center;

`
const Readmore = styled.span`
  margin-left: 200px;
  font-size: 12px;
  margin-top: 5px;
  cursor: pointer;
  text-align: center;

`
const ArrowWrapper = styled.span`
position: absolute;
width: 10%;
height: 20%;
top: 0;
bottom: 0;
margin: auto;
cursor: pointer;
z-index: 2;
`
const Arrow = styled.img`
  
`
const ManagementStaff = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/aminu.png",
    "/img/hadiza.png",
    "/img/balogun.png",
    "/img/erewa.png",
    "/img/aminu.png",
    "/img/hadiza.png",
    "/img/balogun.png",
    "/img/erewa.png",
    "/img/aminu.png",
    "/img/hadiza.png",
    "/img/balogun.png",
    "/img/erewa.png",
    "/img/aminu.png",
    "/img/hadiza.png",
    "/img/balogun.png",
    "/img/erewa.png",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }
  return (
    <Container>
        <Title>management staff</Title>
        <Hr />

        <CouncilGallery>
          <ArrowWrapper style={{ left: 5 }} onClick={()=>handleArrow("l")}> 
              <Arrow src="/img/leftArrow.svg" alt="" />
          </ArrowWrapper>

            <Wrapper style={{transform:`translateX(${-100*index}vw)`}}>
              {
                images.map((img, idx) =>(
              <ImageContainer key={idx}>
              <ImageCard src={img} alt='monica' />
                <DetailsWrapper>
                  <Rank>hon. justice</Rank>
                  <FullName>monica borna’an dongban men-sem</FullName>
                  <Position>president court of appeal.</Position>
                <Readmore>Read More...</Readmore>
                </DetailsWrapper>
           </ImageContainer>
                ))
              }
            
           </Wrapper>


          <ArrowWrapper style={{ right: 0 }} onClick={()=>handleArrow("r")}>
              <Arrow src="/img/rightArrow.svg" alt="" />
          </ArrowWrapper>
       </CouncilGallery>
    </Container>
  )
}

export default ManagementStaff