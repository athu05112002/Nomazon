import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import React from 'react'

const CategoryList = () => {
    const categoryList = ['MEN', 'KIDS', 'HOME & LIVING', 'ELECTRONICS', 'BEAUTY', 'SPORT & FITNESS', 'BOOKS', 'MUSIC & GAMES', 'GIFT CARDS']
    return (
        <div className='p-2'>
            <div className='mx-11 flex items-center gap-6'>
                <Button variant={'ghost'}><Menu size={18} color='black' /></Button>
                {categoryList.map((ele) => {
                    return <Button key={ele} variant={'ghost'} className='text-sm'>{ele}</Button>
                })}
            </div>
        </div>
    )
}

export default CategoryList