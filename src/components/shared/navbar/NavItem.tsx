import * as React from "react";
import { NavItemProps } from "./types";
import {FaAngleDown} from "react-icons/fa6";

export const NavItem: React.FC<NavItemProps> = ({ label, hasDropdown }) => {
    return (
        <div className="flex gap-1 items-center self-stretch my-auto whitespace-nowrap">
            <div className="self-stretch my-auto">{label}</div>
            {hasDropdown && (
                <FaAngleDown />
            )}
        </div>
    );
};