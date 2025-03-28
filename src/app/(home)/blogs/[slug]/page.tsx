import { newBlogs } from "../page";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ProductImageSlider from "@/components/ProductImageSlider";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BlogDetails({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const { slug } = resolvedParams ?? {};

  const revertSlug = (slug: string): string => {
    return slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const formatSlug = (name: string): string => {
    return name.split(":")[0].trim().toLowerCase().replace(/\s+/g, "-");
  };

  const blog = newBlogs.find((p) => formatSlug(p.title) === slug);

  if (!blog) return notFound();

  return (
    <main className="w-full">
      <PageHeader link={`/blogs/${slug}`} title={revertSlug(slug)} />
      <section className="py-10 bg-[#F5F5F5] w-full px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center gap-8 container mx-auto">
          <h3 className="text-3xl font-semibold text-center text-secondary">
            {blog.title}
          </h3>
          <div className="flex flex-col items-center w-full gap-8">
            <div className="flex flex-col items-center gap-3 w-full">
              <img
                src={blog.image.src}
                alt="blog image"
                className="w-full h-[50vh] sm:h-[60vh] object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-8">
              <h4 className="text-base text-text text-justify w-full max-w-3xl">
                {blog.description}
              </h4>
            </div>
            <div className="flex flex-col items-center gap-8 w-full">
              {blog.subTitle && (
                <h3 className="text-2xl md:text-3xl font-semibold text-secondary text-center w-full">
                  {blog.subTitle}
                </h3>
              )}
              {blog.subContent1 && (
                <p className="text-text text-base text-justify max-w-3xl">
                  {blog.subContent1}
                </p>
              )}
              {blog.subContent2 && (
                <p className="text-text text-base text-justify max-w-3xl">
                  {blog.subContent2}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                <img
                  src={blog.image.src}
                  alt="blog image"
                  className="w-full h-60 object-cover"
                />
                <img
                  src={blog.image.src}
                  alt="blog image"
                  className="w-full h-60 object-cover"
                />
              </div>
              {blog.section1.map((section1, index) => (
                <div key={index} className="w-full max-w-3xl">
                  <p className="text-secondary text-xl md:text-3xl text-center font-semibold mt-10 mb-6">
                    {section1.title}
                  </p>
                  <ul className="list-disc pl-6">
                    {section1.subsections.map((subsection, subIndex) => (
                      <li key={subIndex} className="mb-2">
                        <span className="font-semibold text-tertiary">
                          {subsection.title}:
                        </span>{" "}
                        {subsection.content}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {blog.section2 && (
              <div className="w-full max-w-3xl">
                {blog.section2.map((section2, index) => (
                  <div key={index}>
                    <p className="text-secondary text-lg md:text-2xl text-center font-semibold mt-10 mb-6">
                      {section2.title}
                    </p>
                    {section2.description && (
                      <p className="text-text text-base text-justify mb-4">
                        {section2.description}
                      </p>
                    )}
                    <ul className="list-disc pl-6">
                      {section2.subsections.map((subsection, subIndex) => (
                        <li key={subIndex} className="mb-2">
                          <span className="font-semibold text-tertiary mt-10">
                            {subsection.title}:
                          </span>{" "}
                          {subsection.content}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {blog.secondTitle && (
              <div className="flex flex-col items-center gap-8 w-full max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-semibold text-secondary text-center w-full">
                  {blog.secondTitle}
                </h3>
                {blog.secondContent1 && (
                  <p className="text-text text-base text-justify">
                    {blog.secondContent1}
                  </p>
                )}
                {blog.secondContent2 && (
                  <p className="text-text text-base text-justify">
                    {blog.secondContent2}
                  </p>
                )}
              </div>
            )}
            <div className="flex flex-col items-center gap-8 w-full max-w-3xl">
              <h4 className="text-2xl md:text-3xl font-semibold text-secondary text-center w-full">
                {blog.conclusion}
              </h4>
              <p className="text-text text-base text-justify">
                {blog.conclusionContent1}
              </p>
              <p className="text-text text-base text-justify">
                {blog.conclusionContent2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
