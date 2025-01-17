import * as React from "react";
import { StarRatingProps } from "./types";
import {Star, StarHalf} from "lucide-react";

export function StarRating({ count }: StarRatingProps) {
    return (
        <div className="flex gap-1.5 items-start self-start">

            <div className="flex items-center gap-1 ">
                {[...Array(Math.floor(count))].map((_, i) => (
                    <Star key={i} size={20} fill="#FFC633" color="#FFC633"/>
                ))}
                {count % 1 !== 0 && (
                    <StarHalf size={20} fill="#FFC633" color="#FFC633"/>
                )}

            </div>
        </div>
    );
}