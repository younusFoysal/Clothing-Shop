"use client"
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from "@/components/categories";


export default function Home() {
  return (
      <div className="space-y-16">
        <Hero />
        <FeaturedProducts />
        <Categories />
      </div>
  );
}