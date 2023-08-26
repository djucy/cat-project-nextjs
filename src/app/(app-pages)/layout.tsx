import { SearchBar,BackButtonWithTitle } from "@/components";


import React from 'react'

function AppPages({children}:{children:React.ReactNode}) {
  return (
    <main>
      <SearchBar />
      <div className='main__container'>
        {children}
      </div>
    </main>
  )
}

export default AppPages