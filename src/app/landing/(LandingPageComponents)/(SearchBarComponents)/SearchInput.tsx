import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
    return (
        <div className='mx-2 bg-gray-100 rounded-lg flex items-center gap-1 w-3/6'>
            <div className='w-full relative flex items-center'>
                <Input className='py-1 pl-10 pr-2 shadow-none border-none outline-none focus-visible:ring-0' placeholder='Search for products brand and more' />
                <div className='absolute ml-2'>
                    <Search size={18} color='#A9A9A9' />
                </div>
            </div>
        </div>
    )
}

export default SearchInput