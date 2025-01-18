import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './fonts.css';
import { CartProvider } from '@/context/CartContext';
import {Navigation} from "@/components/shared/navbar/Navigation";
import NavOffer from "@/components/shared/navbar/NavOffer";
import FooterMain from "@/components/Footer";

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
        <body className="satoshi">
        <CartProvider>

            <NavOffer />
            <Navigation/>
            {/*<Navbar />*/}
            <main className="min-h-screen pt-16 mb-20">{children}</main>
            <FooterMain />
        </CartProvider>
        </body>
        </html>
    );
}