import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header
      className='bg-[url(/bg.png)] bg-center flex justify-around items-center p-4 sticky top-0 z-50 print:hidden shadow-xl border-b-4 border-red-700'
    >
      <Image
        src="/esp.png"
        className='p-2 drop-shadow-lg'
        alt="ESP Guitars"
        width={100}
        height={2}
      />
      <div className='flex text-white uppercase text-center'>
        <div className='font-bold text-xl tracking-wider drop-shadow-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
          Bloodstock
          <span className='font-bold text-xl tracking-widest text-red-700 drop-shadow-[0_0_10px_rgba(255,73,18,0.5)] ml-4'>
            2026
          </span>
        </div>
      </div>
    </header >
  )
}

export default Header
