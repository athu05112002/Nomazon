export interface HeroSectionItem {
    id: string;
    title: string;
    subtitle: string;
    productId: string;
    titleHighLight: string[];
    subtitleHighLight: string[];
}

export interface Item {
    productId: string;
    imgList: string[];
    discountedPrice: string;
    description: string;
    category: string;
    rating: number;
    brand: string;
    style: string;
    pattern: string;
    variations: any[];
    name: string; // Replace `any[]` with a more specific type if known
}