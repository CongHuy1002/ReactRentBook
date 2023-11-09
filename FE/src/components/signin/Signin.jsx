import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signin.css';
import { useToast } from '@chakra-ui/react';
const Signin = () => {
  const [username, Setusername] = useState('');
  const [password, Setpassword] = useState('');
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/user/login',
        {
          username,
          password,
        },
        {
          withCredentials: true,
        },
      );
      if (res.status === 200) {
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('userName', res.data.username);
        toast({
          title: 'Login successfully',
          description: 'You have logged in successfully.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Wrong password',
        description: 'Your password is incorrect',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-vh p-5'>
      <div className='form_container p-5 rounded '>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Sign in</h3>
          <div className='mb-2'>
            <label htmlFor='username'><b>Username</b></label>
            <input
              type='text'
              placeholder='Enter your username'
              className='form-control'
              value={username}
              onChange={(e) => Setusername(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='password'><b>Password</b></label>
            <input
              type='password'
              placeholder='Enter your password'
              className='form-control'
              value={password}
              onChange={(e) => Setpassword(e.target.value)}
            />
          </div>
          <button className='btn btn-login h-100 text-white text-center w-100'>
            Sign in
          </button>
          <p className='text-end mt-2'>
            Forgot <Link to=''>Password?</Link>{' '}
            <Link to='/signup' className='ms-2'>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
