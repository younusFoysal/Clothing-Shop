import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './fonts.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Modern E-commerce',
    description: 'Your one-stop shop for modern products',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <CartProvider>
            <Navbar />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
        </CartProvider>
        </body>
        </html>
    );
}