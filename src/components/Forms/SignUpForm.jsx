import React from 'react'
import signupImg from '../../assets/signup.gif'
import {Link} from 'react-router-dom'
import { useState } from 'react'
const SignUpForm = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',

  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})

  }

  const submitHandler = async(event) => {
    event.preventDefault()
    console.log(formData)

  }

  return (
    <section className='px-5 md:px-[12%] sm:px-[5%] xxl:py-[80px] xl:py-18 lg:py-10 md:py-12 sm:py-12 xs:py-12 bg-gray-50 font-montserrat'>
        <div className='max-w-[1170px] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 flex flex-col justify-center items-center xxl:gap-x-10 xl:gap-x-10 lg:gap-x-2'>
            <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
              <figure className='w-full rounded-l-lg' >
                  <img src={signupImg}>
                  </img>
              </figure>
            </div>
            <div className='rounded-lg w-full xxl:px-4 xxl:py-16 xl:px-2 xl:py-16  lg:px-6 lg:py-16 md:px-10 md:py-12 sm:px-10 sm:py-8 xs:px-4 xs:py-8 xxl:shadow-none xxl:bg-gray-50 xl:shadow-none xl:bg-gray-50 lg:shadow-none lg:bg-gray-50 shadow-md  bg-white '>
              <h3 className='text-dark xxl:text-[40px] xl:text-[40px] lg:text-[37px] md:text-[33px] sm:text-[30px] xs:text-[27px] leading-9 font-semibold xxl:mb-10 xl:mb-10 lg:mb-10 md:mb-8 sm:mb-8 xs:mb-5 xs:text-center sm:text-center md:text-center lg:text-start xl:text-start xxl:text-start'>
                  Create an account
              
              </h3>
              <form onSubmit={submitHandler}>
              <div className='xxl:mb-5 xl:mb-5 lg:mb-4 md:mb-4 sm:mb-4 xs:mb-4'>
              <input type="text" placeholder='Full Name' name="name" value={formData.name} onChange={handleInputChange} className='w-full px-3 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer' required >
              
              </input>
            </div>
             <div className='xxl:mb-5 xl:mb-5 lg:mb-4 md:mb-4 sm:mb-4 xs:mb-4'>
              <input type="email" placeholder='Enter your email' name="email" value={formData.email} onChange={handleInputChange}  className='w-full px-3  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer' required >
              
              </input>
            </div>

            <div className='xxl:mb-5 xl:mb-5 lg:mb-4 md:mb-4 sm:mb-4 xs:mb-4'>
              <input type="password" placeholder='Password' name="password" value={formData.password} onChange={handleInputChange}  className='w-full px-3 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer' required >
              
              </input>
            </div>
          
            <div className='xxl:mt-5 xl:mt-5 lg:mt-3 md:mt-3 sm:mt-2 xs:mt-2'>
              <button type="submit" className='w-full bg-darkBlue text-white text-[20px] leading-[30px] rounded-lg px-4 py-3 font-semibold'>
                  Sign Up
              </button>
            </div>
            <p className='mt-5 text-dark xxl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[15px] xs:text-[12px] text-center'>
              Already have an account? 
                <Link to="/login" className="text-dark font-semibold ml-1">
                  Login
                </Link>
            </p>
              </form>
            </div>
          </div>
        </div>
    </section>
  )
}

export default SignUpForm