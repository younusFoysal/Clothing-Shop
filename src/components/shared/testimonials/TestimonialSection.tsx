import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialSection() {
    return (
        <TestimonialCard
            author="Sarah M."
            isVerified={true}
            content="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
         date="August 17, 2023"
         rating={5}/>
    );
}