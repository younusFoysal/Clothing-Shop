"use client"
import * as React from "react";
import { NavItem } from "./NavItem";
import { IconButton } from "./IconButton";
import { SearchBar } from "./SearchBar";
import {useCart} from "@/context/CartContext";
import {useEffect, useState} from "react";
import {Menu, Search, ShoppingCart, X} from "lucide-react";
import Link from "next/link";


const navItems = [
    { label: "Shop", hasDropdown: true },
    { label: "On Sale", hasDropdown: false },
    { label: "New Arrivals", hasDropdown: false },
    { label: "Brands", hasDropdown: false }
];

export const Navigation: React.FC = () => {

    const { items } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const navigate =

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <nav className={`  flex container mx-auto py-6 flex-wrap gap-10 justify-center items-center 
        ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}>

            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
                {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>

            <Link href="/"  className="self-stretch items-start my-auto text-left text-3xl font-bold text-black" style={{fontFamily: 'IntegralCF, sans-serif'}}>
                SHOP.CO
            </Link>
            <div className=" hidden md:flex gap-6 items-center self-stretch my-auto text-base text-black min-w-[240px]">
                {navItems.map((item, index) => (
                    <NavItem key={index} {...item} />
                ))}
            </div>

            <SearchBar placeholder="Search for products..."/>

            <div className="flex gap-3.5 items-start self-stretch my-auto">

                <button className="p-2 md:hidden hover:bg-gray-100 rounded-full transition-colors">
                    <Search size={20}/>
                </button>

                <Link
                    href="/cart"
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                >
                    <ShoppingCart size={20}/>
                    {itemCount > 0 && (
                        <span
                            className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
                    )}
                </Link>
                {/*<IconButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/09c2e3728b2f0f7dddbac6f2c62c8e03db02aac0aa5ea5dcd0026fe3910c57f1?apiKey=2a8fe5aa0c1a42eb8be3c8ad2390b608&" alt="User account" />*/}
                <IconButton
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2f89bc29975d179540a0a77d4a46123ef4301f3712d8e4aa60395a3d5ca0f65?apiKey=2a8fe5aa0c1a42eb8be3c8ad2390b608&"
                    alt="Shopping cart"/>
            </div>


            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-x-0 bg-white transition-all duration-300 ${
                isMenuOpen
                    ? 'top-24 z-20 opacity-100 visible shadow-lg'
                    : 'top-14 opacity-0 invisible'
            }`}>
                <div className="container mx-auto px-4 py-4 space-y-4">
                    <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/products"
                        className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Products
                    </Link>
                    <Link
                        href="/cart"
                        className="block px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Cart
                    </Link>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 z-40"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ top: '64px' }}
                />
            )}

        </nav>
    );
};
