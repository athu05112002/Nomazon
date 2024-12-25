import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import React from 'react'

const WishList = () => {
    return (
        <Button variant='outline' className='mx-2 bg-gray-100 px-3 py-1 shadow-sm border-none  rounded-lg flex items-center gap-1 justify-start text-left'>
            <Heart size={18} />
            <div className='text-xs '> WISHLIST</div>
        </Button>
    )
}

export default WishList