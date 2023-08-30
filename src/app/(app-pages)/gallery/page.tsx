'use client'

import { useState, useEffect } from 'react'
import { BackButtonWithTitle, ImageList } from '@/components'
import { getGalleryImages } from '@/utils'

function Gallery() {
const [images, setImages] = useState([])
  
  useEffect(() => {
    getGalleryImages()
    .then(data=>setImages(data))
  },[])
  
  return (
    <>
      <BackButtonWithTitle/>
      <ImageList data={images} />
    </>
  )
}

export default Gallery