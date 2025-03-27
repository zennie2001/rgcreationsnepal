import PageHeader from "@/components/PageHeader";

export default function EngravingServices() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader link="/engraving-services" title="Engraving Services" />
      <section className="flex_center flex-col lg:py-16 py-10 lg:gap-12 gap-6 lg:px-0 px-4">
        <div className="flex_center flex-col gap-8 lg:w-[55%] w-full">
          <h3 className="text-[32px] font-semibold text-secondary">
            Engraving Services
          </h3>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-8">
              <h4 className=" text-justify w-full">
                Add a personal touch to your jewelry with our professional
                engraving services at{" "}
                <span className=" font-semibold text-[#ef001f] text-justify w-full">
                  Star Laxmi Jewellery LLC.
                </span>{" "}
                Whether it's an engraving of initials, a special date, or a
                meaningful quote, we can engrave your piece with precision and
                care. Choose from a variety of fonts and designs, or work with
                us to create a custom engraving that tells your unique story.
              </h4>

              <ul className="list-disc">
                <h1 className="text-tertiary  font-bold mb-4">Key Features:</h1>
                <li className="mb-2 text-gray-700">
                  Custom engraving on rings, bracelets, necklaces, and more
                </li>
                <li className="mb-2 text-gray-700">
                  High-quality precision engraving
                </li>
                <li className="mb-2 text-gray-700">
                  Variety of font and design options
                </li>
                <li className="mb-2 text-gray-700">
                  Special message or personal touch for any occasion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
