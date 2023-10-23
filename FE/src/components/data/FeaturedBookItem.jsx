import React from 'react'
import './imgbook/featuredbook.css'

const FeaturedBookItem = ({ image, name,author, price }) => {
  return (
    <div>
    <div className="featured-card">
      <div className="featuredItem">
      <img src={image} alt="imgbook" />
      <h1> {name} </h1>
      <p>{author}</p>
      <div className="giasach"> {price} </div>
    </div>
    </div>
    </div>
  )
}

export default FeaturedBookItem
