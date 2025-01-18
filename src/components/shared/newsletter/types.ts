export interface SubscriptionFormProps {
    onSubmit?: (email: string) => void;
}

export interface EmailInputProps {
    value?: string;
    onChange?: (value: string) => void;
}

export interface SubscribeButtonProps {
    onClick?: () => void;
}