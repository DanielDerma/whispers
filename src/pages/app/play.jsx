import Image from 'next/image'
import React from 'react'
import Navbar from '../../components/app/Navbar'
import Chat from '../../components/app/Chat'
import photo from '../../utils/img/profileMock.jpg'
import { useApp } from '../../context/AppContext'

const play = () => {
  const { handleOpen } = useApp()

  return (
    <div className="">
      <div className='px-4 py-4 h-[calc(100vh_-_128px)] w-screen grid grid-rows-[35%_1fr] gap-y-4'>

        <div className="w-full p-4 rounded-xl bg-gradient-to-b from-twich2-grad-0 to-twich2-grad-100 ">
          <div className="ring-4 ring-gray-300 rounded-full block w-16 mx-auto">
            <Image src={photo} className="rounded-full" width={30} height={30} layout='responsive'></Image>
          </div>
          <p className='mt-3 text-white text-xl text-center '>dark0w0!</p>
        </div>

        <div className="grid grid-rows-[32px_1fr_1fr] gap-y-2 ">

          <p className='text-2xl text-red-600 text-center'>Get anonymous messages!</p>

          <div className="w-full pt-2 flex flex-col items-center justify-center gap-2 rounded-xl bg-twich2-variant">
            <p className='text-xl text-white font-bold'>Inbox Chat</p>
            <button onClick={handleOpen} className='w-4/5 bg-white py-1 rounded-full'>Create</button>
          </div>

          <div className="w-full p-2 flex flex-col items-center justify-center gap-2 rounded-xl bg-twich2-variant">
            <p className='text-xl text-white font-bold'>Group Chat</p>
            <button onClick={handleOpen} className='w-4/5 bg-white py-1 rounded-full'>Create</button>
            <button onClick={handleOpen} className='w-4/5 bg-red-500 py-1 rounded-full text-white'>Eliminar</button>
          </div>

        </div>
      </div>
      <Chat />
      <Navbar />
    </div>
  )
}

export default play
