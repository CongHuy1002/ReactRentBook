import React from 'react'
import Hero from './Hero'
import BestSeller from './BestSeller'
import GenresBook from './GenresBook'
import FeaturedBook from './FeaturedBook'


const Home = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <GenresBook />
      <FeaturedBook />
    </div>
  )
}

export default Home
