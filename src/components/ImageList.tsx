'use client'

import {useState} from 'react'
import Image from 'next/image';
import { ImageItem } from '@/components';
import { galleryGridStyle } from '@/constants';
import { count } from 'console';

function ImageList({ data }: { data: { image: { id: string, url: string } }[] }) {
 
  let index = 0;

  const renderedImages = data && data.map(({ image }) => {
    const imageStyle = galleryGridStyle[index];
    
    if (index === 10) {
      index=0
    } else {
      index+=1
    }
        return (
          <ImageItem key={image.id} src={image.url} divStyle={imageStyle} />
        )
        
      })
  return (
    <div className='w-[640px] h-[940px] grid grid-cols-3 grid-rows-6 gap-2 mt-2'>
      {renderedImages}
    </div>
  )
}

export default ImageList


