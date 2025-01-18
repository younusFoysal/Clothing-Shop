import * as React from "react";
import { EmailInputProps } from "./types";

export const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
    return (
        <div className="flex overflow-hidden gap-3 items-start px-4 py-3 max-w-full bg-white rounded-[62px] text-black text-opacity-40 w-[349px]">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2f03936191f3af3d684591454051985eb354413c6b0268ef063c0cdcd4d89b8?placeholderIfAbsent=true&apiKey=2a8fe5aa0c1a42eb8be3c8ad2390b608"
                alt=""
                className="object-contain shrink-0 w-6 aspect-square"
            />
            <input
                type="email"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                className="w-full bg-transparent outline-none"
            />
        </div>
    );
}