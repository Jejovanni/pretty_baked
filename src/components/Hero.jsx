import React from 'react'
import Button from '../Button'

function Hero() {
  return (
    <div className=' flex flex-col '>
        <div className=' flex flex-col items-center justify-center mx-auto min-h-screen  '>
          <h1 className=' text-3xl text-center font-semibold md:text-4xl  p-2 '>Pretty Baked</h1>
        <h1 className=' text-5xl text-center  md:text-6xl lg:text-8xl  tracking-tight font-medium p-4   ' >Beautifully and deliciouly baked goods and confections</h1>
        <p className=' text-xl md:text-3xl text-center  font-mono tracking-tight p-4  ' >We use high quality ingredients to create your perfect cookie, brownie, bread or cake that you can enjoy anytime.</p>
        <Button className='  w-2  ' />
        </div>

        {/* <div className=' flex '>
        <img className='  ' src=" public\vite.svg" alt="" />
        </div> */}
    </div>
  )
}

export default Hero