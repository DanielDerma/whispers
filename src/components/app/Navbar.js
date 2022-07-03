import React from 'react'
import Home from '../../utils/icons/Home'
import Leave from '../../utils/icons/Leave'


const Navbar = () => {
  return (
    <div className='h-16 w-full flex justify-around items-center bg-red-500 fixed bottom-0'>
      <Home />
      <Leave />
    </div>
  )
}

export default Navbar