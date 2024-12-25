import React from 'react'
import SearchBar from './(LandingPageComponents)/(SearchBarComponents)/SearchBar'
import CategoryList from './(LandingPageComponents)/(CategoryListComponents)/CategoryList'
import { Separator } from '@/components/ui/separator'
import HeroCarousel from './(LandingPageComponents)/(HeroSectionComponents)/HeroCarousel'

const LandingPage = () => {
    return (
        <div>
            <SearchBar />
            <CategoryList />
            <Separator className='w-full' />
            <HeroCarousel />
            This is a landing page.
            {/* Hero Carousel  */}
            {/* Explore section   */}
            {/* Shop by Category  */}
            {/* last viewed */}
            {/* Subscribe to News letter */}
            {/* Footer */}
        </div>
    )
}

export default LandingPage