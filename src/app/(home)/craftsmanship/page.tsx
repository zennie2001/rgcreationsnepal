import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import aboutImage from "@/assets/images/craftmanship.jpg";
import craft1 from "@/assets/images/crafts/c1.jpg";
import craft2 from "@/assets/images/crafts/c2.jpg";
import craft3 from "@/assets/images/crafts/c3.jpg";

export default function Craftsmanship() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader link="/craftsmanship" title="Craftsmanship" />
      <section className="lg:py-16 py-10 lg:gap-12 container gap-6 lg:px-0 px-4">
        <div className="flex_center flex-col gap-8  w-full">
          <h3 className="text-[32px] font-semibold text-secondary">
            Craftsmanship at Start Laxmi Jewellery
          </h3>
          <div className="flex md:flex-row flex-col w-full gap-8">
            <div className="flex flex-col w-full md:w-1/2 my-auto gap-8">
              <h4 className=" text-justify w-full">
                At{" "}
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
            <div className="flex gap-8 lg:w-1/2  w-full h-auto  rounded-md overflow-hidden">
              <Image src={aboutImage} alt="image" className=" object-cover" />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-2 justify-between my-10 w-full">
          <Image
            src={craft1}
            alt="image"
            className="md:w-[30%] w-full rounded-md shadow-lg hover:scale-110 transition-all duration-300 object-cover"
          />
          <Image
            src={craft2}
            alt="image"
            className=" md:w-[30%] w-full rounded-md shadow-lg hover:scale-110 transition-all duration-300  object-cover"
          />
          <Image
            src={craft3}
            alt="image"
            className="md:w-[30%] w-full rounded-md shadow-lg hover:scale-110 transition-all duration-300  object-cover"
          />
        </div>
      </section>
    </main>
  );
}
