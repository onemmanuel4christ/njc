import React from 'react'
import Carousel from 'react-grid-carousel'
import Image from 'next/image';
import styled from 'styled-components'

const ProfileHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
margin: 0 auto;
margin-bottom: 20px;

h1{
    color: #041730;
    font-size: 36px;
    font-weight: 700;
    margin: 0 10px;
}
`
const Hr = styled.hr`
   height: 0;
   border: 1px solid rgba(119, 119, 119, 0.25);
    background-color: #777777;
    opacity: 20%;
    width: 100%;
    @media only screen and (max-width: 800px) {
    display: none;
    }
    
`
const GallarySlider = () => {
  return (
    <div>
              <ProfileHeader>
                   <Hr style={{width:'90px'}}/> <h1>GALLERY</h1> <Hr style={{width:'90px'}} />
               </ProfileHeader>
      <Carousel 
      cols={3} 
      rows={1} 
      gap={10} 
      loop
      autoplay={3000}
      showDots={true}
      dotColorActive="red"
      
      >
      <Carousel.Item>
      <Image src="/img/gallery1.png" width={508} height={332} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="/img/gallery3.png" width={508} height={332} alt=""/>

      </Carousel.Item>
      <Carousel.Item>
      <Image src="/img/gallery4.png" width={508} height={332} alt=""/>

      </Carousel.Item>
      <Carousel.Item>
      <Image src="/img/gallery3.png" width={508} height={332} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="/img/gallery1.png" width={508} height={332} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="/img/gallery3.png" width={508} height={332} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="/img/gallery4.png" width={508} height={332} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="/img/gallery3.png" width={508} height={332} alt=""/>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default GallarySlider