import React from 'react'
import Carousel from 'react-grid-carousel'
import Image from 'next/image';

const GallarySlider = () => {
  return (
    <div>
      <h1>Gallery</h1>
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