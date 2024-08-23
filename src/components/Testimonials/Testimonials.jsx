import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {HiStar} from 'react-icons/hi';
import './TestimonialStyle.css'
import testimonial from "/assets/testimonial.svg"
import { testimonialData } from "../../data.js"
import { Rating } from '@mui/material';

const Testimonial = () => {
  return (
    <div className="bg-banner3 w-full pt-12 xxl:pb-10 xl:pb-10 lg:pb-10 md:pb-12">
      <h1 className='xxl:text-[40px] xl:text-[40px] lg:text-[37px] md:text-[33px] sm:text-[30px] xs:text-[27px] text-white font-semibold text-center font-montserrat px-6 '>What People Say About Us</h1>
    <section className="xxl:px-[5%] xl:px-[5%] lg:px-[3%] md:px-[2%] sm:px-[3%] xs:px-[3%] w-full h-[510px] flex flex-row  mx-auto xxl:pt-10 xl:pt-8 lg:pt-8 md:pt-8 sm:pt-8  xs:pt-8 ">
      
    <Swiper style={{"--swiper-navigation-size": "25px", "--swiper-navigation-gap": "1200px"}} className='testimonialSlider' modules={[Pagination, Navigation]} spaceBetween={18} slidesPerView={1} navigation={true} breakpoints={{
      640:{
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
      
      1300:{
        slidesPerView: 3,
        spaceBetween: 20
      }
    }}>
      {
        testimonialData.map((item,index) =>(
          <SwiperSlide className='relative' >
        <img src={testimonial} alt="" className='absolute mx-[40%] z-10'></img>
        <div className='py-[30px] px-5 rounded-[35px] border-2 border-white justify-center mt-10 backdrop-blur-md bg-white/15 z-0'>
          
        <p className='xxl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[15px] xs:text-[12px] leading-7 mt-8 text-textColor font-[400] text-center '> 
          {item.feedback}  
        </p>
          
          
            <div>
            <div className='flex items-center justify-center gap-[2px] py-2'>
            <Rating
                name="product-rating"
                value={item.rating}
                precision={0.5} 
                readOnly
                size="large"
              />
              </div>
              <h4 className='text-[25px] leading-[30px] font-semibold text-headingColor text-center'>
                {item.name}
              </h4>
              
            </div>
        
         
        </div>
      </SwiperSlide>
        ))
      }
      
      
      
    </Swiper>
</section>
  </div>
  )
}

export default Testimonial