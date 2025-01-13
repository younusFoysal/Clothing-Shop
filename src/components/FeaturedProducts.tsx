import ProductCard from './ProductCard';
import { products } from '@/data/products';

export default function FeaturedProducts() {
    const featuredProducts = products.slice(0, 4);

    return (
        <section className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}