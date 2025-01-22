"use client"
import * as React from "react";
import { EmailInput } from "./EmailInput";
import { SubscribeButton } from "./SubscribeButton";
import { SubscriptionFormProps } from "./types";

export const NewsletterSubscription: React.FC<SubscriptionFormProps> = () => {
    const [email, setEmail] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="flex overflow-hidden flex-wrap gap-10 container mx-auto justify-between items-center px-16 py-9 bg-black rounded-3xl max-md:px-5">
            <div className="self-stretch my-auto text-4xl font-bold leading-10 text-white w-[551px] max-md:max-w-full" style={{fontFamily: 'IntegralCF, sans-serif'}}>
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col self-stretch my-auto text-base md:min-w-[240px] w-full md:w-[349px]">
                <EmailInput value={email} onChange={setEmail} />
                <SubscribeButton />
            </form>
        </div>
    );
}