import React, {useState} from 'react'
import Button from './Button'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {
  const[nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }



  return (
    <div className=' flex justify-between px-4 mx-auto max-w-[1640px] h-28 items-center text-2xl mt-6  '>
            <img className=' h-16 md:h-24  ' src="public\pretty_baked_logo.svg" alt="Pretty Baked logo" />
        
        
            <ul className=' items-center hidden md:flex '>
                <li className=' p-4 '>About</li>
                <li className=' p-4'>Contact</li>
                <li className=' p-4'>Gallery</li>
                <Button />
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
              {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}

            </div>

            <div className={!nav ? 'flex fixed left-0 top-0 h-full border-r-gray-400 backdrop-blur-[30px] w-[60%] justify-center ease-in-out duration-500  ' : 'fixed left-[-100%]'}  >
              <ul className=' p-7    ' >
                <li className=' p-4 border-b   '>About</li>
                <li className=' p-4 border-b  '>Contact</li>
                <li className=' p-4 border-b  '>Gallery</li>
              </ul>
            </div>
            
        
            {/* <button className=' ml-10 p-4 ' >Reach Us</button> */}
       
        
    </div>
  )
}

export default Navbar