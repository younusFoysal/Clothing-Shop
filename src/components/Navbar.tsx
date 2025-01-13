"use client"
import Link from 'next/link';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
    const { items } = useCart();
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="fixed top-0 w-full bg-white border-b z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-xl font-bold">
                        STORE
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="hover:text-gray-600">Home</Link>
                        <Link href="/products" className="hover:text-gray-600">Products</Link>
                        <Link href="/cart" className="hover:text-gray-600">Cart</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Search size={20} />
                        </button>
                        <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
                            <ShoppingCart size={20} />
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
                            )}
                        </Link>
                        <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}