
import { categories } from '../utils/constants'

import { useSearchContext } from '../hooks/useSearchContext'
import useSelection from '../hooks/useSelection'

export default function SearchTags() {
    const {setSearch,state,handleClick } =  useSearchContext()

    const handleSelect = (tag) =>{
        handleClick(tag)
        setSearch(tag)
    }

    return (
        <div className='flex flex-row gap-4'>
            {
                categories.map((tag,i) => (
                    <div key={i} onClick={() => handleSelect(tag)} className={`px-3 py-1  text-[#0f0f0f] ${state[tag] ?  'transition ease-in-out delay-100 bg-gray-950 text-gray-100 '  : 'bg-[#bbab8c73]'} rounded-lg font-medium text-[14px] hover:cursor-pointer `}>
                        {tag}
                    </div>
                ))
            }
        </div>
    )
}
