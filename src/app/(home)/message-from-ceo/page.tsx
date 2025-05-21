import PageHeader from "@/components/PageHeader";
import leftquote from "@/assets/images/leftquotes.svg";
import rightquote from "@/assets/images/rightquotes.svg";
import ceoimage from "@/assets/images/ceoImage.jpg";
import mobileceoimage from "@/assets/images/ceoImage.jpg";
import Image from "next/image";

export default function MessageFromCeo() {
  return (
    <main>
      <PageHeader link="/message-from-ceo" title="Message From CEO" />
      <section className="w-full flex  flex-col container  gap-12">
        <div className="flex lg:flex-row flex-col gap-5 items-center  px-2 py-5">
          <h1 className="font-semibold text-center text-3xl text-darkGreen lg:hidden inline">
            Message From The CEO
          </h1>
          <Image
            src={mobileceoimage}
            alt="placeholder-image"
            className="lg:hidden inline"
          />
          <div className="flex items-start lg:w-[55%] w-full gap-3">
            <div className="w-full text-justify">
              <h1 className="font-extrabold my-6 text-black">
                Dear Valued Business Partners,
              </h1>
              <p>
                Welcome to Star Laxmi Jewellery LLC, your trusted partner in
                fine jewellery craftsmanship. As a leading B2B jewellery
                supplier, we take pride in serving wholesalers, retailers, and
                distributors across Europe, the Middle East, and Asia with
                exquisite, high-quality jewellery that meets global standards.
              </p>
              <p className="mt-3">
                At Star Laxmi Jewellery, we combine tradition with innovation to
                create timeless designs that resonate with diverse markets. Our
                expertise in custom jewellery manufacturing, private-label
                production, and bulk orders allows us to offer tailored
                solutions that align with your business needs. Whether you are
                sourcing statement pieces, bridal collections, or everyday
                luxury jewellery, our commitment to precision, premium
                materials, and ethical craftsmanship ensures unparalleled
                quality.
              </p>
              <p className="mt-3">
                Your success is our priority. We are dedicated to providing
                competitive pricing, seamless order fulfillment, and exceptional
                customer service to strengthen our partnerships and drive mutual
                growth.
              </p>
              <p className="mt-3">
                Thank you for choosing Star Laxmi Jewellery LLC as your
                preferred jewellery supplier. We look forward to building a
                long-lasting relationship and supporting your business with our
                exquisite collections.
              </p>

              <div className="flex flex-col items-start justify-start pt-10">
                <p className="font-semibold text-xl text-darkGreen">
                  Warm regards,
                </p>
                <p className="text-text">Prabesh KC</p>
                <p className="text-text"> CEO, Star Laxmi Jewellery LLC</p>
              </div>
            </div>
          </div>
          <Image
            src={ceoimage}
            alt="placeholder-image"
            className="rounded-md w-[450px] h-[450px] object-contain ms-4 object-top lg:inline hidden"
          />
        </div>
      </section>
    </main>
  );
}
