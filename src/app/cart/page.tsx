"use client"
import CartItem from '@/components/CartItem';
import {useCart} from '@/context/CartContext';
import {useEffect, useState} from 'react';
import {FiTag} from "react-icons/fi";
import {FaArrowRight} from "react-icons/fa6";

export default function CartPage() {
    const {items} = useCart();
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
        <div className="container mx-auto px-4 py-8 pb-20">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2  border rounded-2xl overflow-hidden">
                    {items.map((item) => (
                        <CartItem key={item.id} item={item}/>
                    ))}
                </div>

                <div className="bg-gray-50 p-6 h-fit border rounded-2xl">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span className="text-black/60">Subtotal</span>
                            <span className="font-bold text-lg">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-black/60">Discount (-{discountPercentage}%)</span>
                            <span className="font-bold text-red-500 text-lg">-${discount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2 pb-2">
                            <span className="text-black/60">Delivery Fee</span>
                            <span className="font-bold text-lg">${deliveryFee.toFixed(2)}</span>
                        </div>

                        <hr className="border-gray-300 mt-2 pt-2"/>

                        <div className="flex justify-between font-medium">
                            <span>Total</span>
                            <span className="font-bold text-xl">${grandTotal.toFixed(2)}</span>
                        </div>
                    </div>


                    <div className="flex items-center gap-2 pt-1 mb-6">

                        <div className="flex items-center bg-[#F0F0F0] rounded-full px-4  w-full max-w-md">
                            <FiTag className="text-gray-500 text-xl"/>
                            <input
                                type="text"
                                placeholder="Add promo code"
                                className="bg-transparent text-gray-500 border-0 placeholder-gray-500 focus:outline-none w-full"
                            />
                        </div>


                        <button className="bg-black text-white rounded-full px-6 py-2 font-medium">
                            Apply
                        </button>
                    </div>


                    <button className="w-full flex gap-2 justify-center items-center bg-black text-white py-3 rounded-full hover:bg-gray-800">
                        Go to Checkout <FaArrowRight  />
                    </button>
                </div>
            </div>
        </div>
    );
}
