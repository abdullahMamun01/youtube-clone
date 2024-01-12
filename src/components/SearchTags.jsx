
import { categories } from '../utils/constants'
import { useAppContext } from '../context/App/AppContextProvider'
import { useReducer } from 'react'
import reducer from '../context/reducer'
import { searchVideos } from '../context/action'


export default function SearchTags() {
    const {state,dispatch} = useAppContext()
    const selectSearch  = state.search || 'All'
    const handleSelect = (tag) =>{
        dispatch(searchVideos(tag))
    }

    return (
        <div className='flex flex-row gap-4 max-[768px]:hidden'>
            {
                categories.map((tag,i) => (
                    <div key={i} onClick={() => handleSelect(tag)} className={`px-3 py-1  text-gray  ${selectSearch === tag ?  'transition ease-in-out delay-100 bg-secondary text-neutral '  : 'bg-neutral'} rounded-lg font-medium text-[14px] hover:cursor-pointer `}>
                        {tag}
                    </div>
                ))
            }
        </div>
    )
}
