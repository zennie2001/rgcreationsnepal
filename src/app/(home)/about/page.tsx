import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import aboutImage from '@/assets/images/heroBackground.jpg';
import aboutSecondImage from '@/assets/images/aboutPageImage.png';
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
            <div className="image flex_center h-[80vh] w-full relative">
                <Image
                    src={aboutSecondImage}
                    alt="image"
                    className="size-full object-cover"
                />
                <div className="absolute bottom-0 flex_center w-full px-24">
                    <div className="flex w-full h-16 bg-primary">

                    </div>
                </div>
            </div>
            <section className="w-full flex_center px-24">
                <div className="flex_center flex-col gap-16 pb-16 w-full">
                    <div className="flex flex-col w-full px-12 gap-4">
                        <h2 className="text-[40px] font-semibold text-secondary">
                            Our Mission
                        </h2>
                        <div className="w-full flex gap-8">
                            <p className="text-text w-1/2">
                                It was established by the noble efforts and endeavors of a group of dedicated and qualified professionals with diverse academic expertise in the fields of applied education, science, and technology, with the sole objective of providing the student community with the most appropriate training and educational opportunities aboard. REACTION Nepal, with its team of experienced professionals and academics, provides counseling services for those students who wish to pursue their further studies abroad in well-reputed colleges, institutions, and universities in different countries on all continents, such as Asia-Pacific, Australia, Europe, and North America.
                            </p>
                            <p className="text-text w-1/2">
                                REACTION Nepal, with its professionalized service in the sector of international educational counseling, boasts of its reputation, acquired within a very short span of time. It is probably the best choice for promising students aspiring to achieve success in life. A considerable number of our students have already been attending some of the most well-reputed colleges and universities abroad in pursuit of shaping their futures and careers.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full px-12 gap-4">
                        <h2 className="text-[40px] font-semibold text-secondary">
                            Our Vision
                        </h2>
                        <div className="w-full flex gap-8">
                            <p className="text-text w-1/2">
                                REACTION Nepal, with its professionalized service in the sector of international educational counseling, boasts of its reputation, acquired within a very short span of time. It is probably the best choice for promising students aspiring to achieve success in life. A considerable number of our students have already been attending some of the most well-reputed colleges and universities abroad in pursuit of shaping their futures and careers.
                            </p>
                            <p className="text-text w-1/2">
                                Reaction Nepal is a government-registered interdisciplinary organization with its headquarters in Putalisadak, Kathmandu, Nepal. Since its establishment in 2005, it has mainly aimed at providing education services to all seeking their study and career prospects in and out of the country.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}