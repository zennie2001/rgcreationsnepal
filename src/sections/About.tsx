import PrimaryButton from "@/components/UI/PrimaryButton";
import SectionHeader from "./SectionHeader";
import SecondaryButton from "@/components/UI/SecondaryButton";
import aboutImageFirst from '@/assets/images/homepageAbout.png';
import aboutImageSecond from '@/assets/images/homepageAboutSecond.png';
import Image from "next/image";

export default function About() {
    return (
        <section className="flex_center gap-8 w-full p-24 bg-[#F5FBFF]">
            <div className="flex flex-col w-1/2 gap-12">
                <div className="flex flex-col gap-4">
                    <SectionHeader
                        smallTitle="About Us"
                        title="Our goal is to assist students for hassle free environment"
                        className="items-start"
                    />
                    <p className="text-text text-justify">
                        Reaction Nepal is a government-registered interdisciplinary organization with its headquarters in Putalisadak, Kathmandu, Nepal. Since its establishment in 2005, it has mainly aimed at providing education services to all seeking their study and career prospects in and out of the country.
                    </p>
                </div>
                <div className="flex gap-4">
                    <PrimaryButton
                        text="Know More"
                    />
                    <SecondaryButton
                        text="Get Started"
                    />
                </div>
            </div>
            <div className="flex gap-8 w-1/2">
                <div className="flex_center flex-col w-1/2 gap-8">
                    <div className="flex flex-col w-full bg-tertiary rounded-md p-6 text-primary">
                        <p className="text-[40px]">
                            10+
                        </p>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl">
                                Years of Experience
                            </p>
                            <p>
                                Our vision is to provide aspirant individual with solution.
                            </p>
                        </div>
                    </div>
                    <div className="flex_center w-full h-48 rounded-md overflow-hidden">
                        <Image
                            src={aboutImageFirst}
                            alt="about-image"
                            className="size-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex_center w-1/2 h-[416px] rounded-md overflow-hidden">
                    <Image src={aboutImageSecond} alt="about-image" className="size-full object-cover" />
                </div>
            </div>
        </section>
    )
}