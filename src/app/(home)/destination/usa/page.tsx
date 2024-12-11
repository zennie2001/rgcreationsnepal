import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import placeholderImage from '@/assets/images/aboutPageImage.png';
import Image from "next/image";
import uniImage from '@/assets/images/uniImage.jpg';
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Contact from "@/sections/Contact";

const benifits = [
    {
        pointNo: '01',
        title: 'Educational Excellence',
        description: `The USA is home to some of the world's top- ranking universities and colleges, offering a wide range of academic programs.Institutions like Harvard, MIT, Stanford, and many others are globally recognized for their research and educational excellence.`
    },
    {
        pointNo: '02',
        title: 'Diverse Academic Opportunities',
        description: `Students can choose from a diverse range of academic disciplines, including STEM (Science, Technology, Engineering, and Mathematics), business, arts, humanities, and social sciences. The flexibility of the U.S. education system allows students to explore various subjects.`
    },
    {
        pointNo: '03',
        title: 'Research Opportunities',
        description: `The U.S. is a leader in research and innovation. Many universities encourage students to engage in research projects, providing opportunities to work with leading experts in their respective fields`
    },
    {
        pointNo: '04',
        title: 'Cultural Diversity',
        description: `Studying in the USA offers exposure to a rich cultural tapestry. Students have the chance to interact with people from diverse backgrounds, fostering a global perspective and cultural understanding.`
    },
    {
        pointNo: '05',
        title: 'English Language Proficiency',
        description: `Studying in an English-speaking country enhances language skills. It's an excellent opportunity for non-native English speakers to improve their language proficiency, both academically and in daily life.`
    },
    {
        pointNo: '06',
        title: 'Internship and Job Opportunities',
        description: `The U.S. has a robust internship and job market. Many students find opportunities to work part-time during their studies and participate in internships, gaining valuable practical experience in their chosen fields.`
    },
]

const universities = [
    {
        image: uniImage,
        destination: 'Washington DC',
        unis: '7 Universities'
    },
    {
        image: uniImage,
        destination: 'New York City',
        unis: '6 Universities'
    },
    {
        image: uniImage,
        destination: 'San Francisco',
        unis: '5 Universities'
    },
]

const countries = [
    {
        title: 'USA',
        link: '/destination/usa'
    },
    {
        title: 'UK',
        link: '/destination/usa'
    },
    {
        title: 'Australia',
        link: '/destination/usa'
    },
    {
        title: 'Canada',
        link: '/destination/usa'
    },
    {
        title: 'Japan',
        link: '/destination/usa'
    },
    {
        title: 'Germany',
        link: '/destination/usa'
    },
    {
        title: 'Denmark',
        link: '/destination/usa'
    },
    {
        title: 'France',
        link: '/destination/usa'
    },
]

const appProcesses = [
    {
        pointNo: '01',
        title: 'Self-Evaluation and Study',
        description: `Choose the subject you want to study and the degree level you want (undergraduate, graduate, or doctoral).`
    },
    {
        pointNo: '02',
        title: 'Seek advice from an education counselor',
        description: `To talk about your educational history, professional objectives, and desire to study abroad, speak with an education counselor.`
    },
    {
        pointNo: '03',
        title: 'Proficiency in Language',
        description: `Determine whether language tests are necessary by evaluating your level of English competence.`
    },
    {
        pointNo: '04',
        title: 'Send in an application to universities',
        description: `Fill out online applications and send in the necessary paperwork for the institutions of your choice.`
    },
    {
        pointNo: '05',
        title: 'Application for a Visa',
        description: `Make sure you fulfill the prerequisites for a study permit in USA`
    },
    {
        pointNo: '06',
        title: 'Preparations Before Departure',
        description: `Find appropriate off-campus accommodations or make arrangements for on-campus living.`
    },
]

