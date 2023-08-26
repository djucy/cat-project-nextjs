'use client'

import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link";

import { votingLinks } from "@/constants";

function SearchBar() {
  const pathname = usePathname();
  
  return (
    <div className="flex space-x-1">
      <form>
        <div className="relative">
        <input type="search" className="w-[470px] h-[60px] bg-white rounded-[20px] py-[15px] pl-2" placeholder="Search for breeds by name" />
          <button type='submit' className="w-4 h-4 bg-[var(--hover-color)] flex justify-center items-center rounded-[10px] absolute top-1 right-[6px]">
            <Image src='/search.svg' alt='SearchIcon' width={ 20} height={20}/>
          </button>
        </div>
      </form>
        <ul className="flex space-x-1">
          {votingLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <li key={link.id}>
            <Link href={link.href}  className='w-6 h-6 bg-white flex justify-center items-center rounded-[20px]'>
                  <Image src={link.src} alt={link.alt} width={30} height={30}/>
            </Link>
          </li>
            )
          })}
        </ul>
      

    </div>
  )
}

export default SearchBar