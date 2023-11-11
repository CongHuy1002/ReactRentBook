import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { nav } from '../../data/Data';
import './header.css';
import { useToast } from '@chakra-ui/react';

import axios from 'axios';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isLogin, SetisLogin] = useState(false);
  const history = useHistory();
  const accessToken = localStorage.getItem('accessToken');

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/user/logout',
        {},
        {
          withCredentials: true,
        },
      );
      if (res.status === 200) {
        toast({
          title: 'Logout successfully',
          description: 'You have logged out successfully.',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        localStorage.removeItem('accessToken');
        setTimeout(() => {
          history.push('/signin');
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const toast = useToast();
  return (
    <header>
      <div className='container flex'>
        <div className='logo'>
          <img
            src='https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/logo-1.svg'
            alt='Company Logo'
          />
        </div>

        <nav className={isNavVisible ? 'nav small' : 'nav'}>
          <ul className='d-flex gap-5 p-0'>
            {nav.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='d-flex gap-2 align-items-center'>
          <Link to='/search' className='action-btn' aria-label='Search'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </Link>
          <div className='user-menu'>
            <button
              className='action-btn dropdown-toggle'
              id='dropdownMenuButton'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <i className='fa-regular fa-user'></i>
            </button>
            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <Link className='m-0 dropdown-item' to='/profile'>
                Profile
              </Link>
              <Link className='m-0 dropdown-item' to='/settings'>
                Settings
              </Link>
              <Link
                onClick={handleLogout}
                className='m-0 text-danger dropdown-item'
                to='/logout'
              >
                Logout
              </Link>
            </div>
          </div>
          <Link to='/cart' className='action-btn' aria-label='Cart'>
            <i className='fa-solid fa-cart-shopping'></i>
          </Link>
        </div>

        {/* <div className='menu-toggle'>
          <button
            onClick={() => setIsNavVisible(!isNavVisible)}
            aria-label='Toggle menu'
          >
            <i className={`fa ${isNavVisible ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
