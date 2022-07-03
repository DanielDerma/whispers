import React from 'react'
import { useApp } from '../../context/AppContext'
import Home from '../../utils/icons/Home'
import Leave from '../../utils/icons/Leave'

const Navbar = () => {
  const { open, handleOpen } = useApp()
  const handleNavOpen = () => {
    if (open !== null && open === true) {
      handleOpen()
    }
  }
  return (
    <div className='h-16 w-full flex justify-around items-center bg-red-500 fixed bottom-0'>
      <button onClick={handleNavOpen}>
      <Home />
      </button>
      <Leave />
    </div>
  )
}

export default Navbar
