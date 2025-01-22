import * as React from "react";
import { SearchBarProps } from "./types";
import {Search} from "lucide-react";

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
    return (
        <div className="hidden md:flex  overflow-hidden flex-wrap justify-center items-center flex-1 shrink gap-3 self-stretch px-4 py-1 my-auto text-base basis-0 bg-zinc-100 min-w-[240px] rounded-[62px] text-black text-opacity-40 max-md:max-w-full">
            <div>
                <Search size={24}/>
            </div>
            <input
                type="search"
                placeholder={placeholder}
                className="bg-transparent border-0 outline-none ring-0 flex-1 focus:ring-0 "
                aria-label={placeholder}
            />
        </div>
    );
};