import * as React from "react";
import { IconButtonProps } from "./types";

export const IconButton: React.FC<IconButtonProps> = ({ src, alt }) => {
    return (
        <button className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <img
                loading="lazy"
                src={src}
                alt={alt}
                className="object-contain shrink-0 w-6 aspect-square"
            />
        </button>
    );
};