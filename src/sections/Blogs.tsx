import SectionHeader from "./SectionHeader";
import blogImage from '@/assets/images/blogImage.jpg';
import BlogCard from "@/components/BlogCard";

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
]

export default function Blogs() {
    return (
        <section className="w-full flex_center flex-col py-20 px-24 gap-12">
            <SectionHeader
                smallTitle="Blogs & Articles"
                title="Stay up to date on our blogs"
            />
            <div className="w-full grid grid-cols-3 gap-8">
                {
                    blogs.map((blog, index) => {
                        return (
                            <BlogCard
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
        </section>
    )
}