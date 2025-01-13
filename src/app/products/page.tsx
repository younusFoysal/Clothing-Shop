import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Our Products</h1>
            <ProductGrid products={products} />
        </div>
    );
}