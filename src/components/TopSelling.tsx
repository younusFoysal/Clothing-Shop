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

            <div className="flex justify-center items-center">
                <Link href="/products"
                      className="border text-center border-gray-300 bg-white duration-300 hover:bg-black  hover:text-white hover:shadow-xl hover:border-black font-medium py-4 px-14 rounded-full mt-9 mx-auto items-center w-full min-w-[218px] md:w-52">
                    <span className="satoshi-regular duration-300 ">View All</span>
                </Link>

            </div>




        </section>
    );
};

export default TopSelling;