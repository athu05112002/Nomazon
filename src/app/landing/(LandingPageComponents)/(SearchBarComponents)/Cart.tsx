import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Cart = () => {
    return (
        <Button variant='outline' className='bg-gray-100 text-gray-500 px-3 py-2 shadow-sm border-none  rounded-lg flex items-center gap-1 relative'>

            <ShoppingCart size={18} />
            <div className='absolute flex justify-center items-center w-4 h-4 top-0 right-0 mr-[-4px] mt-[-4px] p-1 text-white rounded-full text-xs bg-orange-400'>2</div>
        </Button>
    )
}

export default Cart