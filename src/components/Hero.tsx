import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components'

function Hero() {
  return (
    <header>
    <Link href='/'>
      <Image src='/logo.png' alt='Logo' width={104} height={24}/>
    </Link>
      <p className='mt-8 text-[44px] font-medium leading-[58px] text-[var(--primary-text-color)]'>Hi!👋</p>
      <h1 className='mt-1 text-xl-normal text-[var(--secondary-text-color)]'>Welcome to MacPaw Bootcamp 2023</h1>
      <p className='mt-6 text-xl-medium text-[var-(--pimary-text-color)]'>Lets start using The Cat API</p>
      <Navbar/>
    </header>
  )
}

export default Hero