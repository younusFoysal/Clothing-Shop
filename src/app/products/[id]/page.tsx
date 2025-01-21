"use client";
import {products} from "@/data/products";
import {ShoppingCart, Star, StarHalf} from "lucide-react";
import Image from "next/image";
import {useCart} from "@/context/CartContext";
import {useState} from "react";
import {Size} from "@/types";
import {useParams} from "next/navigation";
import {FaCheck, FaMinus, FaPlus} from "react-icons/fa6";

export default function ProductPage() {
    const {id} = useParams();
    const product = products.find((p) => p.id === id) || products[0];
    const {addToCart} = useCart();
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState<Size>("medium");
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(product.image);
    const [zoomStyle, setZoomStyle] = useState({
        backgroundImage: `url(${mainImage})`,
        backgroundPosition: "center",
    });

    const discountPercentage = product.discountPrice
        ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
        : 0;

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setZoomStyle({
            backgroundImage: `url(${mainImage})`,
            backgroundPosition: `${x}% ${y}%`,
        });
    };

    return (
        <div className="container mx-auto px-4 py-8 pb-40">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Section: Image Gallery */}
                <div className="flex md:flex-row flex-col-reverse gap-4">
                    {/* Thumbnail Images */}
                    <div className="flex flex-row md:flex-col gap-3 justify-center md:justify-start">
                        {[product.image, product.image1, product.image2].map((img, index) => (
                            <div
                                key={index}
                                className={`w-[152px] h-[168px] border rounded-lg overflow-hidden cursor-pointer ${
                                    mainImage === img ? "ring-2 ring-black" : "ring-0"
                                }`}
                                onClick={() => setMainImage(img)}
                            >
                                <Image src={img} alt={`Thumbnail ${index + 1}`} width={152} height={168}
                                       className="object-cover w-[152px] h-[168px] object-center"/>
                            </div>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="relative aspect-square flex-1">
                        {/* For Desktop: Zoom effect */}
                        <div
                            className="hidden md:block group w-[444px] h-[530px] rounded-lg overflow-hidden"
                            onMouseMove={handleMouseMove}
                            style={{
                                backgroundImage: zoomStyle.backgroundImage,
                                backgroundSize: "200%",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: zoomStyle.backgroundPosition,
                            }}
                        >
                            <Image
                                src={mainImage}
                                alt={product.name}
                                width={444}
                                height={530}
                                className="object-cover rounded-lg group-hover:opacity-0 transition-opacity"
                            />
                        </div>

                        {/* For Mobile: Static image */}
                        <div className="block md:hidden w-full h-full relative  rounded-lg overflow-hidden">
                            <Image
                                src={mainImage}
                                alt={product.name}
                                fill
                                sizes="100vw"
                                priority
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Section: Product Details */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-2"
                            style={{fontFamily: 'IntegralCF, sans-serif'}}>{product.name}</h1>
                        <div className="flex items-center gap-1 mb-4">
                            {[...Array(Math.floor(product.rating))].map((_, i) => (
                                <Star key={i} size={20} fill="#FFC633" color="#FFC633"/>
                            ))}
                            {product.rating % 1 !== 0 && (
                                <StarHalf size={20} fill="#FFC633" color="#FFC633"/>
                            )}
                            <span className="ml-2 text-sm text-gray-600">{product.rating}/5</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="flex items-center gap-4">
                                {product.discountPrice ? (
                                    <>
                                        <span className="text-xl md:text-3xl font-bold">${product.discountPrice}</span>
                                        <span
                                            className="text-xl md:text-3xl font-bold text-gray-400 line-through">${product.price}</span>
                                        <span
                                            className="text-sm md:text-xl bg-red-100 text-red-600 px-4 py-1  rounded-full">-{discountPercentage}%</span>
                                    </>
                                ) : (
                                    <span className="text-xl md:text-3xl font-bold">${product.price}</span>
                                )}
                            </div>
                        </div>

                    </div>

                    <div className="space-y-4">
                        {/*<h3 className="font-semibold">Product Details</h3>*/}
                        <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
                    </div>

                    <hr className=" container mx-auto border border-gray-200"/>

                    <div className="space-y-4">
                        <div>
                            <h3 className=" text-gray-600 whitespace-pre-line mb-6">Select Colors</h3>
                            <div className="flex gap-3 mb-6">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-9 h-9 rounded-full  flex items-center justify-center transition-all  ${
                                            color.toLowerCase() === "#ffffff" || color.toLowerCase() === "white"
                                                ? "border-2 border-black" // Add black border for white color
                                                : ""
                                        }`}
                                        style={{backgroundColor: color}}
                                        aria-label={`Select ${color} color`}
                                    >
                                        {selectedColor === color && (
                                            <FaCheck
                                                className={`text-md ${
                                                    color.toLowerCase() === "#ffffff" || color.toLowerCase() === "white"
                                                        ? "text-black"  // Black tick for white color
                                                        : "text-white"  // White tick for other colors
                                                }`}

                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <hr className=" container mx-auto border border-gray-200"/>

                        <div>
                            <h3 className="text-gray-600 whitespace-pre-line mb-6">Choose Size</h3>
                            <div className="flex gap-3 mb-6">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size as Size)}
                                        className={`px-4 py-2 rounded-full transition-all ${
                                            selectedSize === size
                                                ? " bg-black text-white"
                                                : " bg-[#F0F0F0]"
                                        }`}
                                    >
                                        {size.charAt(0).toUpperCase() + size.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <hr className=" container mx-auto border border-gray-200"/>

                        <div className="flex gap-4 items-center justify-center pt-2 ">
                            {/*<h3 className="font-semibold mb-3">Quantity</h3>*/}
                            <div className="flex items-center w-44 px-4 py-2 bg-[#F0F0F0] rounded-full">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-8 h-8 rounded-full  flex items-center justify-center "
                                >
                                    <FaMinus />
                                </button>
                                <span className="flex-1 font-bold text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-8 h-8 rounded-full   flex items-center justify-center "
                                >
                                    <FaPlus />
                                </button>
                            </div>

                            <button
                                className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
                                onClick={handleAddToCart}
                            >
                                {/*<ShoppingCart size={20}/>*/}
                                Add to Cart
                            </button>
                        </div>


                    </div>

                    {/*<div>*/}
                    {/*    <button*/}
                    {/*        className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">*/}
                    {/*        <Heart size={20}/>*/}
                    {/*        Wishlist*/}
                    {/*    </button>*/}
                    {/*</div>*/}


                </div>
            </div>
        </div>
    );
}
