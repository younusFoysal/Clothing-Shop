import * as React from "react";
import { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, iconSrc }) => {
    return (
        <div className="hidden md:flex  overflow-hidden flex-wrap flex-1 shrink gap-3 items-start self-stretch px-4 py-3 my-auto text-base basis-0 bg-zinc-100 min-w-[240px] rounded-[62px] text-black text-opacity-40 max-md:max-w-full">
            <img
                loading="lazy"
                src={iconSrc}
                alt=""
                className="object-contain shrink-0 w-6 aspect-square"
            />
            <input
                type="search"
                placeholder={placeholder}
                className="bg-transparent border-none outline-none flex-1"
                aria-label={placeholder}
            />
        </div>
    );
};