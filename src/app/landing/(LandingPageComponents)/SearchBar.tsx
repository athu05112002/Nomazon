import Image from 'next/image'
import React from 'react'
import AddressBox from './(SearchBarComponents)/AddressBox'
import SearchInput from './(SearchBarComponents)/SearchInput'

const SearchBar = () => {
    return (
        <div className='p-2'>
            <div className='mx-11 flex items-center'>
                <Image alt='Nomazon-logo'
                    src={'/Logos/AmazonLogo.png'}
                    width={100}
                    height={50}
                ></Image>
                <AddressBox />
                <SearchInput />
                {/* Wishlist */}
                {/* Cart button */}
                {/* User icon */}
            </div>
        </div>
    )
}

export default SearchBar