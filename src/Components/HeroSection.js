import React from 'react'

function HeroSection() {
  return (
    <div className=' text-white'>
      <div className='max-w-[880px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-white front-bold p-2'>Where Block-Chain Meets the African Business</p>
        <h1 className='md:text-7xl sm:-6xl text-4xl font-bold md:py-6'> Grow with us </h1>
        <div className='p-2  justify-center flex space-x-4 '>
        <button className='bg-[#1B2CC1] p-3 rounded'> Get in Touch</button>
        <button className='bg-[#1B2CC1] p-3 rounded'> Explore site</button>
      </div>
        </div>
    </div>
  )
}

export default HeroSection