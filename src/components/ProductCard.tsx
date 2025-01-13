"use client"
import Image from 'next/image';
import Link from 'next/link';
import {ShoppingCart, Star, StarHalf} from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useCart();

    const discountPercentage = product.discountPrice
        ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
        : 0;

    return (
        <div className="group">
            <Link href={`/products/${product.id}`} className="block relative aspect-square mb-4">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
            </Link>
            <h3 className="font-semibold mb-2">
                <Link href={`/products/${product.id}`}>{product.name}</Link>
            </h3>
            <div className="flex items-center gap-1 mb-4">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <Star key={i} size={20} fill="#FFD700" color="#FFD700"/>
                ))}
                {product.rating % 1 !== 0 && (
                    <StarHalf size={20} fill="#FFD700" color="#FFD700"/>
                )}
                <span className="ml-2 text-gray-600">{product.rating}/<span className="text-gray-500">5</span></span>
            </div>
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-4">
                        {product.discountPrice ? (
                            <>
                  <span className="text-3xl font-bold">
                    ${product.discountPrice}
                  </span>
                                <span className="text-xl font-bold text-gray-400 line-through">
                    ${product.price}
                  </span>
                                <span className="bg-red-100 text-red-600 px-4 py-1  rounded-full">
                    {discountPercentage}%
                  </span>
                            </>
                        ) : (
                            <span className="text-3xl font-bold">${product.price}</span>
                        )}
                    </div>
                </div>
                {/*<button*/}
                {/*    className="p-2 hover:bg-gray-100 rounded-full"*/}
                {/*    onClick={() => addToCart(product)}*/}
                {/*>*/}
                {/*    <ShoppingCart size={20}/>*/}
                {/*</button>*/}
            </div>
        </div>
    );
}