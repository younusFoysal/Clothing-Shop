import * as React from "react";
import { SubscribeButtonProps } from "./types";

export const SubscribeButton: React.FC<SubscribeButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="overflow-hidden gap-3 self-stretch px-4 py-3 mt-3.5 max-w-full font-medium text-black bg-white rounded-[62px] md:w-[349px]"
        >
            Subscribe to Newsletter
        </button>
    );
}