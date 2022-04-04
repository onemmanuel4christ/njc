import React, { useState } from 'react'
import styled from 'styled-components'
import Carousel from 'react-grid-carousel'

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
 
  `

const ImageContainer = styled.div`
    position: relative;
    width: 355px;
    height: 538px;
    border-radius: 5px;
    box-shadow: 12px 12px 02px -5px rgba(5, 168, 80,1);
    margin-left: 25px;
    margin-bottom: 40px;
    cursor: pointer;
    :hover {
    transform: translateY(-10px);
}
@media only screen and (max-width: 800px) {
      width: 80vw;
      margin: 10px 20px;

    } 
   
`
const ImageCard =  styled.img`
  width: 100%;
  z-index: 999;
  max-height: 70%;
  object-fit: cover;
  border-radius: 5px;
  `
const DetailsWrapper = styled.div`
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
  text-align: center;

`
const Position = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #041730;
  text-transform: capitalize;
   text-align: center;

`
const Readmore = styled.span`
  margin-left: 200px;
  font-size: 12px;
  cursor: pointer;
  text-align: center;

`

const CouncilMembers = () => {
    const [index, setIndex] = useState(0);
  const images = [
    "/img/Monica.png",
    "/img/tanko.png",
    "/img/mrs.png",
    "/img/Monica.png",
    "/img/olamide.png",
    "/img/olamide.png",
    "/img/Monica.png",
    "/img/olamide.png",
    "/img/olamide.png",
    "/img/mrs.png",
    "/img/pca.png",
    "/img/olamide.png",
    "/img/pca.png",
    "/img/pca.png",
    "/img/olamide.png",
    "/img/pca.png",
  ];

  return (
    <Container>
        <Title>current council members</Title>
        <Hr />
        <CouncilGallery>
        <Carousel 
          cols={4} 
          rows={1} 
          gap={10} 
          loop
          autoplay={3000}
          showDots={true}
          dotColorActive="red"
        >
      {
        images.map((img, idx) =>(
          <Carousel.Item key={idx}>
              <ImageContainer>               
                 <ImageCard src={img} alt='monica' />
                 <DetailsWrapper>
                   <Rank>hon. justice</Rank>
                   <FullName>monica borna’an dongban men-sem</FullName>
                   <Position>president court of appeal.</Position>
                 <Readmore>Read More...</Readmore>
                 </DetailsWrapper>
            </ImageContainer>
          </Carousel.Item>
        ))
      }
    </Carousel>
       </CouncilGallery>
    </Container>
  )
}

export default CouncilMembers