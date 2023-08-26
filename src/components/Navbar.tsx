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
              <div className={`h-[198px] flex justify-center items-center border-4 ${isActive?'border-green-950':'border-red-800'}`}>
                <Image src={link.src} alt={link.name} width={link.width} height={link.height} />
              </div>
              <Link href={link.href}>{link.name }</Link>
            </li>
          )
})}
      </ul>
    </nav>
  )
}

export default Navbar