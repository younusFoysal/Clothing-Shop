"use client"
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
    const { items, total } = useCart();

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
                <p>Your cart is empty</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                    {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <div className="bg-gray-50 p-6 rounded-lg h-fit">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                    <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}