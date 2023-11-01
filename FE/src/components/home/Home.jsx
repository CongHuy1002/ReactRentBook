import React from 'react'
import Hero from './Hero'
import BestSeller from './BestSeller'
import GenresBook from './GenresBook'
import FeaturedBook from './FeaturedBook'
import { CustomerCard } from './CustomerCard'

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <GenresBook />
      <FeaturedBook />
      <CustomerCard/>
    </div>
  )
}

export default Home
