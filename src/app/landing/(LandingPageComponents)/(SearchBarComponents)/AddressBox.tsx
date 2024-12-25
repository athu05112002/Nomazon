import React from 'react'
import { ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AddressBox = () => {
    return (
        <Button variant='outline' className='mx-8 bg-gray-100 px-3 py-1 shadow-sm border-none  rounded-lg flex items-center gap-1 justify-start text-left'>
            <MapPin size={20} />
            <div className='flex flex-col gap-0'>
                <div className='text-gray-500 font-thin' style={{
                    fontSize: '0.7rem'
                }}>Deliver To</div>
                <div className='text-xs font-thin text-gray-800 mt-[-3px]' style={{
                    fontSize: '0.8rem'
                }}>Pune, Maharashtra</div>
            </div>
            <ChevronDown size={6} />
        </Button>
    )
}

export default AddressBox