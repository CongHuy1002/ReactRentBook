import React from 'react'
import './signin.css'
import {Link} from 'react-router-dom'

const Signin = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-vh bg-primary p-5'>
      <div className='form_container p-5 rounded bg-white'>
      <form>
        <h3 className='text-center'>Sign In</h3>
        <div className='mb-2'>
            <label htmlFor='username'>Username</label>
            <input type='text' placeholder='Nhập tài khoản' className='form-control'/>
        </div>
        <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Nhập mật khẩu' className='form-control'/>
        </div>
        <div className='mb-2'>
          <input type="checkbox" className='custom-control custom-checkbox' id='check'/>
          <label htmlFor='check' className='custom-input-label ms-2'>Remember me</label>
        </div>
        <div className='d-grid'>
            <button className='btn btn-primary'>Sign in</button>
        </div>
        <p className='text-end mt-2'>
          Forgot <Link to="">Password?</Link> <Link to="/signup" className='ms-2'>Sign up</Link> 
        </p>
        </form>
        </div>
    </div>
  )
}

export default Signin
