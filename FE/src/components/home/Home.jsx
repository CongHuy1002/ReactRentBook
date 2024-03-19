import React from 'react'
import Hero from './Hero'
import BestSeller from './BestSeller'
import GenresBook from './GenresBook'
import FeaturedBook from './FeaturedBook'
<<<<<<< HEAD
import CustomerComment from './CustomerComment'
import CustomerQuestion from './CustomerQuestion'
import DiscountFooter from './DiscountFooter'

=======
import { CustomerCard } from './CustomerCard'
import CustomerQuestion from "./CustomerQuestion"
import DiscountFooter from "./DiscountFooter"
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <GenresBook />
      <FeaturedBook />
<<<<<<< HEAD
      <CustomerComment />
      <CustomerQuestion />
=======
      <CustomerCard/>
      <CustomerQuestion/>
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
      <DiscountFooter />
    </div>
  )
}

export default Home
