import React from 'react'
import Button from './Button'

const Hero2 = () => {
  return (
    <div className=' flex flex-col md:flex-row items-center mx-auto min-h-screen justify-items-start  max-w-[1640px] '>
        <div className=' flex flex-col items-center justify-center text-center md:text-left p-4 min-w-[50%] '>
            <h1 className=' text-5xl text-center md:text-left  md:text-6xl lg:text-8xl  tracking-tight font-medium '>Pretty Baked, Pretty high quality</h1>
            <p className=' text-xl md:text-3xl text-center md:text-left  font-mono tracking-tight p-4  '>We combine exquisitely sourced ingredients with time-honored techniques to produce our sweets. The best you'll find around</p>
            <div className='flex min-w-full p-4 justify-center'>
                <Button className={'md:place-self-start '} />
            </div>
            
        </div>
        <div className=' min-w-[50%] flex items-center justify-center'>
            <img className=' md:rotate-90 rounded-[6%]  max-h-[60vh]' src="/prettybaked.jpg" alt=" choclate roasted hazelnut bread" />
        </div>
    </div>
  )
}

export default Hero2