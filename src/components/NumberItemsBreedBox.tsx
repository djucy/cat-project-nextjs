'use client'

import React,{useState} from 'react'
import { Listbox } from '@headlessui/react'

import DropdownArrow from '../../public/dropdown-arrow.svg'
import { limitList } from '@/constants'

function NumberItemsBreedBox() {
  const [selected, setSelected] = useState(limitList[1]);

  return (
    
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative'>
        <div className=''>
          <Listbox.Button className='relative rounded-[10px] focus:outline-none text-base-normal text-[var(--secondary-text-color)] w-[101px] h-4  bg-[var(--primary-bg-color)] py-[8px] pl-1'>
            <span className='flex justify-start'>Limit: {selected }</span>
            <span className='button__arrow'>
              <DropdownArrow />
              </span>
          </Listbox.Button>
          </div>
        <Listbox.Options className='options__list'>
          {limitList.map((limit, index) => (
            <Listbox.Option key={index}
            value={limit}>
              Limit: {limit}
  </Listbox.Option>
))}
        </Listbox.Options>
      </div>
      </Listbox>
    
  )
}

export default NumberItemsBreedBox