import React from 'react'
import Image from 'next/image'

function ImageItem({src,divStyle}:{src:string,divStyle:string}) {
  return (
    
      <div className={`relative ${divStyle}`}>
        <Image src={src} alt='Cat image' className="object-cover rounded-[20px]" fill />
      </div>
  
  )
}

export default ImageItem