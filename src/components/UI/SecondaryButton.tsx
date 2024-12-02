export default function SecondaryButton({ text }: { text: string; }) {
    return (
        <button className="rounded-md border border-tertiary text-tertiary hover:bg-tertiary hover:text-primary transition duration-300 py-2 px-6 text-base font-medium">
            {text}
        </button>
    )
}