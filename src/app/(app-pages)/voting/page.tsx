'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

import { getVoting,postFavouriteImage,getFavouriteById } from "@/utils";
import { BackButtonWithTitle } from "@/components";

import LikeIcon from '../../../../public/new-white-smile.svg'
import WhiteHeart from '../../../../public/white-heart.svg'


function Voting() {
  const [cat, setCat] = useState<{id?:string,url?:string}> ({})
  console.log(cat)
  
  useEffect(() => {
    getVoting()
    .then(data=>setCat(data[0]))
    
    
  },[])

  const voteFauvorite = (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { id } = cat
    if (!id) {
      return
    } else {
       postFavouriteImage(id)
         .then(data => console.log(data))
      getVoting()
    .then(data=>setCat(data[0]))
    }
   
    
    
}
  return (
    <>
      <BackButtonWithTitle></BackButtonWithTitle>
      <div className="w-[640px] h-[360px] mt-[25px]  relative">
        <Image src={cat.url ? cat.url : '/upload-bg.jpg'} alt='Cat' className="object-cover rounded-[20px]" fill />
        <ul className="flex w-[248px] rounded-[20px] absolute">
          <li>
            <button className="items-centering w-8 h-8 rounded-l-[20px] bg-[var(--green-color)] bg-[url('/new-white-smile.svg')] bg-no-repeat bg-center">
              {/* <Image src='/like.svg' alt='Like icon' width={30 } height={30} className="stroke-white"/> */}
           {/* <LikeIcon className='stroke-[var(--active-color)] fill-[var(--active-color)] stroke-1'/> */}
            </button>
          </li>
          <li>
            <button className="items-centering w-8 h-8 bg-[var(--active-color)]" onClick={voteFauvorite}>
              {/* <Image src='/fav.svg' alt='Like icon' width={30 } height={30} /> */}
              <WhiteHeart className='stroke-white fill-black'/>
            </button>
          </li>
          <li>
            <button className="items-centering w-8 h-8 rounded-r-[20px] bg-[var(--orange-color)]">
               <Image src='/dislike.svg' alt='Like icon' width={30 } height={30} />
            </button>
          </li>
        </ul>
      </div>
      </>
  )
}

export default Voting