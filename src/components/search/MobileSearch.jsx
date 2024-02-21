import React, { useState } from 'react'
import ArrowLeftLight from '../../assets/icons/arrow-left-light.svg'

import { useSearchContext } from '../../hooks/context/useSearchContext'
const MobileSearch = ({ onVisibility }) => {
  const { setSearchTerm } = useSearchContext()


  const [search, setSearch] = useState("")
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(search)
      console.log('key press')
    }
  }
  return (
    <div className='flex justify-between text-gray'>
      <button className='px-2 text-gray' onClick={onVisibility}>
        <img className='text-gray' src={ArrowLeftLight} alt="" />
      </button>
      <input onChange={(e) => setSearch(e.target.value)} onKeyPress={handleSearch} type="text" className="w-full text-gray border-0 rounded-[17px]  p-2 focus:outline-none focus:border focus:border-sky focus:text-secondary bg-neutral" placeholder="Search.." />
    </div>
  )
}

export default MobileSearch