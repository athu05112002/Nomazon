import React from 'react'
import { Button } from '@/components/ui/button'
import { HeroSectionItem, Item } from '@/types'
import { ArrowRight, Star } from 'lucide-react'
import Image from 'next/image';

const RenderHighlightedTextTitle = (text: string, highlightWords: string[]) => {

    const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {

        const isHighlighted = highlightWords.some(
            (word) => word.toLowerCase() === part.toLowerCase()
        );

        if (isHighlighted) {
            return (
                <span key={index} className="relative inline-block">
                    {part}
                    <img
                        src="/Logos/underline.png"
                        alt=""
                        className="absolute left-0 bottom-[-14px] w-full"
                        style={{ pointerEvents: 'none' }}
                    />
                </span>
            );
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
    });
};

const RenderHighlightedTextSubTitle = (text: string, highlightWords: string[]) => {

    const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {

        const isHighlighted = highlightWords.some(
            (word) => word.toLowerCase() === part.toLowerCase()
        );

        if (isHighlighted) {
            return (
                <span key={index} className="relative inline-block text-orange-400">
                    {part}
                </span>
            );
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
    });
};

const CarouselItemCard = ({ carouselItem }: { carouselItem: HeroSectionItem }) => {
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
            name: "iPhone 15 pro 128 GB"
        }
    ]
    return (
        <div className="p-8 w-full flex">
            <div className="flex flex-col w-1/2 gap-4">

                <div className="text-3xl font-semibold text-gray-700 whitespace-pre-line">
                    {RenderHighlightedTextTitle(carouselItem.title, carouselItem.titleHighLight)}
                </div>

                <div className="whitespace-pre-line">
                    {RenderHighlightedTextSubTitle(carouselItem.subtitle, carouselItem.subtitleHighLight)}
                </div>

                <Button
                    variant="outline"
                    className="rounded-full w-fit py-6 px-6 text-sm mt-6 flex items-center gap-2"
                >
                    Explore all products
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-400">
                        <ArrowRight color="white" size={18} />
                    </div>
                </Button>
            </div>

            <div className="flex flex-col w-1/2 items-center justify-center">
                <div className='bg-gray-200 rounded-lg w-2/3 flex p-6'>
                    <div className='flex flex-col gap-2 w-1/2 mt-4'>
                        <div className='flex flex-col gap-0'>
                            <div className='text-gray-400'> {itemList[0].brand}</div>
                            <div>{itemList[0].name}</div>
                        </div>
                        <div className='flex items-center'>
                            <Star size={16} color="#000000" fill='orange' strokeWidth={0.5} />
                            <Star size={16} color="#000000" fill='orange' strokeWidth={0.5} />
                            <Star size={16} color="#000000" fill='orange' strokeWidth={0.5} />
                            <Star size={16} color="#000000" fill='orange' strokeWidth={0.5} />
                            <Star size={16} color="#000000" fill='orange' strokeWidth={0.5} />
                            <div className='text-gray-400 text-sm ml-2'>512 reviews</div>
                        </div>
                        <div className='flex'>
                            <div className='text-xl text-gray-700'>
                                {itemList[0].discountedPrice}
                            </div>
                            <div className='text-sm text-gray-500 ml-2 line-through'>
                                {itemList[0].discountedPrice}
                            </div>
                        </div>
                        <div className='ml-[-12px]'>
                            <Button variant={'link'}>View more <ArrowRight size={18} className='w-10' /></Button>
                        </div>

                    </div>
                    <div>
                        <Image
                            alt='iphone-image'
                            src={"/Logos/iphoneImage.png"}
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselItemCard;
