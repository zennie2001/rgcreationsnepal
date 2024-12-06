import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import servicesImage from '@/assets/images/heroBackground.jpg';
import ServiceCard from "@/components/ServiceCard";

const ourServices = [
    {
        image: servicesImage,
        title: 'Student Counselling',
        miniDescription: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.'
    },
    {
        image: servicesImage,
        title: 'Student Counselling',
        miniDescription: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.'
    },
    {
        image: servicesImage,
        title: 'Student Counselling',
        miniDescription: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.'
    },
    {
        image: servicesImage,
        title: 'Student Counselling',
        miniDescription: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.'
    },
    {
        image: servicesImage,
        title: 'Student Counselling',
        miniDescription: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.'
    },
    {
        image: servicesImage,
        title: 'Student Counselling',
        miniDescription: 'A wide range of test preparation classes for IELTS, TOFEL, SAT, GRE, GMAT, and Japanese language are operated.'
    },
]

export default function Services() {
    return (
        <main className="w-full overflow-hidden">
            <PageHeader
                link="/services"
                title="Services"
            />
            <section className="w-full flex_center flex-col px-24 py-16 gap-12">
                <SectionHeader
                    smallTitle="Our Services"
                    title="Tailored professional assistance"
                />
                <div className="grid grid-cols-3 w-full gap-8 gap-y-16">
                    {
                        ourServices.map((service, index) => {
                            return (
                                <ServiceCard
                                    key={index}
                                    image={service.image}
                                    title={service.title}
                                    miniDescription={service.miniDescription}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}