import { Product } from '@/types';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }: { products: Product[] }) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}