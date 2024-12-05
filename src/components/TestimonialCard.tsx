import { GoStarFill } from "react-icons/go";
import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialCard() {
    return (
        <div className="testimonialcard flex flex-col gap-6 p-6 bg-primary rounded-md w-[608px] h-full border border-tertiary">
            <ImQuotesLeft className="size-12" />
            <p className="text-text">
                “I was extremely weak in English and spoilt my IELTS Center, I came to spot my vulnerability on my IELTS preparation with Raju Sir and within just 3 months, I was able to cross the limit of overall band score 6 which was sufficient for my admission in a reputed college in Australia.”
            </p>
            <div className="NAME flex w-full gap-3">
                <div className="image size-12 rounded-full overflow-hidden bg-text">
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-medium">
                        Mrs. Anjana Tamang
                    </p>
                    <div className="flex gap-1">
                        <GoStarFill className="text-quaternary" />
                        <GoStarFill className="text-quaternary" />
                        <GoStarFill className="text-quaternary" />
                        <GoStarFill className="text-quaternary" />
                        <GoStarFill className="text-quaternary" />
                    </div>
                </div>
            </div>
        </div>
    )
}