import * as React from "react";
import { StarRating } from "./StarRating";
import { TestimonialProps } from "./types";

export function TestimonialCard({ author, isVerified, content, rating }: TestimonialProps) {
    return (
        <div className="flex overflow-hidden h-64 m-2 mb-20 gap-6 items-start rounded-3xl p-7 border border-solid border-black border-opacity-10 w-full">
            <div className="flex flex-1 shrink justify-center items-start w-full basis-0 min-w-[240px]">
                <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
                    <StarRating count={rating} />
                    <div className="flex flex-col mt-4 w-full">
                        <div className="flex gap-1 items-center self-start text-xl font-bold leading-none text-black">
                            <div className="self-stretch my-auto">{author}</div>
                            {isVerified && (
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c5308fcbc5abfa01907dccc29a424cc4bdeaf5949d63b6bd5efd7f2b5fcad0c?placeholderIfAbsent=true&apiKey=2a8fe5aa0c1a42eb8be3c8ad2390b608"
                                    alt="Verified user badge"
                                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                            )}
                        </div>
                        <div className="mt-3 text-base leading-6 text-black text-opacity-60">
                            "{content}”
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}