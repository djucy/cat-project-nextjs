'use client'

import React, { useState, Fragment } from 'react'
import { Combobox } from '@headlessui/react'
import DropdownArrow from '../../public/dropdown-arrow.svg'

function SelectBreedsBox({ data, inputStyle, selectedOption, setSelectedOption }: { data: { name: string, id: string }[], inputStyle: string, selectedOption:{name:string,id:string},setSelectedOption:(selectedOption:{name:string,id:string})=>void}) {

  // const [selectedOption, setSelectedOption] = useState<string>('')
  const [query, setQuery] = useState<string>('')


  const filteredOption =
    query === ''
      ? data
      : data.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox value={selectedOption} onChange={setSelectedOption} >
      <div className='relative'>
      <div className={`relative rounded-[10px] focus:outline-none text-base-normal text-[var(--secondary-text-color)] ${inputStyle}`}>
         <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        displayValue={(option:{name:string}) => option.name}
        className='bg-transparent w-full focus:outline-none'
      />
      <Combobox.Button className='button__arrow'>
        <DropdownArrow/>
        </Combobox.Button>
        </div>
     
      <Combobox.Options className={`options-list  h-[300px] z-30 absolute`}>
        {filteredOption.map((option) => (
          /* Use the `active` state to conditionally style the active option. */
          /* Use the `selected` state to conditionally style the selected option. */
          <Combobox.Option  key={option.id} value={option} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={` text-base-normal  ${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-[var(--secondary-text-color)]'
                }`}
              >
                {/* {selected && <CheckIcon />} */}
                {option.name}
              </li>
            )}
          </Combobox.Option>
        ))}
        </Combobox.Options>
      </div>
    </Combobox>
  )
}

export default SelectBreedsBox


