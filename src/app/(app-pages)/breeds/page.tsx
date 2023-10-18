"use client"

import { useState, useEffect } from "react"

import { BackButtonWithTitle, SelectBreedsBox,NumberItemsBreedBox,ImageList } from "@/components"
import { getBreeds } from "@/utils"
import { limitList } from '@/constants'





function Breeds() {
  const [breeds, setBreeds] = useState <{name:string,id:string}[]>([{ name: 'All breeds', id: 'null' }]);
  const [breed, setBreed] = useState(breeds[0])
  const [image, setImage] = useState<{
    id: string,
    url: string,
}[]>([])
   const [selected, setSelected] = useState(limitList[1]);
  console.log(breeds)
  console.log(breed)
  console.log(image)

  useEffect(() => {
    const getDataList = () => {
    getBreeds(selected)
      .then(data => {
        const imageList = data.filter(({ image }: { image: { id: string, url: string } }) => {
          return image
        }).map(({ image }: { image: { id: string, url: string } }) => {
           const { id, url } = image
          return{id,url} 

        })
        console.log(imageList)
        setBreeds((prev: {name:string,id:string}[]) => [...prev, ...data]);
        setImage(imageList);
      })
  .catch(error=>console.log(error))
  }
    getDataList()
          
    
  },[selected])



  

  return (
    <>
    <div className="h-4">
      <BackButtonWithTitle>
        <SelectBreedsBox data={breeds} inputStyle="w-[226px] p-1 bg-[var(--primary-bg-color)]" selectedOption={breed} setSelectedOption={setBreed} />
        <NumberItemsBreedBox selected={selected } setSelected={setSelected} />
      </BackButtonWithTitle>
  
    </div>
      <ImageList data={image} imagesAmount={selected}></ImageList>
      </>
  )
}

export default Breeds