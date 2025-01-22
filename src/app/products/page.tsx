"use client"
import ProductGrid from '@/components/ProductGrid';
import Pagination from '@/components/Pagination';
import {products} from '@/data/products';
import React, {useState, useMemo} from 'react';
import {ChevronDown} from 'lucide-react';
import {FaAngleRight, FaCheck} from "react-icons/fa6";
import {FaChevronUp} from "react-icons/fa";

const clothTypes = ['T-Shirt', 'Shorts', 'shirts', 'Hoodie', 'Jeans'];
const colors = [
    '#000000', // Black
    '#FFFFFF', // White
    '#FF0000', // Red
    '#0000FF', // Blue
    '#008000', // Green
    '#FFA500', // Orange
    '#800080', // Purple
    '#FFC0CB', // Pink
    '#A52A2A', // Brown
    '#808080', // Gray
];
const sizes = [
    'xx-small',
    'x-small',
    'small',
    'medium',
    'large',
    'x-large',
    'xx-large',
    '3x-large',
    '4x-large',
];
const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

type SortOption = 'popular' | 'price-high' | 'price-low';

const PRODUCTS_PER_PAGE = 9;

export default function ProductsPage() {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<SortOption>('price-high');
    const [currentPage, setCurrentPage] = useState(1);

    const toggleType = (type: string) => {
        setSelectedTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
        setCurrentPage(1); // Reset to first page when filter changes
    };

    const toggleColor = (color: string) => {
        setSelectedColors(prev =>
            prev.includes(color)
                ? prev.filter(c => c !== color)
                : [...prev, color]
        );
        setCurrentPage(1);
    };

    const toggleSize = (size: string) => {
        setSelectedSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
        setCurrentPage(1);
    };

    const toggleStyle = (style: string) => {
        setSelectedStyles(prev =>
            prev.includes(style)
                ? prev.filter(s => s !== style)
                : [...prev, style]
        );
        setCurrentPage(1);
    };

    const filteredProducts = useMemo(() => {
        const filtered = products.filter(product => {
            if (selectedTypes.length > 0 && !selectedTypes.includes(product.type)) {
                return false;
            }
            if (product.price < priceRange[0] || product.price > priceRange[1]) {
                return false;
            }
            if (selectedColors.length > 0 && !product.colors.some(color => selectedColors.includes(color))) {
                return false;
            }
            if (selectedSizes.length > 0 && !product.sizes.some(size => selectedSizes.includes(size))) {
                return false;
            }
            if (selectedStyles.length > 0 && !selectedStyles.includes(product.style)) {
                return false;
            }
            return true;
        });

        return filtered.sort((a, b) => {
            switch (sortBy) {
                case 'popular':
                    return b.rating - a.rating;
                case 'price-high':
                    return b.price - a.price;
                case 'price-low':
                    return a.price - b.price;
                default:
                    return 0;
            }
        });
    }, [selectedTypes, priceRange, selectedColors, selectedSizes, selectedStyles, sortBy]);

    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className="container mx-auto px-4 py-8 pb-24">
            {/*<h1 className="text-3xl font-bold mb-8">Our Products</h1>*/}
            <div className="flex flex-col md:flex-row gap-8">

                {/* Filters Sidebar */}
                <div className="w-full h-full md:w-64 space-y-6 px-5 py-6 border rounded-2xl">
                    {/* ... (previous filter code remains the same) ... */}
                    {/* Cloth Type */}
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <h3 className="font-semibold">Filters</h3>
                            <button className="opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M13.125 11.625V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V11.625C10.875 11.3266 10.9935 11.0405 11.2045 10.8295C11.4155 10.6185 11.7016 10.5 12 10.5C12.2984 10.5 12.5845 10.6185 12.7955 10.8295C13.0065 11.0405 13.125 11.3266 13.125 11.625ZM18.75 18C18.4516 18 18.1655 18.1185 17.9545 18.3295C17.7435 18.5405 17.625 18.8266 17.625 19.125V20.25C17.625 20.5484 17.7435 20.8345 17.9545 21.0455C18.1655 21.2565 18.4516 21.375 18.75 21.375C19.0484 21.375 19.3345 21.2565 19.5455 21.0455C19.7565 20.8345 19.875 20.5484 19.875 20.25V19.125C19.875 18.8266 19.7565 18.5405 19.5455 18.3295C19.3345 18.1185 19.0484 18 18.75 18ZM21 14.25H19.875V3.75C19.875 3.45163 19.7565 3.16548 19.5455 2.9545C19.3345 2.74353 19.0484 2.625 18.75 2.625C18.4516 2.625 18.1655 2.74353 17.9545 2.9545C17.7435 3.16548 17.625 3.45163 17.625 3.75V14.25H16.5C16.2016 14.25 15.9155 14.3685 15.7045 14.5795C15.4935 14.7905 15.375 15.0766 15.375 15.375C15.375 15.6734 15.4935 15.9595 15.7045 16.1705C15.9155 16.3815 16.2016 16.5 16.5 16.5H21C21.2984 16.5 21.5845 16.3815 21.7955 16.1705C22.0065 15.9595 22.125 15.6734 22.125 15.375C22.125 15.0766 22.0065 14.7905 21.7955 14.5795C21.5845 14.3685 21.2984 14.25 21 14.25ZM5.25 15C4.95163 15 4.66548 15.1185 4.4545 15.3295C4.24353 15.5405 4.125 15.8266 4.125 16.125V20.25C4.125 20.5484 4.24353 20.8345 4.4545 21.0455C4.66548 21.2565 4.95163 21.375 5.25 21.375C5.54837 21.375 5.83452 21.2565 6.0455 21.0455C6.25647 20.8345 6.375 20.5484 6.375 20.25V16.125C6.375 15.8266 6.25647 15.5405 6.0455 15.3295C5.83452 15.1185 5.54837 15 5.25 15ZM7.5 11.25H6.375V3.75C6.375 3.45163 6.25647 3.16548 6.0455 2.9545C5.83452 2.74353 5.54837 2.625 5.25 2.625C4.95163 2.625 4.66548 2.74353 4.4545 2.9545C4.24353 3.16548 4.125 3.45163 4.125 3.75V11.25H3C2.70163 11.25 2.41548 11.3685 2.2045 11.5795C1.99353 11.7905 1.875 12.0766 1.875 12.375C1.875 12.6734 1.99353 12.9595 2.2045 13.1705C2.41548 13.3815 2.70163 13.5 3 13.5H7.5C7.79837 13.5 8.08452 13.3815 8.2955 13.1705C8.50647 12.9595 8.625 12.6734 8.625 12.375C8.625 12.0766 8.50647 11.7905 8.2955 11.5795C8.08452 11.3685 7.79837 11.25 7.5 11.25ZM14.25 6.75H13.125V3.75C13.125 3.45163 13.0065 3.16548 12.7955 2.9545C12.5845 2.74353 12.2984 2.625 12 2.625C11.7016 2.625 11.4155 2.74353 11.2045 2.9545C10.9935 3.16548 10.875 3.45163 10.875 3.75V6.75H9.75C9.45163 6.75 9.16548 6.86853 8.9545 7.0795C8.74353 7.29048 8.625 7.57663 8.625 7.875C8.625 8.17337 8.74353 8.45952 8.9545 8.6705C9.16548 8.88147 9.45163 9 9.75 9H14.25C14.5484 9 14.8345 8.88147 15.0455 8.6705C15.2565 8.45952 15.375 8.17337 15.375 7.875C15.375 7.57663 15.2565 7.29048 15.0455 7.0795C14.8345 6.86853 14.5484 6.75 14.25 6.75Z"
                                        fill="black"/>
                                </svg>
                            </button>
                        </div>

                        <hr className="border-gray-300"/>

                        <div className="space-y-2">
                            {clothTypes.map(type => (
                                <label key={type} className="flex justify-between items-center gap-2">
                                    <input
                                        type="checkbox"
                                        hidden
                                        checked={selectedTypes.includes(type)}
                                        onChange={() => toggleType(type)}
                                        className="rounded border-gray-300 text-black hidden focus:ring-black"
                                    />
                                    <span className="text-black/60"> {type}</span> <FaAngleRight
                                    className="text-black/60"/>
                                </label>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-300"/>

                    {/* Price Range */}
                    <div className="space-y-3">
                        {/*<h3 className="font-semibold">Price</h3>*/}
                        <div className="flex justify-between">
                            <h3 className="font-semibold">Price</h3>
                            <button className="">
                                <FaChevronUp className="mr-1"/>
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <input
                                    type="number"
                                    value={priceRange[0]}
                                    onChange={e => {
                                        setPriceRange([Number(e.target.value), priceRange[1]]);
                                        setCurrentPage(1);
                                    }}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    placeholder="Min"
                                />
                                <input
                                    type="number"
                                    value={priceRange[1]}
                                    onChange={e => {
                                        setPriceRange([priceRange[0], Number(e.target.value)]);
                                        setCurrentPage(1);
                                    }}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    placeholder="Max"
                                />
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-300 "/>

                    {/* Colors */}
                    <div className="space-y-3">
                        {/*<h3 className="font-semibold">Colors</h3>*/}
                        <div className="flex justify-between">
                            <h3 className="font-semibold">Colors</h3>
                            <button className="mr-1">
                                <FaChevronUp/>
                            </button>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            {colors.map(color => (

                                <button
                                    key={color}
                                    onClick={() => toggleColor(color)}
                                    className={`w-9 h-9 rounded-full  flex items-center justify-center transition-all  ${
                                        color.toLowerCase() === "#ffffff" || color.toLowerCase() === "white"
                                            ? "border-2 border-black" // Add black border for white color
                                            : ""
                                    }`}
                                    style={{backgroundColor: color}}
                                    aria-label={`Select ${color} color`}
                                >
                                    {selectedColors.includes(color) && (
                                        <FaCheck
                                            className={`text-md ${
                                                color.toLowerCase() === "#ffffff" || color.toLowerCase() === "white"
                                                    ? "text-black"  // Black tick for white color
                                                    : "text-white"  // White tick for other colors
                                            }`}
                                        />
                                    )}

                                </button>

                                //         <button
                                //         key={color}
                                //     onClick={() => toggleColor(color)}
                                //     className={`w-8 h-8 rounded-full border-2 transition-all ${
                                //         selectedColors.includes(color)
                                //             ? 'ring-2 ring-offset-2 ring-black'
                                //             : 'ring-0'
                                //     }`}
                                //     style={{backgroundColor: color}}
                                //     aria-label={`Select ${color} color`}
                                // />
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-300 "/>

                    {/* Sizes */}
                    <div className="space-y-3">
                        {/*<h3 className="font-semibold">Sizes</h3>*/}
                        <div className="flex justify-between">
                            <h3 className="font-semibold">Sizes</h3>
                            <button className="">
                                <FaChevronUp className="mr-1"/>
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => toggleSize(size)}
                                    className={`px-3 py-2 border rounded-full text-sm transition-all ${
                                        selectedSizes.includes(size)
                                            ? 'border-black bg-black text-white'
                                            : 'border-0 bg-[#F0F0F0] hover:border-black text-black/60'
                                    }`}
                                >
                                    {size.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-300 "/>

                    {/* Dress Style */}
                    <div className="space-y-3">
                        {/*<h3 className="font-semibold">Dress Style</h3>*/}
                        <div className="flex justify-between">
                            <h3 className="font-semibold">Dress Style</h3>
                            <button className="">
                                <FaChevronUp className="mr-1"/>
                            </button>
                        </div>
                        <div className="space-y-2">
                            {dressStyles.map(style => (
                                <label key={style} className="flex justify-between items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedStyles.includes(style)}
                                        onChange={() => toggleStyle(style)}
                                        className="rounded hidden border-gray-300 text-black focus:ring-black"
                                    />
                                    <span className="text-black/60"> {style}</span> <FaAngleRight
                                    className="text-black/60"/>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Reset Filters Button */}
                    <button
                        onClick={() => {
                            setSelectedTypes([]);
                            setPriceRange([0, 1000]);
                            setSelectedColors([]);
                            setSelectedSizes([]);
                            setSelectedStyles([]);
                            setCurrentPage(1);
                        }}
                        className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-200 transition-colors mb-2"
                    >
                        Reset Filters
                    </button>
                </div>

                {/* Product Grid and Pagination */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">


                        <div className="flex items-center">
                            <span className="text-black items-center text-center  font-bold text-2xl">
                            Casual
                        </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600">
                                Showing 1-{filteredProducts.length} of 100 Products
                        </span>
                            <div className="md:relative md:block hidden">
                                <span>Sort by:  </span>

                                <select
                                    value={sortBy}
                                    onChange={(e) => {
                                        setSortBy(e.target.value as SortOption);
                                        setCurrentPage(1);
                                    }}
                                    className="appearance-none bg-white border-0 rounded-lg  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="price-low">Price: Low to High</option>
                                </select>
                                <ChevronDown
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
                                    size={16}/>
                            </div>
                            <button className="md:hidden  p-4 bg-[#F0F0F0] rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M13.125 11.625V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V11.625C10.875 11.3266 10.9935 11.0405 11.2045 10.8295C11.4155 10.6185 11.7016 10.5 12 10.5C12.2984 10.5 12.5845 10.6185 12.7955 10.8295C13.0065 11.0405 13.125 11.3266 13.125 11.625ZM18.75 18C18.4516 18 18.1655 18.1185 17.9545 18.3295C17.7435 18.5405 17.625 18.8266 17.625 19.125V20.25C17.625 20.5484 17.7435 20.8345 17.9545 21.0455C18.1655 21.2565 18.4516 21.375 18.75 21.375C19.0484 21.375 19.3345 21.2565 19.5455 21.0455C19.7565 20.8345 19.875 20.5484 19.875 20.25V19.125C19.875 18.8266 19.7565 18.5405 19.5455 18.3295C19.3345 18.1185 19.0484 18 18.75 18ZM21 14.25H19.875V3.75C19.875 3.45163 19.7565 3.16548 19.5455 2.9545C19.3345 2.74353 19.0484 2.625 18.75 2.625C18.4516 2.625 18.1655 2.74353 17.9545 2.9545C17.7435 3.16548 17.625 3.45163 17.625 3.75V14.25H16.5C16.2016 14.25 15.9155 14.3685 15.7045 14.5795C15.4935 14.7905 15.375 15.0766 15.375 15.375C15.375 15.6734 15.4935 15.9595 15.7045 16.1705C15.9155 16.3815 16.2016 16.5 16.5 16.5H21C21.2984 16.5 21.5845 16.3815 21.7955 16.1705C22.0065 15.9595 22.125 15.6734 22.125 15.375C22.125 15.0766 22.0065 14.7905 21.7955 14.5795C21.5845 14.3685 21.2984 14.25 21 14.25ZM5.25 15C4.95163 15 4.66548 15.1185 4.4545 15.3295C4.24353 15.5405 4.125 15.8266 4.125 16.125V20.25C4.125 20.5484 4.24353 20.8345 4.4545 21.0455C4.66548 21.2565 4.95163 21.375 5.25 21.375C5.54837 21.375 5.83452 21.2565 6.0455 21.0455C6.25647 20.8345 6.375 20.5484 6.375 20.25V16.125C6.375 15.8266 6.25647 15.5405 6.0455 15.3295C5.83452 15.1185 5.54837 15 5.25 15ZM7.5 11.25H6.375V3.75C6.375 3.45163 6.25647 3.16548 6.0455 2.9545C5.83452 2.74353 5.54837 2.625 5.25 2.625C4.95163 2.625 4.66548 2.74353 4.4545 2.9545C4.24353 3.16548 4.125 3.45163 4.125 3.75V11.25H3C2.70163 11.25 2.41548 11.3685 2.2045 11.5795C1.99353 11.7905 1.875 12.0766 1.875 12.375C1.875 12.6734 1.99353 12.9595 2.2045 13.1705C2.41548 13.3815 2.70163 13.5 3 13.5H7.5C7.79837 13.5 8.08452 13.3815 8.2955 13.1705C8.50647 12.9595 8.625 12.6734 8.625 12.375C8.625 12.0766 8.50647 11.7905 8.2955 11.5795C8.08452 11.3685 7.79837 11.25 7.5 11.25ZM14.25 6.75H13.125V3.75C13.125 3.45163 13.0065 3.16548 12.7955 2.9545C12.5845 2.74353 12.2984 2.625 12 2.625C11.7016 2.625 11.4155 2.74353 11.2045 2.9545C10.9935 3.16548 10.875 3.45163 10.875 3.75V6.75H9.75C9.45163 6.75 9.16548 6.86853 8.9545 7.0795C8.74353 7.29048 8.625 7.57663 8.625 7.875C8.625 8.17337 8.74353 8.45952 8.9545 8.6705C9.16548 8.88147 9.45163 9 9.75 9H14.25C14.5484 9 14.8345 8.88147 15.0455 8.6705C15.2565 8.45952 15.375 8.17337 15.375 7.875C15.375 7.57663 15.2565 7.29048 15.0455 7.0795C14.8345 6.86853 14.5484 6.75 14.25 6.75Z"
                                        fill="black"/>
                                </svg>
                            </button>


                        </div>


                    </div>

                    <ProductGrid products={paginatedProducts}/>

                    {totalPages > 1 && (
                        <div className="mt-8">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}