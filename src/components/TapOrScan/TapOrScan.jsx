import React from 'react'
import scan01 from "/assets/scan01.svg"
import scan02 from "/assets/scan02.svg"
import scan03 from "/assets/scan03.svg"

const TapOrScan = () => {
  return (
    <div>
    <div className="bg-white w-full py-2">
    <section className="container sm:py-10 xs:py-8 md:py-12 lg:py-12 xl:py-16 xxl:py-16 h-[30%] w-[750px] flex flex-col justify-center items-center mx-auto  gap-y-[10px]">
    <h1 className="text-black font-montserrat font-semibold text-center xxl:text-[40px] xl:text-[40px] lg:text-[37px] md:text-[33px] sm:text-[30px] xs:text-[27px]">
    Tap or scan to share immediately
    </h1>
    <p className='text-gray-700 font-montserrat text-center font-light xxl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px]'>
    You can share information with almost any smartphone (iPhone or Android) that can scan QR codes. Recipients don't need a Popl accessory or app to get your information!
    </p>
    </section>
    </div>
    <div className="bg-gray-100 w-full py-2 ">
    <section className="container h-[30%] sm:pt-4 sm:pb-8 xs:pb-6 xs:pt-2 md:pb-12 md:pt-8 lg:pt-8 lg:pb-12 xl:pt-12 xl:pb-16 xxl:pt-12 xxl:pb-16 flex flex-col justify-center items-center mx-auto">
    <div className='flex xxl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-x-10'>
             <div className='flex flex-col justify-center my-3 items-center'>
                  <img src={scan01}></img>
                  <h4 className='text-[15px] font-bold text-black mt-3'>Contact Info</h4>
                  <h4 className='xxl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px] font-thin text-black mt-3 text-center'>Phone numbers, email, websites, WhatsApp, and much more</h4>
             </div>
             <div className='flex flex-col  my-3 justify-center items-center'>
                  <img src={scan02}></img>
                  <h4 className='text-[15px] font-bold text-black text-center mt-3'>Social Media</h4>
                  <h4 className='xxl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px] font-thin text-black mt-3 text-center'>LinkedIn, Facebook, Instagram, Twitter, YouTube, and much
                  more</h4>
             </div>
             <div className='flex flex-col  my-3  justify-center items-center'>
                  <img src={scan03}></img>
                  <h4 className='text-[15px] font-bold text-black mt-3'>Review & Payment Apps</h4>
                  <h4 className='xxl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[15px] xs:text-[12px] font-thin text-black mt-3 text-center'>PayPal, Venmo, CashApp, Zelle, Apple Pay, and more</h4>
             </div>
   
            </div>
    </section>
    
    </div>
    </div>
  )
}

export default TapOrScan