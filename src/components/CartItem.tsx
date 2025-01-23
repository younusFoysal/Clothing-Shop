import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import namer from 'color-namer';
import {FaMinus, FaPlus} from "react-icons/fa6";
import {RiDeleteBinFill} from "react-icons/ri";

interface CartItemProps {
    item: {
        id: string;
        name: string;
        price: number;
        image: string;
        quantity: number;
        selectedColor: string;
        selectedSize: string;
    };
}

export default function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeFromCart } = useCart();

    const getColorName = (hex: string) => {
        const namedColor = namer(hex);
        return namedColor.roygbiv[0]?.name || hex;
    };

    return (
        <div className="border-b-2 mx-4">
            <div className="flex gap-4 py-4 bg-white  rounded-tl-xl rounded-tr-xl  rounded-lg overflow-hidden">
                <div className="relative h-[124px] w-[124px] aspect-square">
                    <Image
                        src={item.image}
                        alt={item.name}
                        height={124}
                        width={124}
                        className="object-cover object-center h-[124px] w-[124px] rounded-lg"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between">
                        <h3 className="font-semibold">{item.name}</h3>
                        <button
                            className="p-1 hover:bg-gray-100 rounded-full"
                            onClick={() => removeFromCart(item.id)}
                        >
                            <RiDeleteBinFill className="text-red-500" size={25}/>
                        </button>
                    </div>

                    <div>
                        <h3 className="font-light"> <span className="font-medium"> Size:   </span> {item.selectedSize.charAt(0).toUpperCase() + item.selectedSize.slice(1)}</h3>
                        <h3 className="font-light"> <span className="font-medium"> Color:   </span>  {getColorName(item.selectedColor).charAt(0).toUpperCase() + getColorName(item.selectedColor).slice(1)}
                        </h3>

                    </div>

                    <div className="flex justify-between">
                        <div>
                            <p className="text-black text-xl md:text-2xl font-bold mt-2">${item.price}</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-4">

                                <div className="flex items-center w-44 px-4 py-2 bg-[#F0F0F0] rounded-full">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="w-8 h-8 rounded-full  flex items-center justify-center "
                                    >
                                        <FaMinus/>
                                    </button>
                                    <span className="flex-1 font-bold text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="w-8 h-8 rounded-full   flex items-center justify-center "
                                    >
                                        <FaPlus/>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    );
}