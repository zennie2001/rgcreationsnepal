import PageHeader from "@/components/PageHeader";
import leftquote from "@/assets/images/leftquotes.svg";
import rightquote from "@/assets/images/rightquotes.svg";
import ceoimage from "@/assets/images/ceo.svg";
import mobileceoimage from "@/assets/images/mobileceo.svg";
import Image from "next/image";

export default function MessageFromDirector() {
  return (
    <main>
      <PageHeader link="/message-from-director" title="Message From Director" />
      <section className="w-full flex  flex-col container  gap-12">
        <div className="flex lg:flex-row flex-col gap-5 items-center  px-2 py-5">
          <p className="font-semibold text-3xl text-darkGreen lg:hidden inline">
            Message From CEO
          </p>
          <Image
            src={mobileceoimage}
            alt="placeholder-image"
            className="lg:hidden inline"
          />
          <div className="flex items-start lg:w-[55%] w-full gap-3">
            <div className="w-full text-justify">
              <p className="font-extrabold mb-6 text-black">
                Dear Esteemed Customers and Partners,
              </p>
              <p>
                It is with great pride and gratitude that I welcome you to Star
                Laxmi Jewellery LLC. Our journey is built on a foundation of
                trust, quality, and a deep passion for fine jewellery. Each
                piece we create reflects our commitment to excellence, blending
                traditional artistry with modern elegance.
              </p>
              <p className="mt-3">
                At Khukuri Blades, we believe jewellery is more than just an
                accessory—it’s a symbol of love, culture, and timeless beauty.
                That’s why we meticulously craft every piece, ensuring that it
                tells a story and creates unforgettable memories for our valued
                customers.
              </p>
              <p className="mt-3">
                Our success is driven by your support, and we remain dedicated
                to innovation, customer satisfaction, and delivering the finest
                jewellery that exceeds expectations. We invite you to explore
                our collections and experience the brilliance that defines Star
                Laxmi Jewellery.
              </p>
              <p>
                Thank you for being a part of our journey. We look forward to
                adorning your moments with grace and luxury.
              </p>
              <div className="flex flex-col items-start justify-start pt-10">
                <p className="font-semibold text-xl text-darkGreen">
                  Warm regards,
                </p>
                <p className="text-text">Laxmi Gurung</p>
                <p className="text-text"> Director, Khukuri Blades</p>
              </div>
            </div>
          </div>
          <Image
            src={ceoimage}
            alt="placeholder-image"
            className="w-[40%] lg:inline hidden"
          />
        </div>
      </section>
    </main>
  );
}
