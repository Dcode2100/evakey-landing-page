"use client"
import React from 'react'
import ButtonWave from './ButtonWave'
import Image from 'next/image'
import ImageSliderHero from './ImageSliderHero'
import { useState,useEffect } from 'react'
const HeroSection = () => {
  const CircleClass = ` border-2 rounded-full bg-secondary h-[15rem] w-[15rem] `
  return (
    <section className='h-[100vh] md:px-[7rem] bg-black text-white hidden relative sm:flex justify-center items-center sm:pt-[6.5rem]'>

      <div className='left-container w-1/2 gap-9 relative flex flex-col justify-center '>
        <div className='brand&punchline text-5xl flex flex-col '>
          <div className='flex gap-3'>
            <Image className="brand_logo " src="/evakey_logo.svg" width={220} height={80} quality={100} alt='Logo' />
            <h1 className=''> YOUR PARTNER IN </h1>
          </div>
          <p className='ml-[-0.2rem]'>CRAFTING PROMOTIONS</p>
        </div>
        <div className='secondpunchline relative flex text-justify flex-col text-xl max-w-[28rem]'>
          <p className=''>
            {"Unlock brand brilliance : Customized keychains labels wristband's (PVC, silicon, and more infused with our innovation.)"}

          </p>
        </div>
        <div className='email-us flex  '>
          <div className='border-2 flex py-5 px-10 bg-text text-secondary  gap-7 items-center rounded-3xl'>
            Get catelog on your mail
            <ButtonWave title={"Contact Us"} className="roundex-sm" />
          </div>
        </div>
      </div>
      <div className='right-container w-1/2 flex items-center 
       relative' >
        {/* <div className=' flex justify-between relative flex-col gap-16 '>
          <div className={`${CircleClass}  ml-[5rem] `}>

          </div>
          <div className={`${CircleClass} ml-[23rem] top-[25%] absolute `}>

          </div>
          <div className={`${CircleClass} ml-[5rem] `}>

          </div>
        </div> */}
        <ImageSliderHero/>
      </div>
    </section>
  )
}

export default HeroSection