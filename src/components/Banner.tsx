import Image from "next/image";
import homeImage from "../../public/HomeBanner2.png";

const HeroBanner = () => {
    return (
        <div className="bg-[#F2F0F1] mb-20 md:mb-0">
            <div className="container mx-auto h-auto lg:h-[663px] px-4">
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                    {/* Left Section */}
                    <div className="py-6 lg:w-1/2  md:text-center lg:text-left space-y-6">
                        <div className="px-6 lg:px-12 py-4 lg:py-16">
                            <h1
                                className="text-4xl sm:text-4xl lg:text-6xl font-bold text-black"
                                style={{ fontFamily: "IntegralCF, sans-serif" }}
                            >
                                Find Clothes <br /> That Matches Your Style
                            </h1>
                            <p className="text-gray-600 text-base sm:text-lg mt-4">
                                Browse through our diverse range of meticulously crafted
                                garments, designed to bring out your individuality and cater to
                                your sense of style.
                            </p>
                            <button className="px-6 py-3  mt-6 w-full md:w-[210px] text-base sm:text-lg font-medium text-white bg-black rounded-full hover:bg-gray-800 transition">
                                Shop Now
                            </button>
                            {/* Statistics Section */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                                        200+
                                    </h2>
                                    <p className="text-gray-600">International Brands</p>
                                </div>

                                <div className="w-px bg-gray-300 h-auto hidden sm:block"></div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-black">
                                        2,000+
                                    </h2>
                                    <p className="text-gray-600">High-Quality Products</p>
                                </div>

                                <div className="w-px bg-gray-300 h-auto hidden sm:block"></div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-black">
                                        30,000+
                                    </h2>
                                    <p className="text-gray-600">Happy Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[663px] mt-12 md:mt-0">
                        <div className="absolute block">
                            <div className="absolute top-24 -right-20 md:top-72 md:-right-20 z-20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="56"
                                    height="56"
                                    viewBox="0 0 56 56"
                                    fill="none"
                                >
                                    <path
                                        d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div className="absolute -top-10 left-80 md:top-20 md:left-[500px] z-20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="104"
                                    height="104"
                                    viewBox="0 0 104 104"
                                    fill="none"
                                >
                                    <path
                                        d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>
                        <Image
                            height={1000}
                            width={1000}
                            src={homeImage}
                            alt="Fashion Banner"
                            className="w-full h-full object-cover scale-[1.4] md:scale-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
