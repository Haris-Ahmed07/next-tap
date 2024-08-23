import React, { useState } from 'react'
import { useActionData } from 'react-router-dom'
import {Link } from 'react-router-dom'
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }
  const submitHandler = async(event) => {
    event.preventDefault()
    console.log(formData)

  }
  return (
    <section className='px-5 xl:py-18 lg:py-10 md:py-12 sm:py-12 xs:py-12 bg-gray-50 font-montserrat'>
      <div className='xxl:w-[38%] xl:w-[40%] lg:w-[50%] md:w-[70%] sm:w-[95%] w-full xxl:px-10 xxl:py-16 xl:px-10 xl:py-16  lg:px-12 lg:py-16 md:px-10 md:py-12 sm:px-10 sm:py-8 xs:px-4 xs:py-8 mx-auto rounded-lg shadow-md  bg-white '>
        <h3 className='text-dark xxl:text-[40px] xl:text-[37px] lg:text-[37px] md:text-[33px] sm:text-[30px] xs:text-[27px] xs:text-center sm:text-center md:text-center lg:text-start xl:text-start xxl:text-start leading-9 font-semibold xxl:mb-10 xl:mb-10 lg:mb-10 md:mb-5 sm:mb-5 xs:mb-5'>
          Welcome Back!
        </h3>
        <form  onSubmit={submitHandler}> 
            <div className='mb-5'>
              <input type="email" placeholder='Enter your email' name="email" value={formData.email} onChange={handleInputChange} className='w-full px-3 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-dark text-[16px] leading-7 text-headingColor  placeholder:text-headingColor  cursor-pointer' required >
              
              </input>
            </div>
            <div className='mb-5'>
              <input type="password" placeholder='Password' name="password" value={formData.password} onChange={handleInputChange} className='w-full px-3  text-headingColor py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-white text-[16px] leading-7  placeholder:text-headingColor rounded-md cursor-pointer' required >
              
              </input>
            </div>
            <div className='mt-9'>
              <button type="submit" className='w-full font-semibold text-white bg-darkBlue text-[20px] leading-[30px] rounded-lg px-4 py-3'>
                  Login
              </button>
            </div>
            <p className='mt-8 text-dark text-center xxl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[15px] xs:text-[12px]'>
                Don&apos;t have an account? 
                <Link to="/signup" className="text-dark font-semibold ml-1">
                  SignUp
                </Link>
            </p>
            <div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoginForm