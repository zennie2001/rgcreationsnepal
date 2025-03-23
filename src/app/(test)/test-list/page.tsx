import PageHeader from "@/components/PageHeader";
import blogImage from '@/assets/images/blogImage.jpg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TestCard from "@/components/TestCard";

const blogs = [
    {
        image: blogImage,
        date: 'November 7, 2024',
        title: `USA's Best Universities, Prices, and Scholarships for Students`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
    {
        image: blogImage,
        date: 'November 2, 2024',
        title: `Germany's Best Universities, Prices, and Scholarships for Students`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
    {
        image: blogImage,
        date: 'October 24, 2024',
        title: `Everything You Should Know About Student Scholarships for Studying in Europe`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
    {
        image: blogImage,
        date: 'November 7, 2024',
        title: `USA's Best Universities, Prices, and Scholarships for Students`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
    {
        image: blogImage,
        date: 'November 2, 2024',
        title: `Germany's Best Universities, Prices, and Scholarships for Students`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
    {
        image: blogImage,
        date: 'October 24, 2024',
        title: `Everything You Should Know About Student Scholarships for Studying in Europe`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
    {
        image: blogImage,
        date: 'November 7, 2024',
        title: `USA's Best Universities, Prices, and Scholarships for Students`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
    {
        image: blogImage,
        date: 'November 2, 2024',
        title: `Germany's Best Universities, Prices, and Scholarships for Students`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
    {
        image: blogImage,
        date: 'October 24, 2024',
        title: `Everything You Should Know About Student Scholarships for Studying in Europe`,
        miniDescription: `Watch your career soar by studying in USA, the happiest nation on earth! USA’s educational system is well praised for its excellence and .....`
    },
]

export default function TestList() {
    return (
        <main className="w-full overflow-hidden">
            <PageHeader
                link="/test-list"
                title="Test Preparation"
            />
            <section className="flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">
        
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 gap-y-16">
                    {
                        blogs.map((blog, index) => {
                            return (
                                <TestCard
                                    key={index}
                                    image={blog.image}
                                    date={blog.date}
                                    title={blog.title}
                                    miniDescription={blog.miniDescription}
                                />
                            )
                        })
                    }
                </div>
                <div className="flex items-center gap-2">
                    <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
                        <IoIosArrowBack />
                    </button>
                    <button className="flex_center p-2 rounded-md text-sm size-10">
                        1
                    </button>
                    <button className="flex_center p-2 rounded-md text-sm size-10">
                        2
                    </button>
                    <p className="flex_center p-2 rounded-md text-sm size-10">
                        ....
                    </p>
                    <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
                        5
                    </button>
                    <button className="border border-text/30 flex_center p-2 rounded-md text-sm size-10">
                        <IoIosArrowForward />
                    </button>
                </div>
            </section>
        </main>
    )
}