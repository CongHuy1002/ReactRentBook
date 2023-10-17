import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <>
    <div class="container-hero">
    <img src='./images/logo.png' alt='' />
      <div class="hero-text">
        <h1>Ngày nay đọc sách ngày mai đếm tiền</h1>
        <p>Đọc sách là cách tuyệt vời để khám phá kiến thức, trải nghiệm những thế giới mới, và mở rộng tầm hiểu biết của mình.
        </p>
        <button>Read Now</button>
      </div>
    </div>
  </>
  )
}

export default Hero
