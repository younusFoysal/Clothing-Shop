import React from 'react';

import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import {topProducts} from "@/data/topProducts";
const featuredProducts = topProducts.slice(0, 4);

const TopSelling = () => {
    return (
        <section className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mt-16 mb-14 text-center "
                style={{fontFamily: 'IntegralCF, sans-serif'}}>TOP SELLING</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  gap-6">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
            <Link href="/products" className="flex justify-center items-center gap-8 group">
                <button
                    className="border border-gray-300 bg-white duration-300 group-hover:bg-black group-hover:shadow-xl group-hover:border-black font-medium py-4 px-14 rounded-full mt-8 mx-auto items-center w-full md:w-52">
                    <span className="font-medium duration-300 group-hover:text-white">View All</span>
                </button>
            </Link>

        </section>
    );
};

export default TopSelling;