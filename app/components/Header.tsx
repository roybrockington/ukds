import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header
      className='bg-black bg-center flex justify-around items-center p-4 sticky top-0 z-50 print:hidden shadow-xl border-b-4 border-pink-700'
    >
      <Image
        src="/ukds.png"
        className='p-2 drop-shadow-lg'
        alt="Sound Service @ UKDS"
        width={140}
        height={6}
      />
      <div className='flex text-white uppercase text-center'>
        <div className='font-bold text-lg tracking-wider drop-shadow-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
          Sound
          Service

          <div className='font-bold text-sm tracking-wider drop-shadow-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
            <span className='font-bold text-sm tracking-widest text-pink-700 drop-shadow-[0_0_10px_rgba(255,73,18,0.5)]'>
              @ UKDS 2026
            </span>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header
