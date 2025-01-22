import React from 'react';
import {TestimonialProps} from "@/components/shared/testimonials/types";
import {StarRating} from "@/components/shared/testimonials/StarRating";
import {IoCheckmarkCircle} from "react-icons/io5";
import {BsThreeDots} from "react-icons/bs";

const ProductReviews = ({ author, isVerified, content, rating, date }: TestimonialProps) => {
    return (
        <div
            className="flex overflow-hidden justify-evenly h-60 gap-6 items-start rounded-3xl p-7 border border-solid border-black border-opacity-10 w-full">
            <div className="flex flex-1 shrink justify-evenly items-start w-full basis-0 min-w-[240px]">
                <div className="flex flex-col justify-evenly flex-1 shrink w-full basis-0 min-w-[240px]">
                    <div className="flex justify-between">
                        <div>
                            <StarRating count={rating}/>
                        </div>
                        <div>
                            <BsThreeDots className="text-xl opacity-60" />
                        </div>

                    </div>

                    <div className="flex flex-col justify-evenly mt-4 w-full">

                        <div className="flex gap-1 items-center self-start text-xl font-bold leading-none text-black">
                            <div className="font-semibold my-auto">{author}</div>
                            {isVerified && (
                                <IoCheckmarkCircle className="w-6 h-6 mr-2 text-[#01AB31]"/>
                            )}
                        </div>

                        <div className="mt-3 text-base font-normal leading-6 text-black text-opacity-60">
                            &#34;{content}”
                        </div>

                        <div className="mt-3 text-base font-medium leading-6 text-black text-opacity-70">
                            Posted on {date}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReviews;