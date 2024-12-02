export default function PrimaryButton({ text }: { text: string; }) {
    return (
        <button className="rounded-md bg-tertiary hover:bg-secondary transition duration-300 py-2 px-6 text-base font-medium">
            {text}
        </button>
    )
}