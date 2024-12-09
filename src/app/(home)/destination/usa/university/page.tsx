"use client";

import PageHeader from "@/components/PageHeader";
import uniImage from '@/assets/images/uniImage.jpg';
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

const universities = [
    {
        location: 'washington',
        image: uniImage,
        uniName: 'Arizona State University'
    },
    {
        location: 'washington',
        image: uniImage,
        uniName: 'Eastern Michigan University'
    },
    {
        location: 'washington',
        image: uniImage,
        uniName: 'Wichita State University'
    },
    {
        location: 'washington',
        image: uniImage,
        uniName: 'University of New Orleans'
    },
    {
        location: 'washington',
        image: uniImage,
        uniName: 'California State University Fresno'
    },
    {
        location: 'washington',
        image: uniImage,
        uniName: 'California State University Northridge'
    },
    {
        location: 'washington',
        image: uniImage,
        uniName: 'Cleveland State University'
    },
    {
        location: 'newyork',
        image: uniImage,
        uniName: 'Cleveland State University'
    },
    {
        location: 'newyork',
        image: uniImage,
        uniName: 'Cleveland State University'
    },
    {
        location: 'newyork',
        image: uniImage,
        uniName: 'Cleveland State University'
    },
    {
        location: 'newyork',
        image: uniImage,
        uniName: 'Cleveland State University'
    },
    {
        location: 'newyork',
        image: uniImage,
        uniName: 'Cleveland State University'
    },
    {
        location: 'newyork',
        image: uniImage,
        uniName: 'Cleveland State University'
    },
    {
        location: 'francisco',
        image: uniImage,
        uniName: 'Cleveland State University'
    },
    {
        location: 'francisco',
        image: uniImage,
        uniName: 'Cleveland State University'
    },
    {
        location: 'francisco',
        image: uniImage,
        uniName: 'Cleveland State University'
    },
    {
        location: 'francisco',
        image: uniImage,
        uniName: 'Cleveland State University'
    },
    {
        location: 'francisco',
        image: uniImage,
        uniName: 'Cleveland State University'
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

export default function Universities() {
    return (
        <main className="w-full overflow-hidden">
            <PageHeader
                title="FAQs"
                link="/faq"
            />
            <section className="w-full px-24 py-16 flex gap-8">
                <div className="flex flex-col gap-4 w-[20%]">
                    <button className="flex_center py-3 px-6 border border-tertiary text-tertiary rounded-md w-max font-medium">
                        Washington DC University
                    </button>
                    <button className="flex_center py-3 px-6 border-tertiary text-text rounded-md w-max font-medium">
                        New York City University
                    </button>
                    <button className="flex_center py-3 px-6 border-tertiary text-text rounded-md w-max font-medium">
                        San Francisco University
                    </button>
                    <button className="flex_center py-3 px-6 border-tertiary text-text rounded-md w-max font-medium">
                        San Diego University
                    </button>
                    <button className="flex_center py-3 px-6 border-tertiary text-text rounded-md w-max font-medium">
                        Los Angles University
                    </button>
                </div>
                <div className="flex flex-col gap-16 w-[80%] h-max">
                    <div className="flex flex-col gap-8 w-full">
                        <h3 className="text-3xl font-semibold text-secondary">
                            Washington DC University
                        </h3>
                        <div className="grid grid-cols-3 gap-8 w-full">
                            {
                                universities.filter((university) =>
                                    university.location === 'washington'
                                ).map((uni, index) => {
                                    return (
                                        <div className="universitycard flex flex-col gap-2 rounded-md overflow-hidden col-span-1">
                                            <div className="image w-full h-80 rounded-md overflow-hidden">
                                                <Image
                                                    src={uni.image}
                                                    alt="uni-image"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <p className="text-secondary font-medium">
                                                {uni.uniName}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 w-full">
                        <h3 className="text-3xl font-semibold text-secondary">
                            New York City University
                        </h3>
                        <div className="grid grid-cols-3 gap-8 w-full">
                            {
                                universities.filter((university) =>
                                    university.location === 'newyork'
                                ).map((uni, index) => {
                                    return (
                                        <div className="universitycard flex flex-col gap-2 rounded-md overflow-hidden col-span-1">
                                            <div className="image w-full h-80 rounded-md overflow-hidden">
                                                <Image
                                                    src={uni.image}
                                                    alt="uni-image"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <p className="text-secondary font-medium">
                                                {uni.uniName}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 w-full">
                        <h3 className="text-3xl font-semibold text-secondary">
                            San Francisco University
                        </h3>
                        <div className="grid grid-cols-3 gap-8 w-full">
                            {
                                universities.filter((university) =>
                                    university.location === 'francisco'
                                ).map((uni, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="universitycard flex flex-col gap-2 rounded-md overflow-hidden col-span-1"
                                        >
                                            <div className="image w-full h-80 rounded-md overflow-hidden">
                                                <Image
                                                    src={uni.image}
                                                    alt="uni-image"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <p className="text-secondary font-medium">
                                                {uni.uniName}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex_center flex-col px-24 py-16 gap-12 bg-[#F5FBFF]">
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
                                    className="flex items-center gap-6 p-6 rounded-md col-span-1 w-full bg-white"
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
        </main>
    )
}