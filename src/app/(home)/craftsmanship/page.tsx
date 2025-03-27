import PageHeader from "@/components/PageHeader";

export default function Craftsmanship() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader link="/craftsmanship" title="Craftsmanship" />
      <section className="flex_center flex-col lg:py-16 py-10 lg:gap-12 gap-6 lg:px-0 px-4">
        <div className="flex_center flex-col gap-8 lg:w-[55%] w-full">
          <h3 className="text-[32px] font-semibold text-secondary">
            Craftsmanship at Start Laxmi Jewellery
          </h3>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-8">
              <h4 className=" text-justify w-full">
                At
                <span className=" font-semibold text-[#ef001f] text-justify w-full">
                  Start Laxmi Jewellery,
                </span>{" "}
                our commitment to exceptional craftsmanship is the heart of
                everything we do. Each piece of jewellery is meticulously
                crafted with precision, passion, and attention to detail,
                ensuring it embodies elegance, beauty, and lasting quality.
              </h4>
              <h4 className=" text-justify w-full">
                Our team of skilled artisans combines traditional techniques
                with modern innovations to create jewellery that not only
                showcases intricate design but also promises durability and
                functionality. From the careful selection of materials to the
                final polishing, every stage of production is executed with
                expert care. Whether it's gold, silver, diamonds, or precious
                stones, we use only the finest materials to ensure that every
                piece is of the highest quality.
              </h4>
              <h4 className=" text-justify w-full">
                We take great pride in the custom-made designs we offer, working
                closely with our clients to bring their unique visions to life.
                Our craftsmen bring your ideas into reality, with personalized
                touches that make each piece one-of-a-kind.
              </h4>
              <h4 className=" text-justify w-full">
                At Start Laxmi Jewellery, we believe that true artistry lies in
                the details. Every curve, setting, and finish is done with
                precision, ensuring that our jewellery not only looks stunning
                but stands the test of time. Our passion for perfection is what
                makes our pieces cherished treasures for generations.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
