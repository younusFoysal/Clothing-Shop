"use client"

import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from "@/components/categories";
import Sponsors from "@/components/shared/Sponsors";
import TopSelling from "@/components/TopSelling";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
      <div className="space-y-16">
        {/*<Hero />*/}
          <Sponsors/>
        <FeaturedProducts />
        <hr className=" container mx-auto border border-gray-200" />
        <TopSelling/>
        <Categories />
          <Testimonials/>
      </div>
  );
}