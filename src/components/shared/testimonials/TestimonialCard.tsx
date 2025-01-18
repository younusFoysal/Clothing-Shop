import * as React from "react";
import { StarRating } from "./StarRating";
import { TestimonialProps } from "./types";
import {IoCheckmarkCircle} from "react-icons/io5";

export function TestimonialCard({ author, isVerified, content, rating }: TestimonialProps) {
    return (
        <div className="flex overflow-hidden h-64 m-2 mb-20 gap-6 items-start rounded-3xl p-7 border border-solid border-black border-opacity-10 w-full">
            <div className="flex flex-1 shrink justify-center items-start w-full basis-0 min-w-[240px]">
                <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
                    <StarRating count={rating} />
                    <div className="flex flex-col mt-4 w-full">
                        <div className="flex gap-1 items-center self-start text-xl font-bold leading-none text-black">
                            <div className="font-semibold my-auto">{author}</div>
                            {isVerified && (
                                <IoCheckmarkCircle className="w-6 h-6 mr-2 text-[#01AB31]" />
                            )}
                        </div>
                        <div className="mt-3 text-base font-normal leading-6 text-black text-opacity-60">
                            &#34;{content}”
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}