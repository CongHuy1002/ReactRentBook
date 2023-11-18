import React, { useEffect, useState } from 'react';
import { Heading, Image, Spinner, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [datas, setDatas] = useState([]); // Initialize with an empty array
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState();
  const toast = useToast();
  const history = useHistory();

  const handleDeleteBtn = async (productId) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/cart/deleteCartItem',
        { productId },
        { withCredentials: true },
      );
      if (res.status === 200) {
        toast({
          title: 'Delete Item Successfully',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/cart/postCart',
        { date },
        { withCredentials: true },
      );
      if (res.status === 200) {
        history.push('/cart/payment');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('http://localhost:5000/cart/', {
          withCredentials: true,
        });
        if (res.status === 200) {
          setDatas(res.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const cartItems = datas.cartItems || [];
  const totalPrice = datas.totalPrice ? formatPrice(datas.totalPrice) : '0 VND';

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='container'>
          <div className='cart-container'>
            <div className='row'>
              <div className='col-lg-8'>
                {cartItems.length === 0 ? (
                  <div className='d-flex flex-column align-items-center'>
                    <Image
                      w='70%'
                      src='https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png'
                    />
                    <h2 className='text-body'>Your cart is empty</h2>
                    <p className='text-secondary'>
                      Looks like you have not added any book to your cart.
                      Return to shop and explore our books.
                    </p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.productID._id}
                      className='d-flex align-items-center gap-5 mb-5'
                    >
                      <img
                        className='cart_img'
                        src={`http://localhost:5000/src/public/images/${item.productID.images}`}
                        alt='Product'
                      />
                      <h4 className='fw-bold m-0'>{item.productID.name}</h4>
                      <span className='cart_price'>
                        {formatPrice(item.productID.price)}
                      </span>
                      <button
                        onClick={() => handleDeleteBtn(item.productID._id)}
                        className='cart_delete-btn'
                      >
                        <i className='fas fa-trash-can'></i>
                      </button>
                    </div>
                  ))
                )}
              </div>
              <div className='col-lg-4'>
                <div className='summary'>
                  <h1 className='text-center'>Summary</h1>
                  <form onSubmit={handleSubmit}>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='m-0'>Quantity</p>
                      <span>{cartItems.length}</span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='m-0'>Total</p>
                      <span className='cart_price'>{totalPrice}</span>
                    </div>
                    <div className='form-group fw-bold d-flex justify-content-between mt-1'>
                      <label htmlFor='date'>Select day rent</label>
                      <div className='controls border'>
                        <input
                          className='datePicker'
                          type='date'
                          id='date'
                          name='date'
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <button type='submit' className='text-white cart_order-btn'>
                      Order Now!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
