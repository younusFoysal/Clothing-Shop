import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        id: 'casual',
        name: 'Casual',
        image: '/categories/casual.png'
    },
    {
        id: 'formal',
        name: 'Formal',
        image: '/categories/formal.png'
    },
    {
        id: 'Party',
        name: 'Party',
        image: '/categories/party.png'
    },
    {
        id: 'gym',
        name: 'Gym',
        image: '/categories/gym.png'
    },
];

export default function Categories() {
    return (
        <section className="container mx-auto px-4 pt-10 pb-10">
            {/*<div className="grid md:grid-cols-3 gap-6">*/}
            {/*    {categories.map((category) => (*/}
            {/*        <Link*/}
            {/*            key={category.id}*/}
            {/*            href={`/products?category=${category.id}`}*/}
            {/*            className="relative aspect-[4/3] group"*/}
            {/*        >*/}
            {/*            <Image*/}
            {/*                src={category.image}*/}
            {/*                alt={category.name}*/}
            {/*                fill*/}
            {/*                className="object-cover rounded-lg"*/}
            {/*            />*/}
            {/*            <div*/}
            {/*                className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors rounded-lg"/>*/}
            {/*            <div className="absolute inset-0 flex items-center justify-center">*/}
            {/*                <h3 className="text-white text-2xl font-bold">{category.name}</h3>*/}
            {/*            </div>*/}
            {/*        </Link>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <div className="bg-gray-100 h-full rounded-3xl py-6 sm:py-8 lg:py-14">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12">
                        <div className="flex justify-center items-center">
                            <h2 className="text-2xl text-center font-bold text-black lg:text-4xl " style={{ fontFamily: 'IntegralCF, sans-serif' }}>BROWSE BY DRESS STYLE</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

                        <Link href="#"
                           className="group relative flex h-48 items-end overflow-hidden rounded-3xl bg-white   md:h-80">
                            <div className="absolute">
                                <Image
                                    src={categories[0].image}
                                    width={1000}
                                    height={1000}
                                    loading="lazy" alt="Photo by Minh Pham"
                                    className="relative top-6 -inset-16  h-full w-full border  object-cover object-right-top transition duration-200  -scale-x-[2.5] scale-y-[2.5] "/>

                            </div>



                            <span
                                className="relative bottom-60 left-4 ml-10 mb-3 inline-block font-bold text-black md:ml-5 text-3xl ">Casual</span>
                        </Link>

                        <Link href="#"
                           className="group relative flex h-48 items-end overflow-hidden rounded-3xl bg-white  md:col-span-2 md:h-80">
                            <div className="absolute">
                                <Image
                                    src={categories[1].image}
                                    width={1000}
                                    height={600}
                                    loading="lazy" alt="Photo by Magicle"
                                    className="relative  top-52  left-96 inset-0 h-full w-full object-cover object-top transition duration-200 scale-150 "/>

                            </div>




                            <span
                                className="relative bottom-60 left-4 ml-10 mb-3 inline-block font-bold text-black md:ml-5 text-3xl ">Formal</span>
                        </Link>

                        <Link href="#"
                           className="group relative flex h-48 items-end overflow-hidden rounded-3xl bg-white  md:col-span-2 md:h-80">
                            <Image
                                src={categories[2].image}
                                width={1000}
                                height={600}
                                loading="lazy" alt="Photo by Martin Sanchez"
                                className="absolute left-24 inset-0 h-full w-full object-cover  transition duration-200 scale-110 "/>

                            {/*<div*/}
                            {/*    className="pointer-events-none absolute inset-0 group-hover:bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">*/}
                            {/*</div>*/}

                            <span
                                className="relative bottom-60 left-6 ml-10 mb-3 inline-block font-bold text-black md:ml-5 text-3xl">Party</span>
                        </Link>

                        <Link href="#"
                           className="group relative flex h-48 items-end overflow-hidden rounded-3xl bg-white  md:h-80">
                            <Image
                                src={categories[3].image}
                                width={1000}
                                height={1000}
                                loading="lazy" alt="Photo by Lorenzo Herrera"
                                className="absolute top-10 bg-white left-16 inset-0 h-full w-full  object-cover object-right  transition duration-200 scale-125 hover:scale-150"/>



                            <span
                                className="relative bottom-60 left-4 ml-10 mb-3 inline-block font-bold text-black md:ml-5 text-3xl ">Gym</span>
                        </Link>

                    </div>
                </div>
            </div>

        </section>
    );
}