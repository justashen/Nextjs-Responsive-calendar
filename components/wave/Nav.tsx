import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <div className='flex w-full justify-center py-2 z-30 absolute top-0 backdrop-blur-lg bg-slate-50 bg-opacity-75'>
      <Image src="/logo.png" width={60} height={60} alt="Logo" />
    </div>
  )
}

export default Nav
