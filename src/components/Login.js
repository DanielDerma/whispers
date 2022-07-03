import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import fast from '../utils/img/fast.png'

const Login = () => {
  const [account, setAccount] = useState('')

  return (
    <div className='h-screen bg-gradient-to-br from-twich-grad-0 via-twich-grad-50 to-twich-grad-100 flex flex-col items-center justify-center '>
      <Image src={fast} alt="logo" />

      <p className="text-white">What &apos;s your twich handle</p>
      <p className="text-gray-200">Ex: midudev</p>
      <input type="text" className='bg-gray-200 mt-12 p-6 rounded-full text-center m-12' value={account} onChange={(e) => setAccount(e.target.value)} />
      {account.length >= 4 && <Link href='/app/play'><a className='p-6 bg-gray-100 font-bold rounded-full active:bg-gray-200'>Create Account</a></Link>}
    </div>
  )
}

export default Login