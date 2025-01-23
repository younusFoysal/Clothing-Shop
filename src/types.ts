export interface Product {
    id: string;
    name: string;
    price: number;
    discountPrice?: number;
    description: string;
    image: string;
    rating: number;
    colors: string[];
    sizes: string[];
    type: string;
    style: string;
    selectedSize?: string;
    selectedColor?: string;
}

export type Size = 'small' | 'medium' | 'large' | 'x-large';