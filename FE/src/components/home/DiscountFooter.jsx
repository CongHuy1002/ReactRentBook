import React from 'react'
import './discountfooter.css'

const DiscountFooter = () => {
    return (
        <div>
            <section className='footerDiscount'>
                <div className='container-df'>
                    <div className='container-sale'>
                        <div className='text'>
                            <h1>THE BEST OF 2023</h1>
                            <div className='sale'>
                                <div>
                                    UP TO 30% OFF
                                </div>
                                <div>
                                    TOP READS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-imgsale">
                        <img src='./images/saleimg.png' alt='' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DiscountFooter
