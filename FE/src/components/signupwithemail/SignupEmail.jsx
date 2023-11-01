import React from 'react'
import './signupemail.css'
import {Link} from 'react-router-dom'

const SignupEmail = () => {
  return (
    <div className='signup template d-flex justify-content-center align-items-center 100-vh bg-primary p-5'>
    <div className='form_container p-5 rounded bg-white'>
    <form>
      <h3 className='text-center'>Sign Up Email</h3>
      <div className='mb-2'>
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Nhập email của bạn' className='form-control'/>
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

export default SignupEmail
