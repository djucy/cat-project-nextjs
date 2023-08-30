'use client'

import {useState} from 'react'
import Image from 'next/image';
import { ImageItem } from '@/components';
// import { galleryGridStyle } from '@/constants';
import { count } from 'console';
const galleryGridStyle = [
  'bg-red-200 rounded-[20px] row-span-2',
  'bg-red-200 rounded-[20px]',
  'bg-red-200 rounded-[20px]',
  'bg-red-200 rounded-[20px] row-span-2 col-span-2',
  'bg-red-200 rounded-[20px]',
  'bg-red-200 rounded-[20px]',
  'bg-red-200 rounded-[20px]',
  'bg-red-200 rounded-[20px] row-span-2',
  'bg-red-200 rounded-[20px] row-span-2 col-span-2',
  'bg-red-200 rounded-[20px]'
]
function ImageList({ data }: {data:{id: string, url: string  }[]} ) {
 
  let index = 0;

  // const renderedImages = data && data.map(({ image }) => {
  //   let imageStyle = galleryGridStyle[index];
    
  //   if (index === 10) {
  //     index=0
  //   } else {
  //     index+=1
  //   }
  //       return (
  //         <ImageItem key={image.id} src={image.url} divStyle={imageStyle} />
  //       )
        
  //     })
  return (
    <div className='w-[640px] h-[940px] grid grid-cols-3 grid-rows-6 gap-2 mt-2'>
      {/* {renderedImages} */}
      {data && data.map(({ id,url }) => {
    let imageStyle = galleryGridStyle[index];
    
    if (index === 10) {
      index=0
    } else {
      index+=1
    }
        return (
          <ImageItem key={id} src={url} divStyle={imageStyle} />
        )
        
      })}
    </div>
  )
}

export default ImageList


