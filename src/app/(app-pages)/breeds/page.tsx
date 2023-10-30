"use client"

import { useState, useEffect } from "react"
import usePagination from "@/hooks/usePagination"
import { BackButtonWithTitle, SelectBreedsBox,NumberItemsBreedBox,ImageList } from "@/components"
import { getBreeds,getSelectBreeds,getImagesByBreed } from "@/utils"
import { limitList } from '@/constants'





function Breeds() {
  const [breeds, setBreeds] = useState<{ name: string, id: string }[]>([{ name: 'All breeds', id: 'null' }]);
  const [numberBreeds,setNumberBreeds]=useState([])
  const [breed, setBreed] = useState(breeds[0])
  const [image, setImage] = useState<{
    id?: string,
    name?: string,
    image: {
      id: string,
      url: string
    }
  }[]>([])
   const [selected, setSelected] = useState(limitList[1]);
  console.log(breeds)
  console.log(breed)
  console.log(image)
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
   
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: selected,
    count: image.length,
  });
const images=image.slice(firstContentIndex,lastContentIndex)
  useEffect(() => {
    const getDataList = () => {
    getBreeds()
      .then(data => {
        const imageList = data.filter(({id,name, image }: {id:string, name:string, image: { id: string, url: string } }) => {
          return {id,name,image}
        }).map(({id,name, image }: {id:string,name:string, image: { id: string, url: string } }) => {
          
          return{id,name,image} 

        })
        console.log(imageList)
        // setBreeds((prev: {name:string,id:string}[]) => [...prev, ...data]);
        setImage(imageList);
      })
  .catch(error=>console.log(error))
  }
    getDataList()
          
    
  },[])
  
  useEffect(() => {
    getSelectBreeds()
      .then(data => {
        setBreeds((prev: { name: string, id: string }[]) => [...prev, ...data]);
        
    })
},[])

  useEffect(() => {
    const{id,name}=breed
    getImagesByBreed(id)
    .then(data=>console.log(data))
  },[breed])

  console.log(lastContentIndex)

  return (
    <>
    <div className="h-4">
      <BackButtonWithTitle>
        <SelectBreedsBox data={breeds} inputStyle="w-[226px] p-1 bg-[var(--primary-bg-color)]" selectedOption={breed} setSelectedOption={setBreed} />
        <NumberItemsBreedBox selected={selected } setSelected={setSelected} />
      </BackButtonWithTitle>
  
    </div>
      <ImageList data={images} imagesAmount={selected} />
      <div>
        {page!==1&&<button onClick={prevPage}>Previous</button>}
        {page!==totalPages&&<button onClick={nextPage}>Next</button>}
      </div>
      </>
  )
}

export default Breeds