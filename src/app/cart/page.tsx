"use client"
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

export default function CartPage() {
    const { items } = useCart();
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(newTotal);
    }, [items]);

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
                <p>Your cart is empty</p>
            </div>
        );
    }
    console.log(items)

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = items.reduce((acc, item) => acc + (item.price - item.discountPrice) * item.quantity, 0);
    const discountPercentage = ((discount / subtotal) * 100).toFixed(2);
    const deliveryFee = subtotal > 100 ? 0 : 10;
    const grandTotal = subtotal - discount + deliveryFee;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2  border rounded-2xl overflow-hidden">
                    {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                <div className="bg-gray-50 p-6 h-fit border rounded-2xl">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount (-{discountPercentage}%)</span>
                            <span>-${discount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery Fee</span>
                            <span>${deliveryFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>${grandTotal.toFixed(2)}</span>
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
