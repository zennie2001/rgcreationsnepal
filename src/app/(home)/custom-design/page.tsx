import PageHeader from "@/components/PageHeader";
import { Globe, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function CustomDesign() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader
        link="/custom-design"
        title="Custom Design Jewellery Services"
      />
      <section className="flex_center flex-col lg:py-16 py-10 lg:gap-12 gap-6 lg:px-0 px-4">
        <div className="flex_center flex-col gap-8 lg:w-[55%] w-full">
          <h3 className="text-[32px] font-semibold text-darkGreen">
            Custom Design Jewellry Services
          </h3>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-8">
              <h4 className=" text-justify w-full">
                At{" "}
                <span className=" font-semibold text-[#ef001f] text-justify w-full">
                  Star Laxmi Jewellery LLC,
                </span>{" "}
                we specialize in creating one-of-a-kind pieces that reflect your
                personal style. Our custom design jewelry service allows you to
                work closely with our skilled designers to bring your vision to
                life. Whether it's a unique engagement ring, a special gift, or
                a cherished heirloom, we ensure every detail is crafted to
                perfection. From selecting the finest materials to handcrafting
                intricate designs, we offer a full consultation process to make
                sure your custom jewelry is as exceptional as you are.
              </h4>

              <ul className="list-disc">
                <h1 className="text-tertiary  font-bold mb-4">Key Features:</h1>
                <li className="mb-2 text-black">
                  Personalized designs tailored to your preferences
                </li>
                <li className="mb-2 text-black">
                  Consultation with expert jewelers and designers
                </li>
                <li className="mb-2 text-black">
                  Wide selection of high-quality gemstones and metals
                </li>
                <li className="mb-2 text-black">
                  3D rendering for visual approval before creation
                </li>
                <li className="mb-2 text-black">
                  Attention to detail and expert craftsmanship
                </li>
              </ul>
              <ul className="list-disc">
                <h1 className="text-tertiary font-bold mb-4">Order Process</h1>
                <li className="mb-2 text-black">
                  Customers must submit a detailed design request via email or
                  an official purchase order.
                </li>
                <li className="mb-2 text-black">
                  A non-refundable deposit (typically 50%) is required before
                  production begins.
                </li>
                <li className="mb-2 text-black">
                  The final design will be confirmed in writing before
                  manufacturing.
                </li>
              </ul>
              <ul className="list-disc">
                <h1 className="text-tertiary font-bold mb-4">
                  Design & Modifications
                </h1>
                <li className="mb-2 text-black">
                  Customers can request up to two design modifications before
                  production starts.
                </li>
                <li className="mb-2 text-black">
                  Any additional changes may incur extra charges and affect the
                  delivery timeline.
                </li>
                <li className="mb-2 text-black">
                  Once production has begun, no further modifications can be
                  made.
                </li>
              </ul>
              <ul className="list-disc">
                <h1 className="text-tertiary font-bold mb-4">
                  Production Time
                </h1>
                <li className="mb-2 text-black">
                  Standard production time: 4-8 weeks, depending on the
                  complexity of the design.
                </li>
                <li className="mb-2 text-black">
                  Urgent orders may be accommodated with an additional rush fee,
                  subject to feasibility.
                </li>
              </ul>
              <ul className="list-disc">
                <h1 className="text-tertiary font-bold mb-4">Payment Terms</h1>
                <li className="mb-2 text-black">
                  50% deposit required upfront, with the remaining 50% due
                  before shipment.
                </li>
                <li className="mb-2 text-black">
                  Payment methods: Bank Transfer, LC (Letter of Credit), or
                  other agreed terms.
                </li>
                <li className="mb-2 text-black">
                  Late payments may result in order delays.
                </li>
              </ul>
              <ul className="list-disc">
                <h1 className="text-tertiary font-bold mb-4">
                  Cancellation & Refunds
                </h1>
                <li className="mb-2 text-black">
                  Custom orders cannot be canceled once production has started.
                </li>
                <li className="mb-2 text-black">
                  Deposits are non-refundable due to material procurement and
                  design work.
                </li>
                <li className="mb-2 text-black">
                  If a cancellation is made before production, only a partial
                  refund may be granted at the company's discretion.
                </li>
              </ul>
              <ul className="list-disc">
                <h1 className="text-tertiary font-bold mb-4">
                  Shipping & Delivery
                </h1>
                <li className="mb-2 text-black">
                  Custom jewellery is shipped worldwide, including Europe, the
                  Middle East, and Asia.
                </li>
                <li className="mb-2 text-black">
                  Shipping costs, duties, and import taxes are the
                  responsibility of the customer.
                </li>
                <li className="mb-2 text-black">
                  Star Laxmi Jewellery LLC is not liable for delays due to
                  customs or shipping carriers.
                </li>
              </ul>
              <ul className="list-disc">
                <h1 className="text-tertiary font-bold mb-4">
                  Product Warranty & Repairs
                </h1>
                <li className="mb-2 text-black">
                  All custom jewellery is crafted with high-quality materials
                  and inspected before delivery.
                </li>
                <li className="mb-2 text-black">
                  We offer a limited warranty against manufacturing defects
                  (duration varies by product).
                </li>
                <li className="mb-2 text-black">
                  Repairs due to wear and tear, accidental damage, or customer
                  mishandling may incur charges.
                </li>
              </ul>
              <ul className="list-disc">
                <h1 className="text-tertiary font-bold mb-4">
                  Intellectual Property Rights
                </h1>
                <li className="mb-2 text-black">
                  Star Laxmi Jewellery LLC retains the rights to original
                  designs unless otherwise agreed.
                </li>
                <li className="mb-2 text-black">
                  Customer-provided designs remain the property of the customer.
                  However, Star Laxmi Jewellery LLC reserves the right to
                  feature completed custom pieces in its portfolio unless
                  otherwise specified in writing.
                </li>
              </ul>
              <ul>
                <h1 className="text-tertiary font-bold mb-4">
                  Contact Information
                </h1>
                <h1 className="text-black font-semibold mb-4">
                  For custom order inquiries, please contact:
                </h1>
                <li className="flex items-center gap-2">
                  <MapPin className="flex-shrink-0" />
                  <span>
                    Al Souq Al Kabeer Tailor Galli, Esag Building (Old Plot),
                    Shop No. 07 Burdubai, Dubai, UAE (Near Astoria Hotel)
                  </span>
                </li>

                <li className="w-full">
                  <Link
                    href="mailto:info@starlaxmijewellery.com"
                    className="flex items-center gap-2 w-full"
                  >
                    <Mail className="flex-shrink-0" />
                    <span className="flex-1">info@starlaxmijewellery.com</span>
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    href="http://www.starlaxmijewellery.com"
                    className="flex items-center gap-2 w-full"
                  >
                    <Globe className="flex-shrink-0" />
                    <span className="flex-1">www.starlaxmijewellery.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
