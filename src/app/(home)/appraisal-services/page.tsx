import PageHeader from "@/components/PageHeader";

export default function AppraisalServices() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader
        link="/appraisal-services"
        title="Jewelry Appraisal Services"
      />
      <section className="flex_center flex-col lg:py-16 py-10 lg:gap-12 gap-6 lg:px-0 px-4">
        <div className="flex_center flex-col gap-8 lg:w-[55%] w-full">
          <h3 className="text-[32px] font-semibold text-darkGreen">
            Jewelry Appraisal Services
          </h3>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-8">
              <h4 className=" text-justify w-full">
                At{" "}
                <span className=" font-semibold text-darkGreen text-justify w-full">
                  Khukuri Blades,
                </span>{" "}
                our certified gemologists provide comprehensive jewelry
                appraisal services for insurance, resale, or estate purposes.
                Whether you're looking to assess the value of a family heirloom
                or need an official appraisal for a new piece, we offer
                professional and accurate assessments to ensure your jewelry is
                appropriately valued.
              </h4>

              <ul className="list-disc">
                <p className="text-tertiary  font-bold mb-4">Key Features:</p>
                <li className="mb-2 text-black">
                  Detailed appraisal reports for insurance purposes
                </li>
                <li className="mb-2 text-black">
                  Expertise in gemstones, metals, and fine jewelry
                </li>
                <li className="mb-2 text-black">
                  Certified and trusted gemologists
                </li>
                <li className="mb-2 text-black">
                  Appraisal services for any type of jewelry, from antique to
                  modern
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
