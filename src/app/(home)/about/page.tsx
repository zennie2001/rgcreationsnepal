import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import aboutImage from '@/assets/images/heroBackground.jpg';
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="w-full overflow-hidden">
            <PageHeader
                title="About Us"
                link="/about"
            />
            <section className="flex_center flex-col w-full px-24 py-16 gap-16">
                <div className="flex items-center gap-16 w-full">
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
                    </div>
                    <div className="flex gap-8 w-1/2 h-80 rounded-md overflow-hidden">
                        <Image
                            src={aboutImage}
                            alt="image"
                            className="size-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex_center w-full gap-8">
                    <div className="flex items-center p-12 gap-8 bg-[#F5FBFF] w-1/2 rounded-md">
                        <p className="text-4xl text-tertiary font-semibold">
                            20K +
                        </p>
                        <div className="flex flex-col gap-3">
                            <p className="text-2xl font-semibold">
                                Satisfied Customers
                            </p>
                            <p className="text-text text-sm">
                                Trusted by 20K+ people all around the world
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center p-12 gap-8 bg-[#FFBF1C]/10 w-1/2 rounded-md">
                        <p className="text-4xl text-quaternary font-semibold">
                            15 +
                        </p>
                        <div className="flex flex-col gap-3">
                            <p className="text-2xl font-semibold">
                                Years of Experience
                            </p>
                            <p className="text-text text-sm">
                                Experience of over 15 years and counting
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}