'use client'

import { useEffect } from 'react'
import { getImagesBySubid } from '@/utils'

function Dislikes() {
  useEffect(() => {
    getImagesBySubid();
  },[])


  return (
  <div>Dislike</div>
)

}

export default Dislikes
