import Image from 'next/image'
import { Button } from '@/components/ui/button'
import React from 'react'
import { ChevronDown } from 'lucide-react'

const AvatarBox = () => {
    return (
        <Button variant='outline' className='mx-2 bg-gray-100 text-gray-500 shadow-sm border-none rounded-lg flex items-center pl-0 pr-1 justify-center'>
            <Image
                src='/Logos/AvatarImage.jpg'
                height={36}
                width={36}
                className='rounded-lg'
                alt='CN'

            />
            <span className='text-gray-400 text-sm'>ATH</span>
            <ChevronDown />
        </Button>
    )
}

export default AvatarBox