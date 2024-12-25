import { Input } from '@/components/ui/input'
import React from 'react'

const SearchInput = () => {
    return (
        <div className='mx-8 bg-gray-100 p-0 shadow-sm  rounded-lg flex items-center gap-1'>
            <div><Input className='border-none w-full' placeholder='Search for products brand and more' /></div>
        </div>
    )
}

export default SearchInput