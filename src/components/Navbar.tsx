'use client'


import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from "next/image";

import { navLinks } from "@/constants"

function Navbar() {
  const pathname = usePathname();
  // return (
  //   <nav>
  //     <ul>
  //       <li>
  //         <Link href='/voting'></Link>
  //       </li>
  //       <li>
  //         <Link href='/breeds'></Link>
  //       </li>
  //       <li>
  //         <Link href='/gallery'></Link>
  //       </li>
  //     </ul>
      
      
  //     Navbar</nav>
  // )
  return (
    <nav className='mt-2'>
      <ul className="w-[446px] grid grid-cols-3 gap-[16px]">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name} >
              <div className={`h-[198px] flex justify-center items-center bg-[var(${link.bgColor})] border-4 rounded-[20px] ${isActive?'border-[var(--hover-color)]':'border-[var(--border-color)]'}`}>
                <Image src={link.src} alt={link.name} width={link.width} height={link.height} />
              </div>
              <Link href={link.href}  className={`rounded-[10px] py-1  items-centering mt-1 text-xs tracking-[.16em] uppercase ${isActive?'text-white bg-[var(--active-color)]':'text-[var(--active-color)] bg-white'}`}>{link.name }</Link>
            </li>
          )
})}
      </ul>
    </nav>
  )
}

export default Navbar