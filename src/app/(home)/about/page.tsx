import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import aboutImage from '@/assets/images/heroBackground.jpg';
import aboutSecondImage from '@/assets/images/aboutPageImage.png';
import Image from "next/image";
import Contact from "@/sections/Contact";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import profileImage from '@/assets/images/profileImage.jpg';
import { FaPlus } from "react-icons/fa";

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
            <section className="w-full flex_center flex-col gap-12 px-24 py-16 bg-[#F5FBFF]">
                <SectionHeader
                    smallTitle="History"
                    title="Over the Years"
                />
                <div className="flex_center w-full relative">
                    <div className="absolute flex h-0.5 w-full bg-secondary"></div>
                    <button className="absolute flex_center size-10 p-2 -top5 left-0 bg-secondary text-primary rounded-md z-10">
                        <IoIosArrowBack />
                    </button>
                    <button className="absolute flex_center size-10 p-2 -top5 right-0 bg-secondary text-primary rounded-md z-10">
                        <IoIosArrowForward />
                    </button>
                    <div className="flex_center gap-20 z-10">
                        <div className="flex_center rounded-full border-2 border-secondary bg-[#F5FBFF] text-secondary text-sm font-bold size-6"></div>
                        <div className="flex_center rounded-full border-2 border-secondary bg-[#F5FBFF] text-secondary text-sm font-bold size-6"></div>
                        <div className="flex_center rounded-full border-2 border-secondary bg-[#F5FBFF] text-secondary text-sm font-bold size-14">
                            2008
                        </div>
                        <div className="flex_center rounded-full bg-secondary size-36 text-primary text-[32px] font-semibold">
                            2009
                        </div>
                        <div className="flex_center rounded-full border-2 border-secondary bg-[#F5FBFF] text-secondary text-sm font-bold size-14">
                            2010
                        </div>
                        <div className="flex_center rounded-full border-2 border-secondary bg-[#F5FBFF] font-bold size-6"></div>
                        <div className="flex_center rounded-full border-2 border-secondary bg-[#F5FBFF] text-secondary text-sm font-bold size-6"></div>
                    </div>
                </div>
                <div className="flex_center flex-col w-[60%] gap-6">
                    <p className="w-full flex_center text-center text-text">
                        With introduction of TIER-4 pointbased system by UKBA, this year was significant for REACTION Nepal to make successful placement to over a dozen UK institutions, including private and government colleges and universities. As a result of properly- selected courses in accordance with the students&apos; respective desires into right colleges, as well as accurate visa applications, the success rate was incredible with the cent percent. Also, the number of test prep students, especially for IELTS at RN soared up this year, with average of 6 Band overal.
                    </p>
                    <p className="w-full flex_center text-center text-text">
                        Relatively, the students were a bit less for other destinations like USA and Australia but consideraly a good number as usual. This number included serious, academically-intact and financially abled candidates for whom the good institutions mattered, not the contries. So, basically the visa was not a bar as they deserved it for their further studies. We have been happy to be in their service.
                    </p>
                </div>
            </section>
            <section className="w-full flex_center flex-col px-24 py-16 gap-12 relative">
                <SectionHeader
                    smallTitle="Team Members"
                    title="Meet Our Team"
                />
                <div className="grid grid-cols-3 w-full gap-8 relative">
                    <div className="profilecard flex_center relative col-span-1 rounded-md overflow-hidden">
                        <Image
                            src={profileImage}
                            alt="profile image"
                            className="w-full h-[480px] object-cover"
                        />
                        <div className="absolute flex justify-between items-center w-[90%] gap-6 bottom-5">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-2xl font-semibold text-primary">
                                    Raju Prasad Khanal
                                </h4>
                                <p className="text-primary">
                                    CEO/ Chairperson
                                </p>
                            </div>
                            <button className="size-9 bg-primary rounded-full p-2">
                                <FaPlus className="size-full text-secondary" />
                            </button>
                        </div>
                    </div>
                    <div className="profilecard flex_center relative col-span-1 rounded-md overflow-hidden">
                        <Image
                            src={profileImage}
                            alt="profile image"
                            className="w-full h-[480px] object-cover"
                        />
                        <div className="absolute flex justify-between items-center w-[90%] gap-6 bottom-5">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-2xl font-semibold text-primary">
                                    Raju Prasad Khanal
                                </h4>
                                <p className="text-primary">
                                    CEO/ Chairperson
                                </p>
                            </div>
                            <button className="size-9 bg-primary rounded-full p-2">
                                <FaPlus className="size-full text-secondary" />
                            </button>
                        </div>
                    </div>
                    <div className="profilecard flex_center relative col-span-1 rounded-md overflow-hidden">
                        <Image
                            src={profileImage}
                            alt="profile image"
                            className="w-full h-[480px] object-cover"
                        />
                        <div className="absolute flex justify-between items-center w-[90%] gap-6 bottom-5">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-2xl font-semibold text-primary">
                                    Raju Prasad Khanal
                                </h4>
                                <p className="text-primary">
                                    CEO/ Chairperson
                                </p>
                            </div>
                            <button className="size-9 bg-primary rounded-full p-2">
                                <FaPlus className="size-full text-secondary" />
                            </button>
                        </div>
                    </div>
                    <button className="absolute flex_center size-10 p-2 bg-primary rounded-md top-1/2 -left-5 shadow-md">
                        <IoIosArrowBack className="size-full" />
                    </button>
                    <button className="absolute flex_center size-10 p-2 bg-primary rounded-md top-1/2 -right-5 shadow-md">
                        <IoIosArrowForward className="size-full" />
                    </button>
                </div>
            </section>
            <Contact className="pt-0 pb-16" />
        </main>
    )
}