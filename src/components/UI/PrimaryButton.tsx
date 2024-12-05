import { twMerge } from "tailwind-merge";

export default function PrimaryButton({ text, className }: { text: string; className?: string }) {
    return (
        <button className={twMerge("rounded-md bg-tertiary hover:bg-secondary transition duration-300 py-2 px-6 text-base font-medium text-primary", className)}>
            {text}
        </button>
    )
}