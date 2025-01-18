import ProductCard from './ProductCard';
import { products } from '@/data/products';
import Link from "next/link";
import React from "react";

export default function FeaturedProducts() {
    const featuredProducts = products.slice(0, 4);

    return (
        <section className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mt-16 mb-14 text-center "
                style={{fontFamily: 'IntegralCF, sans-serif'}}>NEW ARRIVALS</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  gap-6">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
            <div className="flex justify-center items-center">
                <Link href="/products"
                      className="border text-center border-gray-300 bg-white duration-300 hover:bg-black  hover:text-white hover:shadow-xl hover:border-black font-medium py-4 px-14 rounded-full mt-9 mx-auto items-center w-full min-w-64 md:w-64 ">
                    <span className="satoshi-regular text-md duration-300 ">View All</span>
                </Link>

            </div>

        </section>
    );
}