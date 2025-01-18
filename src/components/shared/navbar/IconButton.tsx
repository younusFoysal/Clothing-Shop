import * as React from "react";
import { IconButtonProps } from "./types";
import {CgProfile} from "react-icons/cg";

export const IconButton: React.FC<IconButtonProps> = () => {
    return (
        <button className="p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <CgProfile className="w-6 h-6" />
        </button>
    );
};