import SectionHeader from "../components/SectionHeader";
import serviceFirst from '@/assets/images/servicesFirst.png';
import serviceSecond from '@/assets/images/servicesSecond.png';
import serviceThird from '@/assets/images/servicesThird.png';
import Image from "next/image";

const services = [
    {
        image: serviceFirst,
        title: 'Test Preparation',
        description: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.'
    },
    {
        image: serviceSecond,
        title: 'Approach',
        description: 'We aligned ourselves according to the student’s objectives and collaborate to unlock maximum opportunities.'
    },
    {
        image: serviceThird,
        title: 'Placement',
        description: 'Our association with reputed intuitions enables students to embark their journey with the best platform available.'
    },
]

export default function Services() {
    return (
        <section className="w-full flex_center flex-col lg:gap-12 gap-6 lg:p-24 px-4 py-10 font-jakarta">
            <SectionHeader
                title="Tailored professional assistance"
                smallTitle="Our Services"
            />
            <div className="grid lg:grid-cols-3 lg:gap-8 gap-5 grid-cols-1 w-full">
                {
                    services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex_center flex-col col-span-1 gap-6 rounded-md p-8 bg-[#F5FBFF]"
                            >
                                <div className="image size-52">
                                    <Image
                                        src={service.image}
                                        alt="service"
                                        className="size-full object-contain"
                                    />
                                </div>
                                <div className="texts flex_center flex-col gap-4">
                                    <h1 className="flex_center text-2xl text-secondary font-semibold">
                                        {service.title}
                                    </h1>
                                    <p className="flex_center text-center text-text">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}