import Image from 'next/image'
import React from 'react'
import fast from '../utils/img/fast.png'
import Link from 'next/link'

const Portal = () => {
  return (
    <div className='h-screen bg-gradient-to-br from-twich-grad-0 via-twich-grad-50 to-twich-grad-100 flex flex-col items-center justify-center '>
      <Image src={fast} alt="logo" />
      <p className='text-white text-3xl mt-10 text-center font-bold'>Get anoymous messages on twitch?</p>
      {/* <p className='text-white font-[Roobert-Regular] text-4xl mt-10'>twitch</p> */}
      <Link href='/login'><a className='mt-28 p-6 bg-gray-100 font-bold rounded-full active:bg-gray-200'>Get Private Whispers</a></Link>
    </div>
  )
}

export default Portal