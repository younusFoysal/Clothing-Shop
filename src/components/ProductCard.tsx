"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Star, StarHalf} from 'lucide-react';
import { Product } from '@/types';


export default function ProductCard({ product }: { product: Product }) {
    // const { addToCart } = useCart();

    const discountPercentage = product.discountPrice
        ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
        : 0;

    return (
        <div className="group">
            <Link href={`/products/${product.id}`} className="block  mb-4">
                <Image
                    src={product?.image}
                    alt={product?.name}
                    height={800}
                    width={800}
                    className="object-cover h-[174px] w-[174px] md:h-[298px] md:w-[295px] rounded-lg group-hover:opacity-90 transition-opacity"
                />
            </Link>
            <h3 className="font-semibold mb-2">
                <Link href={`/products/${product.id}`}>{product.name}</Link>
            </h3>

            <div className="flex items-center gap-1 mb-2">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <Star key={i} size={20} fill="#FFC633" color="#FFC633"/>
                ))}
                {product.rating % 1 !== 0 && (
                    <StarHalf size={20} fill="#FFC633" color="#FFC633"/>
                )}
                <span className="ml-2 text-gray-600">{product.rating}/<span className="text-gray-500">5</span></span>
            </div>

            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-4">
                        {product.discountPrice ? (
                            <>
                  <span className="text-xl md:text-2xl font-bold">
                    ${product.discountPrice}
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-gray-400 line-through">
                    ${product.price}
                  </span>
                  <span className="text-sm md:text-lg bg-red-100 text-red-600 px-4 py-1  rounded-full">
                    -{discountPercentage}%
                  </span>
                            </>
                        ) : (
                            <span className="text-xl md:text-2xl font-bold">${product.price}</span>
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