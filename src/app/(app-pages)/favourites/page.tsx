'use client'

import {useEffect,useState} from 'react'
import { getFavourites } from '@/utils'
import { ImageList } from '@/components'

function Favourites() {

  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    getFavourites()
    .then(data=>setFavourites(data))
  },[])
  return (
    <ImageList data={favourites } imagesAmount={10} />
  )
}

export default Favourites