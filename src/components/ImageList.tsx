'use client'

import {useState,useEffect, ReactNode} from 'react'
import Image from 'next/image';
import { ImageItem } from '@/components';
// import { galleryGridStyle } from '@/constants';

const galleryGridStyle = [
  'bg-red-200 rounded-[20px] row-span-2 h-[300px] w-[200px]',
  'bg-red-200 rounded-[20px] h-[140px] w-[200px]',
  'bg-red-200 rounded-[20px] h-[140px] w-[200px]',
  'bg-red-200 rounded-[20px] row-span-2 col-span-2 h-[300px] w-[420px]',
  'bg-red-200 rounded-[20px] h-[140px] w-[200px]',
  'bg-red-200 rounded-[20px] h-[140px] w-[200px]',
  'bg-red-200 rounded-[20px] h-[140px] w-[200px]',
  'bg-red-200 rounded-[20px] row-span-2  h-[300px] w-[200px]',
  'bg-red-200 rounded-[20px] row-span-2 col-span-2  h-[300px] w-[420px]',
  'bg-red-200 rounded-[20px] h-[140px] w-[200px]'
]
function ImageList({ data,imagesAmount }: {data: {id?:string,name?:string,image:{  id: string;
    url: string ;},
  
}[],imagesAmount:number} ) {



  let index = 0;



 
  
  
  return (
    <div className={`w-[640px]  grid grid-cols-3  gap-2 mt-2 grid-flow-dense`}>
     
      {data && data.map(({ id,name,image }) => {
    let imageStyle = galleryGridStyle[index];
    
        if (index === 9) {
      index = 0
        } else {
          index += 1
    }
        return (
          <ImageItem key={id} src={image.url} divStyle={imageStyle} name={name} />
        )
        
      })}
    </div>
  )
}

export default ImageList


