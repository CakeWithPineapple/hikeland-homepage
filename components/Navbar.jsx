"use client"

import Badge from '@mui/material/Badge'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex text-white flex-row bg-violet-600 items-center justify-between px-2 py-5'>
        <Link href="/"><Image src="/logo.png" alt="Logo" width={156} height={156} className='w-50 h-50 object-fit rounded-full' /></Link>
        <div className='gap-4 mr-5'>
          <Link href="#cities" className='text-xl'>Steden &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
          <Link href="#au" className='text-xl'>Over Ons &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
          <Badge badgeContent={"Coming Soon"} color="error">
              <Link className=' text-xl' href="https://cloud.hikeland.nl">
                  Cloud
              </Link>
          </Badge>
        </div>
    </nav>
  )
}

export default Navbar