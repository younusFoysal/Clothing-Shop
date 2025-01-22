import React from 'react';

import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import {topProducts} from "@/data/topProducts";
const featuredProducts = topProducts.slice(0, 4);

const YouMightlike = () => {
    return (
        <section className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mt-10 mb-10 text-center "
                style={{fontFamily: 'IntegralCF, sans-serif'}}>YOU MIGHT ALSO LIKE</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  gap-6">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>






        </section>
    );
};

export default YouMightlike;