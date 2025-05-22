import PageHeader from "@/components/PageHeader";
import { Globe, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function TermsConditions() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader link="/privacy-policy" title="Privacy Policy" />
      <section className="flex_center flex-col lg:py-16 py-10 lg:gap-12 gap-6 lg:px-0 px-4">
        <div className="flex_center flex-col gap-8 lg:w-[55%] w-full">
          <h3 className="text-[32px] font-semibold text-darkGreen">
            Privacy Policy
          </h3>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-8">
              <h4 className=" text-justify w-full">
                <span className=" font-semibold text-darkGreen text-justify w-full">
                  Khukuri Blades
                </span>{" "}
                ("Company," "we," "our," or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website (www.starlaxmijewellery.com) or engage with our
                services.
              </h4>

              <ul className="list-disc">
                <h1 className="text-tertiary  font-bold mb-4">
                  1. Information We Collect
                </h1>
                <h1 className="text-black  font-semibold mb-4">
                  We may collect the following types of personal and
                  non-personal information:
                </h1>

                <li className="mb-2 text-black">
                  <span className="text-black">Personal Information: </span>{" "}
                  Name, email address, phone number, billing/shipping address,
                  and payment details.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">Account Information: </span>{" "}
                  Login credentials, order history, and preferences.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">Transaction Data: </span>{" "}
                  Purchase details, invoices, and customer support interactions.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">Device and Usage Data: </span> IP
                  address, browser type, operating system, and browsing activity
                  on our website.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">
                    Cookies and Tracking Technologies:{" "}
                  </span>{" "}
                  We use cookies, pixels, and analytics tools to improve user
                  experience.
                </li>
              </ul>
              <ul>
                <h1 className="text-tertiary  font-bold mb-4">
                  2. How We Use Your Information
                </h1>
                <h1 className="text-black  font-semibold mb-4">
                  We use your information for the following purposes:
                </h1>
                <li className="mb-2 text-black">
                  To process orders and payments.
                </li>
                <li className="mb-2 text-black">
                  To provide customer support and respond to inquiries.
                </li>
                <li className="mb-2 text-black">
                  To improve our website, products, and services.
                </li>
                <li className="mb-2 text-black">
                  To send promotional offers, newsletters, and marketing
                  communications (you can opt-out at any time).
                </li>
                <li className="mb-2 text-black">
                  To ensure security, prevent fraud, and comply with legal
                  obligations.
                </li>
              </ul>
              <ul>
                <h1 className="text-tertiary  font-bold mb-4">
                  3. Sharing Your Information
                </h1>
                <h1 className="text-black  font-semibold mb-4">
                  We do not sell or rent your personal information. However, we
                  may share it in the following situations:
                </h1>
                <li className="mb-2 text-black">
                  <span className="text-black">With Service Providers:</span>{" "}
                  Third-party companies that assist in payment processing,
                  delivery, marketing, and website analytics.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">With Legal Authorities: </span>{" "}
                  If required by law, court orders, or to protect our rights.
                </li>
                <li className="mb-2 text-black">
                  <span className="text-black">With Business Partners: </span>{" "}
                  For joint marketing efforts and product collaborations.
                </li>
              </ul>
              <ul>
                <h1 className="text-tertiary  font-bold mb-4">
                  4. Data Security
                </h1>
                <h1 className="text-black  font-semibold mb-4">
                  We implement industry-standard security measures to protect
                  your information. However, no method of transmission over the
                  Internet is 100% secure, and we cannot guarantee absolute
                  security.
                </h1>
              </ul>
              <ul>
                <h1 className="text-tertiary  font-bold mb-4">
                  5. Your Rights and Choices
                </h1>
                <li className="mb-2 text-black">
                  You can update or delete your account information by
                  contacting us.
                </li>
                <li className="mb-2 text-black">
                  You can opt out of marketing emails by clicking the
                  “unsubscribe” link.
                </li>
                <li className="mb-2 text-black">
                  You can disable cookies through your browser settings.
                </li>
                <li className="mb-2 text-black">
                  You can request access to the personal data we hold about you.
                </li>
              </ul>
              <ul>
                <h1 className="text-tertiary  font-bold mb-4">
                  6. Third-Party Links
                </h1>
                <li className="mb-2 text-black">
                  Our website may contain links to third-party sites. We are not
                  responsible for their privacy practices and encourage you to
                  read their privacy policies.
                </li>
              </ul>
              <ul>
                <h1 className="text-tertiary font-bold mb-4">
                  7. Children's Privacy
                </h1>
                <li className="mb-2 text-black">
                  Our services are not intended for individuals under the age of
                  18. We do not knowingly collect personal data from children.
                </li>
              </ul>

              <ul>
                <h1 className="text-tertiary font-bold mb-4">
                  8. Changes to This Privacy Policy
                </h1>
                <li className="mb-2 text-black">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with the revised date.
                </li>
              </ul>

              <ul>
                <h1 className="text-tertiary font-bold mb-4">9. Contact Us</h1>
                <h1 className="text-black  font-semibold mb-4">
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </h1>
                {/* <li className="flex items-center gap-2">
                  <MapPin className="flex-shrink-0" />
                  <span>
                    Al Souq Al Kabeer Tailor Galli, Esag Building (Old Plot),
                    Shop No. 07 Burdubai, Dubai, UAE (Near Astoria Hotel)
                  </span>
                </li> */}

                <li className="w-full">
                  <Link
                    href="mailto:info@starlaxmijewellery.com"
                    className="flex items-center gap-2 w-full"
                  >
                    <Mail className="flex-shrink-0" />
                    <span className="flex-1">orders@knife-depot.com</span>
                  </Link>
                </li>

                <li className="w-full">
                  <Link
                    href="http://www.khukuriblades.com"
                    className="flex items-center gap-2 w-full"
                  >
                    <Globe className="flex-shrink-0" />
                    <span className="flex-1">www.khukuriblades.com</span>
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
