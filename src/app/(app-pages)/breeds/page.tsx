"use client"

import { useState, useEffect } from "react"

import { BackButtonWithTitle, SelectBreedsBox,NumberItemsBreedBox } from "@/components"
import { getBreeds } from "@/utils"




function Breeds() {
  const [breeds, setBreeds] = useState <{name:string,id:string}[]>([{ name: 'All breeds', id: 'null' }]);
  const [breed, setBreed] = useState(breeds[0])
  console.log(breeds)
  console.log(breed)

  useEffect(() => {
    getBreeds()
      .then(data => setBreeds((prev: {}[]) => [...prev,...data]))
  },[])

  useEffect(() => {
    
  })

  return (
    <div className="h-4">
      <BackButtonWithTitle>
        <SelectBreedsBox data={breeds} inputStyle="w-[226px] p-1 bg-[var(--primary-bg-color)]" selectedOption={breed} setSelectedOption={setBreed} />
        <NumberItemsBreedBox/>
      </BackButtonWithTitle>
    
    </div>
  )
}

export default Breeds