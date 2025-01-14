import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">STORE</h3>
                        <p className="text-gray-400">Your one-stop shop for modern products.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/" className="hover:text-white">Home</Link></li>
                            <li><Link href="/products" className="hover:text-white">Products</Link></li>
                            <li><Link href="/cart" className="hover:text-white">Cart</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-white">Shipping Policy</Link></li>
                            <li><Link href="#" className="hover:text-white">Returns & Exchanges</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-gray-400"><Facebook /></Link>
                            <Link href="#" className="hover:text-gray-400"><Instagram /></Link>
                            <Link href="#" className="hover:text-gray-400"><Twitter /></Link>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 STORE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}