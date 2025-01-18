import * as React from "react";
import { StarRatingProps } from "./types";
import {Star, StarHalf} from "lucide-react";
import {MdOutlineStarPurple500} from "react-icons/md";
import {LiaStarHalf} from "react-icons/lia";

export function StarRating({ count }: StarRatingProps) {
    return (
        <div className="flex gap-1.5 items-start self-start">

            <div className="flex items-center gap-1 ">
                {[...Array(Math.floor(count))].map((_, i) => (
                    <MdOutlineStarPurple500  key={i} size={25} fill="#FFC633" color="#FFC633"/>
                ))}
                {count % 1 !== 0 && (
                    <LiaStarHalf  size={24} fill="#FFC633" color="#FFC633"/>
                )}

            </div>
        </div>
    );
}