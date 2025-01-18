import * as React from "react";
import { EmailInput } from "./EmailInput";
import { SubscribeButton } from "./SubscribeButton";
import { SubscriptionFormProps } from "./types";

export const NewsletterSubscription: React.FC<SubscriptionFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email);
    };

    return (
        <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-16 py-9 bg-black rounded-3xl max-md:px-5">
            <div className="self-stretch my-auto text-4xl font-bold leading-10 text-white w-[551px] max-md:max-w-full">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col self-stretch my-auto text-base min-w-[240px] w-[349px]">
                <EmailInput value={email} onChange={setEmail} />
                <SubscribeButton onClick={() => onSubmit(email)} />
            </form>
        </div>
    );
}