import * as React from "react";
import { FooterLinkGroup } from "./FooterLinkGroup";

export const Footer: React.FC = () => {
    const footerGroups = [
        {
            title: "Company",
            links: ["About", "Features", "Works", "Career"]
        },
        {
            title: "Help",
            links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]
        },
        {
            title: "FAQ",
            links: ["Account", "Manage Deliveries", "Orders", "Payments"]
        },
        {
            title: "Resources",
            links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"]
        }
    ];

    return (
        <div className="flex flex-wrap gap-10 justify-between items-start">
            <div className="flex flex-col min-w-[240px] w-[248px]">
                <div className="flex flex-col max-w-full w-[248px]">
                    <div className="text-4xl font-bold text-black" style={{fontFamily: 'IntegralCF, sans-serif'}}>SHOP.CO</div>
                    <div className="mt-6 text-sm font-normal leading-6 text-black text-opacity-60">
                        We have clothes that suits your style and which you're proud to
                        wear. From women to men.
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea93c2d0568535bffae9b91dd019000c3123470b3647e627e9d9b8083ebe4e24?placeholderIfAbsent=true&apiKey=2a8fe5aa0c1a42eb8be3c8ad2390b608"
                    alt="Social media links"
                    className="object-contain mt-9 max-w-full aspect-[5.29] w-[148px]"
                />
            </div>

            {footerGroups.map((group, index) => (
                <FooterLinkGroup
                    key={index}
                    title={group.title}
                    links={group.links}
                />
            ))}
        </div>
    );
};
