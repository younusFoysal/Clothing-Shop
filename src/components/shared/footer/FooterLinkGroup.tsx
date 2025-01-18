import * as React from "react";
import { FooterLinkGroupProps } from "./types";

export const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => {
    return (
        <div className="flex flex-col text-base">
            <div className="font-medium satoshi-medium leading-none text-black uppercase tracking-[3px]">
                {title}
            </div>
            <div className="mt-7 satoshi-regular leading-5 text-black text-opacity-60">
                {links.map((link, index) => (
                    <React.Fragment key={index}>
                        {link}
                        <br />
                        <br />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};