"use client"
import { products } from '@/data/products';
import { ShoppingCart, Heart, Star, StarHalf } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { Size } from '@/types';
import {useParams} from "next/navigation";

export default function ProductPage() {
    const { id } = useParams();
    const product = products.find((p) => p.id === id) || products[0];
    const { addToCart } = useCart();
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState<Size>('medium');
    const [quantity, setQuantity] = useState(1);

    const discountPercentage = product.discountPrice
        ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
        : 0;

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-square">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                        <div className="flex items-center gap-1 mb-4">
                            {[...Array(Math.floor(product.rating))].map((_, i) => (
                                <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
                            ))}
                            {product.rating % 1 !== 0 && (
                                <StarHalf size={20} fill="#FFD700" color="#FFD700" />
                            )}
                            <span className="ml-2 text-gray-600">{product.rating}/5</span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <div className="flex items-center gap-4">
                            {product.discountPrice ? (
                                <>
                  <span className="text-3xl font-bold text-red-600">
                    ${product.discountPrice}
                  </span>
                                    <span className="text-xl text-gray-500 line-through">
                    ${product.price}
                  </span>
                                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                    {discountPercentage}% OFF
                  </span>
                                </>
                            ) : (
                                <span className="text-3xl font-bold">${product.price}</span>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold">Product Details</h3>
                        <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-3">Select Color</h3>
                            <div className="flex gap-3">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                                            selectedColor === color
                                                ? 'ring-2 ring-offset-2 ring-black'
                                                : 'ring-0'
                                        }`}
                                        style={{ backgroundColor: color }}
                                        aria-label={`Select ${color} color`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Select Size</h3>
                            <div className="flex gap-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size as Size)}
                                        className={`px-4 py-2 border rounded-lg transition-all ${
                                            selectedSize === size
                                                ? 'border-black bg-black text-white'
                                                : 'border-gray-300 hover:border-black'
                                        }`}
                                    >
                                        {size.charAt(0).toUpperCase() + size.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Quantity</h3>
                            <div className="flex items-center gap-4 w-32">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black"
                                >
                                    -
                                </button>
                                <span className="flex-1 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button
                            className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                            onClick={handleAddToCart}
                        >
                            <ShoppingCart size={20} />
                            Add to Cart
                        </button>
                        <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
                            <Heart size={20} />
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}