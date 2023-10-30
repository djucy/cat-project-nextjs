'use client'

import React, { useState,MouseEventHandler } from 'react'
import Image from 'next/image'

function ImageItem({ src, divStyle, name }: { src: string, divStyle: string, name?: string}) {
  const [hidden, setHidden] = useState(false)
 
  const onElementAppear:MouseEventHandler<HTMLDivElement> = () => {
  setHidden(true)
  }
  
  const onElementHidden: MouseEventHandler<HTMLDivElement> = () => {
    setHidden(false)
  }

  return (
    
      <div className={`  relative ${divStyle}  ` }>
      <Image src={src} alt='Cat image' className="object-cover rounded-[20px]" fill />
      {name && <div className='absolute hover:bg-[rgba(255,134,142,0.6)] inset-0 rounded-[20px]' onMouseEnter={onElementAppear} onMouseLeave={onElementHidden}>
        {hidden && <button className='absolute h-[34px] w-[180px] bg-white left-1/2 -translate-x-1/2 bottom-1 rounded-[10px]'>{name }</button>}
      </div>}
     
      </div>
  
  )
}

export default ImageItem