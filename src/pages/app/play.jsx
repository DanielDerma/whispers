import Image from 'next/image'
import React, { useState } from 'react'
import Navbar from '../../components/app/Navbar'
import Chat from '../../components/app/Chat'
import photo from '../../utils/img/profileMock.jpg'
import Delete from '../../utils/icons/Delete'

const play = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="">
      <div className='p-6 h-screen w-screen'>
        <div className="w-full h-80 p-4 flex flex-col items-center rounded-xl bg-gradient-to-b from-twich2-grad-0 to-twich2-grad-100 ">
          <div className="ring-4 ring-gray-300 rounded-full">
            <Image src={photo} className="rounded-full m-6" width={100} height={100} layout='fixed'></Image>
          </div>
          <p className='mt-3 text-white text-2xl text-center '>send me anonymous messages!</p>
        </div>

        <p className=' mt-6 text-2xl text-red-600 text-center'>Get anonymous messages!</p>

        <div className="w-full h-32 p-2 my-6 rounded-xl bg-twich2-variant flex justify-around items-center">
          <div className="">
            <Image src={photo} className="rounded-full m-6" width={50} height={50} layout='fixed'></Image>
          </div>
          <div className="">
            <p>Grupoto quiz</p>
            <button>copy link</button>
          </div>
          <div className="w-6 h-6 rounded-full bg-white grid place-content-center">
            <Delete />
          </div>
        </div>

        <div className="w-full h-32 p-4 my-6 flex flex-col items-center rounded-xl bg-twich2-variant">
          <p>Group Chat</p>
          <p>NGL.LINK/MIDU.DEV</p>
          <button >copy link</button>
        </div>
      </div>
      <Navbar />
      <Chat />
    </div>
  )
}

export default play