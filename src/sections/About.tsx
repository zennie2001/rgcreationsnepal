import PrimaryButton from "@/components/UI/PrimaryButton";
import SectionHeader from "../components/SectionHeader";
import SecondaryButton from "@/components/UI/SecondaryButton";
import aboutImageFirst from '@/assets/images/homepageAbout.png';
import aboutImageSecond from '@/assets/images/homepageAboutSecond.png';
import Image from "next/image";

export default function About() {
    return (
        <section className="lg:flex_center flex flex-col lg:flex-row font-jakarta  gap-8 w-full xl:p-24 lg:p-10 py-10 px-5 bg-[#F5FBFF]">
            <div className="flex flex-col md:w-1/2 w-full lg:gap-12 gap-6">
                <div className="flex flex-col gap-4 lg:text-start text-center">
                    <SectionHeader
                        smallTitle="About Us"
                        title="Our goal is to assist students for hassle free environment"
                        className="items-center"
                    />
                    <p className="text-text lg:text-start text-center">
                        Reaction Nepal is a government-registered interdisciplinary organization with its headquarters in Putalisadak, Kathmandu, Nepal. Since its establishment in 2005, it has mainly aimed at providing education services to all seeking their study and career prospects in and out of the country.
                    </p>
                </div>
                <div className="flex gap-4 md:justify-start justify-center">
                    <PrimaryButton
                        text="Know More"
                    />
                    <SecondaryButton
                        text="Get Started"
                    />
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-8 lg:w-1/2 w-full">
                <div className="flex_center lg:flex-col flex-row lg:w-1/2 w-full gap-5 ">
                    <div className="flex flex-col w-full bg-tertiary rounded-md lg:h-52 h-[265px] sm:p-6 p-3 text-primary">
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
                    <div className="flex_center w-full lg:h-48 h-[265px] rounded-md overflow-hidden">
                        <Image
                            src={aboutImageFirst}
                            alt="about-image"
                            className="size-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex_center lg:w-1/2 w-full lg:h-[416px] h-[200px] rounded-md overflow-hidden">
                    <Image src={aboutImageSecond} alt="about-image" className="size-full object-cover" />
                </div>
            </div>
        </section>
    )
}