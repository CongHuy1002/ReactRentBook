import React from 'react'
import {Link} from 'react-router-dom'
import './signup.css'

const Signup = () => {
  return (
    <div className='signup template d-flex justify-content-center align-items-center 100-vh bg-primary p-5'>
      <div className='form_container p-5 rounded bg-white'>
      <form>
        <h3 className='text-center'>Sign Up</h3>
        <div className='mb-2'>
            <label htmlFor='username'>Username</label>
            <input type='text' placeholder='Nhập tài khoản' className='form-control'/>
        </div>
        <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Nhập email của bạn' className='form-control'/>
        </div>
        <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Nhập mật khẩu' className='form-control'/>
        </div>
        <div className='mb-2'>
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <input type='password' placeholder='Nhập mật khẩu' className='form-control'/>
        </div>
        <div className='mb-2'>
          <input type="checkbox" className='custom-control custom-checkbox' id='check'/>
          <label htmlFor='check' className='custom-input-label ms-2'>Remember me</label>
        </div>
        <div className='d-grid'>
            <button className='btn btn-primary'>Sign Up</button>
        </div>
        <p className='text-end mt-2'>
          Already Register? <Link to="/signin" className='ms-2'>Sign in</Link> 
        </p>
        </form>
        </div>
    </div>
  )
}

export default Signup
