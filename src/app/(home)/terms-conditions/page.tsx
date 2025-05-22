import PageHeader from "@/components/PageHeader";

export default function TermsConditions() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader link="/terms-conditions" title="Terms OF Services" />
      <section className="flex_center flex-col lg:py-16 py-10 lg:gap-12 gap-6 lg:px-0 px-4">
        <div className="flex_center flex-col gap-8 lg:w-[55%] w-full">
          <h3 className="text-[32px] font-semibold text-darkGreen">
            Terms OF Services
          </h3>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-8">
              <h4 className=" text-justify w-full">
                Welcome to{" "}
                <span className=" font-semibold text-[#ef001f] text-justify w-full">
                  Khukuri Blades.
                </span>{" "}
                By accessing or using our website and services, you agree to
                comply with and be bound by the following Terms & Conditions.
                Please read them carefully.
              </h4>

              <ul>
                <h1 className="text-tertiary  font-bold mb-4">1. General</h1>
                <li className="mb-2 text-black">
                  <span className="text-black">1.1:</span> These Terms &
                  Conditions govern the use of our website, products, and
                  services.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">1.2: </span> We reserve the right
                  to modify these terms at any time. Changes will be effective
                  upon posting on our website.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">1.3: </span> By using our
                  services, you confirm that you are at least 18 years old or
                  have parental consent.
                </li>
              </ul>
              <ul>
                <h1 className="text-tertiary  font-bold mb-4">
                  2. Products & Pricing
                </h1>
                <li className="mb-2 text-black">
                  <span className="text-black"> 2.1:</span> All prices are
                  listed in [Currency] and are subject to change without prior
                  notice.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">2.2: </span> We make every effort
                  to display accurate product descriptions and images, but
                  slight variations may occur.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">2.3: </span> Prices may fluctuate
                  due to market conditions, and we reserve the right to adjust
                  them accordingly.
                </li>
              </ul>
              <ul>
                <h1 className="text-tertiary  font-bold mb-4">
                  3. Orders & Payments
                </h1>
                <li className="mb-2 text-black">
                  <span className="text-black">3.1:</span> Orders placed through
                  our website are subject to availability and confirmation.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">3.2: </span> We accept payments
                  through [Payment Methods]
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">3.3: </span> In case of payment
                  failure or fraud detection, we reserve the right to cancel the
                  order without prior notice.
                </li>
              </ul>
              <ul>
                <h1 className="text-tertiary  font-bold mb-4">
                  4. Shipping & Delivery
                </h1>
                <li className="mb-2 text-black">
                  <span className="text-black">4.1:</span> We deliver within
                  [Specify Areas] and strive to ensure timely delivery.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">4.2: </span> Delivery timelines
                  are estimates and may be subject to delays due to unforeseen
                  circumstances.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">4.3: </span> Customers are
                  responsible for providing accurate delivery details. We are
                  not liable for orders delivered to incorrect addresses.
                </li>
              </ul>
              <ul>
                <h1 className="text-tertiary  font-bold mb-4">
                  5. Returns & Refunds
                </h1>
                <li className="mb-2 text-black">
                  <span className="text-black">5.1:</span>5.1 Returns are
                  accepted within 7 days of purchase, subject to our return
                  policy.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">5.2: </span>Refunds will be
                  processed within [X] business days upon successful inspection
                  of returned products.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">5.3: </span> Customized or
                  engraved items are non-refundable unless defective.
                </li>
              </ul>
              <ul>
                <h1 className="text-tertiary  font-bold mb-4">
                  6. Warranty & Repairs
                </h1>
                <li className="mb-2 text-black">
                  <span className="text-black">6.1:</span>6.1 Our jewellery
                  items come with a 7 days warranty against manufacturing
                  defects.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">6.2: </span>Repairs for damages
                  caused by misuse or accidents will be subject to additional
                  charges.
                </li>
              </ul>
              <ul>
                <h1 className="text-tertiary font-bold mb-4">
                  7. Liability & Disclaimers
                </h1>
                <li className="mb-2 text-black">
                  <span className="text-black">7.1: </span>Khukuri Blades LLC
                  shall not be liable for any indirect, incidental, or
                  consequential damages arising from the use of our products or
                  services.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">7.2: </span>We do not guarantee
                  uninterrupted access to our website and are not responsible
                  for technical issues beyond our control.
                </li>
              </ul>

              <ul>
                <h1 className="text-tertiary font-bold mb-4">
                  8. Intellectual Property
                </h1>
                <li className="mb-2 text-black">
                  <span className="text-black">8.1: </span>All website content,
                  including images, logos, and text, is the property of Star
                  Laxmi Jewellery LLC and may not be used without permission.
                </li>
              </ul>

              <ul>
                <h1 className="text-tertiary font-bold mb-4">
                  9. Privacy Policy
                </h1>
                <li className="mb-2 text-black">
                  <span className="text-black">9.1: </span>Your personal
                  information is collected and used per our Privacy Policy.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">9.2: </span>We take reasonable
                  measures to protect your data but cannot guarantee absolute
                  security.
                </li>
              </ul>

              <ul>
                <h1 className="text-tertiary font-bold mb-4">
                  10. Governing Law & Disputes
                </h1>
                <li className="mb-2 text-black">
                  <span className="text-black">10.1: </span>These Terms &
                  Conditions are governed by the laws of the United Arab
                  Emirates (UAE).
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">10.2: </span>Any disputes arising
                  shall be resolved amicably or referred to the competent courts
                  of Dubai, United Arab Emirates.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
