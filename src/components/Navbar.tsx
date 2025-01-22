"use client"
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const { items } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

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
        <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm z-50' : 'bg-white'
        }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold">
                        STORE
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="hover:text-gray-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/products" className="hover:text-gray-600 transition-colors">
                            Products
                        </Link>
                        <Link href="/cart" className="hover:text-gray-600 transition-colors">
                            Cart
                        </Link>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Search size={20} />
                        </button>
                        <Link
                            href="/cart"
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                        >
                            <ShoppingCart size={20} />
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-x-0 bg-white transition-all duration-300 ${
                isMenuOpen
                    ? 'top-16 opacity-100 visible shadow-lg'
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
}