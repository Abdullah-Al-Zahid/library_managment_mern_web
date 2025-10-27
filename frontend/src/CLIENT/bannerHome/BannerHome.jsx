import React from 'react'
import './banner.css'
import Carousel from 'react-bootstrap/Carousel'
import bannerData from './bannerdata'

const BannerHome = () => {
  return (
    <div className='custom-container'>
      <Carousel>
        {bannerData.map((items) => {
          const { id, image, heading, paragraph } = items
          return (
            <Carousel.Item key={id}>
              <img
                className='img-fluid d-block w-100'
                id='banner-image'
                src={image}
                alt='First slide'
              />
              <Carousel.Caption data-aos="fade-right" data-aos-duration="1000">
                <h3 className='text-outline-h' data-aos="fade-right" data-aos-delay="200">{heading}</h3>
                <p className='text-outline-p' data-aos="fade-right" data-aos-delay="400">{paragraph}</p>
                <button className='btn btn-primary btn-lg mt-3' data-aos="zoom-in" data-aos-delay="600">Explore Books</button>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default BannerHome
