'use client';
import { HeroSectionItem, Item } from '@/types'
import React from 'react'
import CarouselItemCard from './CarouselItemCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';


const HeroCarousel: React.FC = () => {

    const heroSectionItemList: HeroSectionItem[] = [
        {
            id: "123",
            title: "SHOP LATEST \n TECHNOLOGICAL PRODUCTS",
            subtitle: "Unleash tomorrow's technology today; elevating your world with \n innovative solutions and unparalleled performance!",
            productId: "iphone-15-pro",
            titleHighLight: ["LATEST"],
            subtitleHighLight: ["innovative", "solutions"]
        },
        {
            id: "124",
            title: "SHOP LATEST \n TECHNOLOGICAL PRODUCTS",
            subtitle: "Unleash tomorrow's technology today; elevating your world with \n innovative solutions and unparalleled performance!",
            productId: "iphone-15-pro",
            titleHighLight: ["LATEST"],
            subtitleHighLight: ["innovative", "solutions"]
        }
    ]
    const itemList: Item[] = [
        {
            productId: "iphone-15-pro",
            imgList: [],
            discountedPrice: "$999",
            description: "It's iphone 15 pro too fast too smooth",
            category: "technology",
            rating: 5,
            brand: "Apple",
            style: "128GB",
            pattern: "Black",
            variations: [],
            name: "Iphone 15 pro 128 GB"
        }
    ]
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    console.log(current);

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <div>
            <Carousel setApi={setApi} >
                <CarouselContent>
                    {heroSectionItemList.map((ele) => {
                        return <CarouselItem key={ele.id} ><CarouselItemCard carouselItem={ele} /></CarouselItem>
                    })}
                </CarouselContent>
            </Carousel>
            <div className='flex items-center p-2 ml-4'>
                <Button onClick={() => {
                    api?.scrollPrev();
                }} className='p-1' variant={'ghost'}><ChevronLeft color='gray' /></Button>
                {heroSectionItemList.map((ele, idx) => {
                    return <div key={ele.id} onClick={() => {
                        api?.scrollTo(idx);
                    }} className={`inline-block ml-1 mr-1  rounded-full h-2 w-2 hover:cursor-pointer ${current == (idx + 1) ? 'bg-orange-400' : 'bg-gray-400'}`}></div>
                })}
                <Button onClick={() => {
                    api?.scrollNext();
                }} className='p-1' variant={'ghost'}><ChevronRight color='gray' /></Button>
            </div>

        </div>
    )
}

export default HeroCarousel