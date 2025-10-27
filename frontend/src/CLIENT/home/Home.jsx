import React from 'react'
import './home.css'

import BannerHome from '../bannerHome/BannerHome'
import FeaturedBooks from '../featuredBooks/FeaturedBooks'
import RecentlyAddedBooks from '../recentlyAddedBooks/RecentlyAddedBooks'
import { Row } from 'react-bootstrap'
import RecommendedBooks from '../recommendedBooks/RecommendedBooks'

const Home = () => {
  return (
    <div className='home-main-div'>
      <BannerHome></BannerHome>

      {/* New Section: About Library */}
      <div className='container my-5'>
        <div className='row align-items-center'>
          <div className='col-md-6' data-aos="fade-right" data-aos-duration="1000">
            <img src='/book-min.png' alt='Library' className='img-fluid rounded shadow-lg' />
          </div>
          <div className='col-md-6' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            <h2 className='display-4 fw-bold mb-4'>Welcome to Our Library</h2>
            <p className='lead mb-4'>
              Discover a world of knowledge and imagination. Our library offers a vast collection of books, resources, and a serene environment for learning and exploration. Whether you're a student, researcher, or a casual reader, you'll find something to inspire you.
            </p>
            <p className='text-muted'>
              Join our community of readers and embark on a journey of discovery. We are committed to fostering a love for reading and providing access to information for everyone.
            </p>
          </div>
        </div>
      </div>

      <div className='container'>
        <Row className='my-3'>
          <RecommendedBooks></RecommendedBooks>
        </Row>
        <Row>
          <RecentlyAddedBooks></RecentlyAddedBooks>
        </Row>
        <Row>
          <FeaturedBooks></FeaturedBooks>
        </Row>
      </div>
    </div>
  )
}

export default Home
