"use client"

import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from "@/components/categories";
import Sponsors from "@/components/shared/Sponsors";
import TopSelling from "@/components/TopSelling";
import Testimonials from "@/components/Testimonials";
import HeroBanner from "@/components/Banner";


export default function Home() {
  return (
      <div className="">
        {/*<Hero />*/}
          <HeroBanner/>
          <Sponsors/>
        <FeaturedProducts />
        <hr className=" container mx-auto mt-16 border border-gray-200" />
        <TopSelling/>
        <Categories />
          <Testimonials/>
      </div>
  );
}