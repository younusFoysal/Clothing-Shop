// components/TabReviews.tsx
import React, { useState } from "react";
import ReviewList from "./ReviewList";
import Faq from "@/components/Faq";

type TabReviewsProps = {
    productdes: string;
};

const TabReviews = ({productdes} : TabReviewsProps) => {
    const [activeTab, setActiveTab] = useState("Rating & Reviews");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };



    return (
        <div className="p-6 mt-6">
            <div className="grid grid-cols-3 justify-evenly items-center  border-b mb-">
                {[
                    "Product Details",
                    "Rating & Reviews",
                    "FAQs"
                ].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`px-4 py-2 font-semibold text-sm md:text-xl border-b-2 ${
                            activeTab === tab ? "border-black text-black" : "border-transparent text-gray-500"
                        } hover:text-black`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === "Product Details" && (
                <div className="text-gray-700 p-6">
                    <div>
                        <h2 className="text-2xl font-bold text-black mb-8">Product Description</h2>
                    </div>
                    {productdes}</div>
            )}
            {activeTab === "Rating & Reviews" &&


                <ReviewList/>

            }

            {activeTab === "FAQs" && (
                <div className="text-gray-700"><Faq/>.</div>
            )}
        </div>
    );
};

export default TabReviews;
