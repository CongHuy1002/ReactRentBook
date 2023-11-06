import React from 'react'
import './customerquestion.css'

const CustomerQuestion = () => {
  return (
    <div>
      <section className='customerQuestion'>
        <div className='container-cq'>
          <div className='title'>
            <div className='text'>
              <h1>Join the community</h1>
              <div className='jointeam'>
              <div>Enter your email address to receive regular updates,
              </div>
              <div>
                as well as news on upcoming events and specific offers</div>
            </div>
            </div>
          </div>
        </div>
        <div className="container-imgquestion">
        <img src='./images/banner 1.3.png' alt='' />
        </div>
      </section>
    </div>
  )
}

export default CustomerQuestion
