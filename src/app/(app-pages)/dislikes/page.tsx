'use client'

import { useEffect } from 'react'
import { getImagesByBreed, getImagesBySubid } from '@/utils'

function Dislikes() {
  useEffect(() => {
    getImagesByBreed()
    .then(data=>console.log(data))
  },[])


  return (
  <div>Dislike</div>
)

}

export default Dislikes
