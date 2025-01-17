import * as React from "react";
import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({ label, hasDropdown }) => {
    return (
        <div className="flex gap-1 items-center self-stretch my-auto whitespace-nowrap">
            <div className="self-stretch my-auto">{label}</div>
            {hasDropdown && (
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/730648f7b97d56078e844c5822643c47c788fdcf1402f612bca91f68e51fac38?apiKey=2a8fe5aa0c1a42eb8be3c8ad2390b608&"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
            )}
        </div>
    );
};