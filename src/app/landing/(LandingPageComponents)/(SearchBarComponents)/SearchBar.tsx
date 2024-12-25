import Image from 'next/image'
import React from 'react'
import AddressBox from './AddressBox'
import SearchInput from './SearchInput'
import WishList from './WishList'
import Cart from './Cart'
import AvatarBox from './AvatarBox'

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
                <WishList />
                <Cart />
                <AvatarBox />
            </div>
        </div>
    )
}

export default SearchBar