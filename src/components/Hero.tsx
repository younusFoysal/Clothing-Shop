import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative h-[70vh] bg-cover bg-center" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8")'
        }}>
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-xl text-white">
                    <h1 className="text-5xl font-bold mb-4">New Collection</h1>
                    <p className="text-xl mb-8">Discover our latest arrivals and trending items</p>
                    <Link
                        href="/products"
                        className="inline-block bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    );
}