export default function USA() {
    return (
        <main className="w-full overflow-hidden">
            <PageHeader
                link="/destination/usa"
                title="USA"
            />
            <section className="w-full flex_center flex-col px-24 py-16 gap-12">
                <SectionHeader
                    smallTitle="Study in USA"
                    title="Studying in the USA might be closer than you think"
                    className="w-[60%] text-center"
                />
                <div className="flex_center flex-col gap-4 w-full">
                    <Image
                        src={placeholderImage}
                        alt="placeholder-image"
                        className="w-full h-[60vh] object-cover"
                    />
                    <div className="flex_center gap-8 w-full text-text">
                        <p className="flex w-1/2">
                            With over 1.1 million international students, the USA has emerged as the number one study destination over the years. One of the major reasons for students flocking to study in USA is the excellent reputation that US universities and degrees hold.
                        </p>
                        <p className="flex w-1/2">
                            Diversity is another distinguishing factor that attracts students to pursue higher studies in USA. The country also provides ample work opportunities to the students during and after completion of their academic courses.
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full flex_center flex-col px-24 py-16 gap-12 bg-[#F5FBFF]">
                <SectionHeader
                    smallTitle="Why USA"
                    title="Why study in The USA?"
                    className="items-start w-full"
                />
                <div className="grid grid-cols-3 w-full gap-8">
                    {
                        benifits.map((benifit, index) => {
                            return (
                                <div
                                    key={index}
                                    className="counselling card flex flex-col gap-4 p-6 col-span-1 bg-primary rounded-md"
                                >
                                    <div className="flex_center w-max py-2 px-4 bg-[#F5FBFF] text-base font-bold text-secondary rounded-md">
                                        {benifit.pointNo}
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-secondary font-bold">
                                            {benifit.title}
                                        </p>
                                        <p className="text-text text-sm">
                                            {benifit.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="w-full flex_center flex-col px-24 py-16 gap-12">
                <SectionHeader
                    smallTitle="Universities"
                    title="Top Study Destinations in the USA"
                    className="items-start w-full"
                />
                <div className="grid grid-cols-3 w-full gap-8 relative">
                    {
                        universities.map((uni, index) => {
                            return (
                                <div
                                    key={index}
                                    className="profilecard flex_center relative col-span-1 rounded-md overflow-hidden"
                                >
                                    <Image
                                        src={uni.image}
                                        alt="placeholder image"
                                        className="w-full h-[480px] object-cover"
                                    />
                                    <div className="absolute flex justify-between items-center w-[90%] gap-6 bottom-5">
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-2xl font-semibold text-primary">
                                                {uni.destination}
                                            </h4>
                                            <p className="text-primary">
                                                {uni.unis}
                                            </p>
                                        </div>
                                        <button
                                            className="size-9 bg-primary rounded-full p-2"
                                        >
                                            <IoIosArrowForward className="size-full text-secondary" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="w-full flex_center flex-col px-24 py-16 gap-12">
                <SectionHeader
                    smallTitle="Universities"
                    title="Studying & Living Costs in The USA"
                    className="items-start w-full"
                />
                <div className="flex flex-col w-full gap-8">
                    <div className="flex w-full flex-col gap-4">
                        <h4 className="text-secondary text-2xl font-semibold flex">
                            Tuition by Type of Institution
                        </h4>
                        <p className="text-text">
                            The tuition fees in the USA differ across the types of the institution. Usually, public universities charge lower tuition rates to domestic students, while international students have to pay out-of-state tuition, which is much more expensive.In contrast, private colleges charge higher fees, with the same amount of money collected from both domestic and foreign students. Community colleges are cost-effective educational alternatives, particularly in the first two years, before transferring to a four-year university.
                        </p>
                        <ul className="flex flex-col gap-5 text-text">
                            <li>
                                <span className="font-bold">
                                    Public Universities:
                                </span>
                                International students should expect to pay around $20,000-$40,000 a year in tuition fees.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Private Universities:
                                </span>
                                Tuition varies from $30,000 per year up to more than $60,000.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Community Colleges:
                                </span>
                                The tuition fees for international students range from $6,000 to $20,000 per year.
                            </li>
                        </ul>
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <h4 className="text-secondary text-2xl font-semibold flex">
                            Housing and Living expenses
                        </h4>
                        <p className="text-text">
                            The tuition fees in the USA differ across the types of the institution. Usually, public universities charge lower tuition rates to domestic students, while international students have to pay out-of-state tuition, which is much more expensive.In contrast, private colleges charge higher fees, with the same amount of money collected from both domestic and foreign students. Community colleges are cost-effective educational alternatives, particularly in the first two years, before transferring to a four-year university.
                        </p>
                        <ul className="flex flex-col gap-5 text-text">
                            <li>
                                <span className="font-bold">
                                    On-Campus:
                                </span>
                                Costs range from $8,000 to $12,000 annually.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Off-Campus:
                                </span>
                                Rents range between $500 and $1,500 per month, depending on location and living circumstances.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Community Colleges:
                                </span>
                                The tuition fees for international students range from $6,000 to $20,000 per year.
                            </li>
                        </ul>
                    </div>
                    <div className="flex w-full flex-col gap-4">
                        <h4 className="text-secondary text-2xl font-semibold flex">
                            Food, Transportation, and Utilities
                        </h4>
                        <p className="text-text">
                            The tuition fees in the USA differ across the types of the institution. Usually, public universities charge lower tuition rates to domestic students, while international students have to pay out-of-state tuition, which is much more expensive.In contrast, private colleges charge higher fees, with the same amount of money collected from both domestic and foreign students. Community colleges are cost-effective educational alternatives, particularly in the first two years, before transferring to a four-year university.
                        </p>
                        <ul className="flex flex-col gap-5 text-text">
                            <li>
                                <span className="font-bold">
                                    Food:
                                </span>
                                The monthly cost can vary from $250 to $500.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Transportation:
                                </span>
                                Transportation costs differ by location, with $50-$100 per month expected for monthly public transportation tickets.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Utilities:
                                </span>
                                Those who live in off-campus apartments might have to pay $100-$200 for their utilities monthly.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="w-full flex_center flex-col px-24 py-16 gap-12 bg-[#F5FBFF]">
                <SectionHeader
                    smallTitle="Application Process"
                    title="How to Apply to Study in the United States"
                    className="items-start w-full"
                />
                <div className="grid grid-cols-3 w-full gap-8">
                    {
                        appProcesses.map((process, index) => {
                            return (
                                <div
                                    key={index}
                                    className="counselling card flex flex-col gap-4 p-6 col-span-1 bg-primary rounded-md"
                                >
                                    <div className="flex_center w-max py-2 px-4 bg-[#F5FBFF] text-base font-bold text-secondary rounded-md">
                                        {process.pointNo}
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-secondary font-bold">
                                            {process.title}
                                        </p>
                                        <p className="text-text text-sm">
                                            {process.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="w-full flex_center flex-col px-24 py-16 gap-12">
                <SectionHeader
                    smallTitle="Destinations"
                    title="Make Your Choice for the Preferred Nation"
                />
                <div className="grid grid-cols-4 gap-8 w-full">
                    {
                        countries.map((country, index) => {
                            return (
                                <Link
                                    href={country.link}
                                    key={index}
                                    className="flex items-center gap-6 p-6 rounded-md border border-text/30 col-span-1 w-full"
                                >
                                    <div className="flex_center flag size-12 rounded-full border border-text">

                                    </div>
                                    <h5 className="text-xl font-bold">
                                        {country.title}
                                    </h5>
                                </Link>
                            )
                        })
                    }
                </div>
            </section>
            <Contact
                className="pb-16 pt-0"
            />
        </main>
    )
}