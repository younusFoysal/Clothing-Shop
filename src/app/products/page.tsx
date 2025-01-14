"use client"
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import { useState, useMemo } from 'react';


const clothTypes = ['T-Shirt', 'Shorts', 'Hoodie', 'Jeans'];
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

export default function ProductsPage() {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

    const toggleType = (type: string) => {
        setSelectedTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
    };

    const toggleColor = (color: string) => {
        setSelectedColors(prev =>
            prev.includes(color)
                ? prev.filter(c => c !== color)
                : [...prev, color]
        );
    };

    const toggleSize = (size: string) => {
        setSelectedSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
    };

    const toggleStyle = (style: string) => {
        setSelectedStyles(prev =>
            prev.includes(style)
                ? prev.filter(s => s !== style)
                : [...prev, style]
        );
    };

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // Filter by type
            if (selectedTypes.length > 0 && !selectedTypes.includes(product.type)) {
                return false;
            }

            // Filter by price range
            if (product.price < priceRange[0] || product.price > priceRange[1]) {
                return false;
            }

            // Filter by colors
            if (selectedColors.length > 0 && !product.colors.some(color => selectedColors.includes(color))) {
                return false;
            }

            // Filter by sizes
            if (selectedSizes.length > 0 && !product.sizes.some(size => selectedSizes.includes(size))) {
                return false;
            }

            // Filter by style
            if (selectedStyles.length > 0 && !selectedStyles.includes(product.style)) {
                return false;
            }

            return true;
        });
    }, [selectedTypes, priceRange, selectedColors, selectedSizes, selectedStyles]);


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Our Products</h1>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Filters Sidebar */}
                <div className="w-full md:w-64 space-y-6">
                    {/* Cloth Type */}
                    <div className="space-y-3">
                        <h3 className="font-semibold">Cloth Type</h3>
                        <div className="space-y-2">
                            {clothTypes.map(type => (
                                <label key={type} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedTypes.includes(type)}
                                        onChange={() => toggleType(type)}
                                        className="rounded border-gray-300 text-black focus:ring-black"
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-3">
                        <h3 className="font-semibold">Price Range</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <input
                                    type="number"
                                    value={priceRange[0]}
                                    onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    placeholder="Min"
                                />
                                <input
                                    type="number"
                                    value={priceRange[1]}
                                    onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    placeholder="Max"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Colors */}
                    <div className="space-y-3">
                        <h3 className="font-semibold">Colors</h3>
                        <div className="flex flex-wrap gap-2">
                            {colors.map(color => (
                                <button
                                    key={color}
                                    onClick={() => toggleColor(color)}
                                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                                        selectedColors.includes(color)
                                            ? 'ring-2 ring-offset-2 ring-black'
                                            : 'ring-0'
                                    }`}
                                    style={{ backgroundColor: color }}
                                    aria-label={`Select ${color} color`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className="space-y-3">
                        <h3 className="font-semibold">Sizes</h3>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => toggleSize(size)}
                                    className={`px-3 py-1 border rounded-lg text-sm transition-all ${
                                        selectedSizes.includes(size)
                                            ? 'border-black bg-black text-white'
                                            : 'border-gray-300 hover:border-black'
                                    }`}
                                >
                                    {size.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dress Style */}
                    <div className="space-y-3">
                        <h3 className="font-semibold">Dress Style</h3>
                        <div className="space-y-2">
                            {dressStyles.map(style => (
                                <label key={style} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedStyles.includes(style)}
                                        onChange={() => toggleStyle(style)}
                                        className="rounded border-gray-300 text-black focus:ring-black"
                                    />
                                    {style}
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
                        }}
                        className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition-colors mb-2"
                    >
                        Reset Filters
                    </button>
                </div>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="mb-4 text-gray-600">
                        {filteredProducts.length} products found
                    </div>
                    <ProductGrid products={filteredProducts} />
                </div>
            </div>
        </div>
    );
}