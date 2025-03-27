import PageHeader from "@/components/PageHeader";

export default function JewelleryRepair() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader link="/jewellery-repair" title="Jewelry Repair Services" />
      <section className="flex_center flex-col lg:py-16 py-10 lg:gap-12 gap-6 lg:px-0 px-4">
        <div className="flex_center flex-col gap-8 lg:w-[55%] w-full">
          <h3 className="text-[32px] font-semibold text-secondary">
            Jewelry Repair Services
          </h3>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-8">
              <h4 className=" text-justify w-full">
                Is your favorite piece of jewelry in need of repair? At{" "}
                <span className=" font-semibold text-[#ef001f] text-justify w-full">
                  Star Laxmi Jewellery LLC,
                </span>{" "}
                our expert jewelers offer a range of jewelry repair services to
                restore your treasures. From fixing broken chains and resizing
                rings to replacing lost stones and refurbishing antique pieces,
                we provide professional care to keep your jewelry in excellent
                condition.
              </h4>

              <ul className="list-disc">
                <h1 className="text-tertiary  font-bold mb-4">Key Features:</h1>
                <li className="mb-2 text-gray-700">
                  Personalized designs tailored to your preferences
                </li>
                <li className="mb-2 text-gray-700">
                  Consultation with expert jewelers and designers
                </li>
                <li className="mb-2 text-gray-700">
                  Wide selection of high-quality gemstones and metals
                </li>
                <li className="mb-2 text-gray-700">
                  3D rendering for visual approval before creation
                </li>
                <li className="mb-2 text-gray-700">
                  Attention to detail and expert craftsmanship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
