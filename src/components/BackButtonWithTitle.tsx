'use client'

import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import React from 'react'

function BackButtonWithTitle({children}:{children?:React.ReactNode}) {
  const router = useRouter()
  const pathname = usePathname()
  

  return (
    <div className='flex items-center space-x-1 h-4'>
      <button type='button' onClick={() => router.back()} className='flex justify-center items-center h-4 w-4 bg-[var(--hover-color)] rounded-[10px]'>
        <Image src='/arrow-left.svg' alt='Arrow is pointing at the left' width={20} height={20}/>
      </button>
      <h2 className='py-[5px] px-3  bg-[var(--hover-color)] rounded-[10px] uppercase text-xl-medium text-[var(--active-color)]'>{pathname.slice(1)}</h2>
      {children}
    </div>
  )
}

export default BackButtonWithTitle