import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
    item: {
        id: string;
        name: string;
        price: number;
        image: string;
        quantity: number;
    };
}

export default function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div className="flex gap-4 p-4 bg-white rounded-lg">
            <div className="relative w-24 aspect-square">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            <div className="flex-1">
                <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    <button
                        className="p-1 hover:bg-gray-100 rounded-full"
                        onClick={() => removeFromCart(item.id)}
                    >
                        <X size={20} />
                    </button>
                </div>
                <p className="text-gray-600 mb-4">${item.price}</p>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <button
                            className="p-1 hover:bg-gray-100 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                            <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                            className="p-1 hover:bg-gray-100 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                            <Plus size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}