
import AboutHero from "@/sections/AboutHero";
import Deals from "@/sections/Deals";
import FAQ from "@/app/(home)/faqs/page";
import Image from "next/image";
import AboutHealthHero from "@/sections/AboutHealthHero";

export const metadata = {
  title: "Health & Safety | Trusted Architecture Firm Nepal ",
  description:
    "At RG Creations, health and safety are paramount—ensuring secure and compliant construction practices across all architectural projects in Nepal.",
};

const safetyItems = [
  {
    title: "Rigorous Safety Protocols",
    description:
      "Implementing comprehensive health and safety measures on all project sites to prevent accidents and ensure well-being.",
  },
  {
    title: "Employee Training",
    description:
      "Regular safety training and awareness programs equip our team with the knowledge and skills to work safely and responsibly.",
  },
  {
    title: "Compliance & Regulations",
    description:
      "Strict adherence to local and international health and safety laws, regulations, and best practices.",
  },
  {
    title: "Risk Management",
    description:
      "Proactive identification, assessment, and mitigation of potential hazards throughout the project lifecycle.",
  },
  {
    title: "Safe Work Environment",
    description:
      "Ensuring that all equipment, tools, and materials are handled and maintained in accordance with safety guidelines.",
  },
  {
    title: "Emergency Preparedness",
    description:
      "Establishing clear procedures and communication plans to respond efficiently to emergencies or incidents.",
  },
];

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <AboutHealthHero />
      <section className="px-4 container mx-auto py-12 md:px-0  md:py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Health and Safety
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-12">
          At RG Creations Pvt. Ltd, the health and safety of our employees,
          clients, partners, and communities are our highest priority. We are
          committed to maintaining a safe working environment and ensuring that
          every project complies with the strictest safety standards.
        </p>

        <div className="grid md:grid-cols-3  items-center">
          <div className="flex flex-col gap-10">
            {safetyItems.slice(0, 3).map((item, index) => (
              <div key={index} className="text-left flex gap-4">
                <div className="space-y-2 max-w-xs">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.9498 9.59921C22.7623 9.41174 22.5079 9.30642 22.2428 9.30642C21.9776 9.30642 21.7233 9.41174 21.5358 9.59921L10.6438 20.5382C10.1795 21.0026 9.62829 21.3709 9.02164 21.6223C8.41499 21.8736 7.76478 22.003 7.10813 22.003C5.78197 22.0031 4.51008 21.4764 3.57228 20.5387C2.63447 19.601 2.10757 18.3292 2.10747 17.0031C2.10738 15.6769 2.63411 14.405 3.57178 13.4672L14.1208 2.87521C14.6849 2.3201 15.4455 2.01038 16.2369 2.01351C17.0283 2.01664 17.7864 2.33236 18.3461 2.89191C18.9058 3.45147 19.2217 4.20951 19.225 5.00092C19.2283 5.79233 18.9188 6.55299 18.3638 7.11721L7.81478 17.7092C7.62453 17.8915 7.37124 17.9932 7.10778 17.9932C6.84431 17.9932 6.59103 17.8915 6.40078 17.7092C6.21331 17.5217 6.10799 17.2674 6.10799 17.0022C6.10799 16.737 6.21331 16.4827 6.40078 16.2952L15.7928 6.86021C15.9749 6.67161 16.0757 6.419 16.0735 6.15681C16.0712 5.89461 15.966 5.6438 15.7806 5.45839C15.5952 5.27298 15.3444 5.16781 15.0822 5.16553C14.82 5.16326 14.5674 5.26405 14.3788 5.44621L4.98678 14.8812C4.70815 15.1598 4.48713 15.4905 4.33633 15.8545C4.18553 16.2186 4.10792 16.6087 4.10792 17.0027C4.10792 17.3967 4.18553 17.7869 4.33633 18.1509C4.48713 18.5149 4.70815 18.8456 4.98678 19.1242C5.5584 19.6697 6.31816 19.974 7.10828 19.974C7.8984 19.974 8.65816 19.6697 9.22978 19.1242L19.7778 8.53121C20.6958 7.58951 21.2058 6.32406 21.1974 5.00898C21.1889 3.6939 20.6627 2.43509 19.7328 1.50523C18.8028 0.575376 17.5439 0.0493539 16.2288 0.0411139C14.9137 0.0328739 13.6483 0.54308 12.7068 1.46121L2.15778 12.0532C0.844957 13.366 0.107422 15.1466 0.107422 17.0032C0.107422 18.8598 0.844957 20.6404 2.15778 21.9532C3.4706 23.266 5.25117 24.0036 7.10778 24.0036C8.96439 24.0036 10.745 23.266 12.0578 21.9532L22.9498 11.0172C23.0432 10.9243 23.1173 10.8138 23.1679 10.6921C23.2185 10.5705 23.2446 10.44 23.2446 10.3082C23.2446 10.1764 23.2185 10.046 23.1679 9.92429C23.1173 9.80261 23.0432 9.69214 22.9498 9.59921Z"
                      fill="#3A4F39"
                    />
                  </svg>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-sm  text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center py-4">
            <Image
              src="/about/3092.jpg"
              alt="Safety Equipmenta"
              width={300}
              height={400}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-10">
            {safetyItems.slice(3).map((item, index) => (
              <div key={index} className="text-left flex gap-4">
                <div className="space-y-2  max-w-xs">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.9498 9.59921C22.7623 9.41174 22.5079 9.30642 22.2428 9.30642C21.9776 9.30642 21.7233 9.41174 21.5358 9.59921L10.6438 20.5382C10.1795 21.0026 9.62829 21.3709 9.02164 21.6223C8.41499 21.8736 7.76478 22.003 7.10813 22.003C5.78197 22.0031 4.51008 21.4764 3.57228 20.5387C2.63447 19.601 2.10757 18.3292 2.10747 17.0031C2.10738 15.6769 2.63411 14.405 3.57178 13.4672L14.1208 2.87521C14.6849 2.3201 15.4455 2.01038 16.2369 2.01351C17.0283 2.01664 17.7864 2.33236 18.3461 2.89191C18.9058 3.45147 19.2217 4.20951 19.225 5.00092C19.2283 5.79233 18.9188 6.55299 18.3638 7.11721L7.81478 17.7092C7.62453 17.8915 7.37124 17.9932 7.10778 17.9932C6.84431 17.9932 6.59103 17.8915 6.40078 17.7092C6.21331 17.5217 6.10799 17.2674 6.10799 17.0022C6.10799 16.737 6.21331 16.4827 6.40078 16.2952L15.7928 6.86021C15.9749 6.67161 16.0757 6.419 16.0735 6.15681C16.0712 5.89461 15.966 5.6438 15.7806 5.45839C15.5952 5.27298 15.3444 5.16781 15.0822 5.16553C14.82 5.16326 14.5674 5.26405 14.3788 5.44621L4.98678 14.8812C4.70815 15.1598 4.48713 15.4905 4.33633 15.8545C4.18553 16.2186 4.10792 16.6087 4.10792 17.0027C4.10792 17.3967 4.18553 17.7869 4.33633 18.1509C4.48713 18.5149 4.70815 18.8456 4.98678 19.1242C5.5584 19.6697 6.31816 19.974 7.10828 19.974C7.8984 19.974 8.65816 19.6697 9.22978 19.1242L19.7778 8.53121C20.6958 7.58951 21.2058 6.32406 21.1974 5.00898C21.1889 3.6939 20.6627 2.43509 19.7328 1.50523C18.8028 0.575376 17.5439 0.0493539 16.2288 0.0411139C14.9137 0.0328739 13.6483 0.54308 12.7068 1.46121L2.15778 12.0532C0.844957 13.366 0.107422 15.1466 0.107422 17.0032C0.107422 18.8598 0.844957 20.6404 2.15778 21.9532C3.4706 23.266 5.25117 24.0036 7.10778 24.0036C8.96439 24.0036 10.745 23.266 12.0578 21.9532L22.9498 11.0172C23.0432 10.9243 23.1173 10.8138 23.1679 10.6921C23.2185 10.5705 23.2446 10.44 23.2446 10.3082C23.2446 10.1764 23.2185 10.046 23.1679 9.92429C23.1173 9.80261 23.0432 9.69214 22.9498 9.59921Z"
                      fill="#3A4F39"
                    />
                  </svg>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-gray-600 mt-12 text-sm">
          By fostering a culture of safety and responsibility, RG Creations Pvt.
          Ltd. not only protects its workforce but also guarantees peace of mind
          for our clients and partners throughout every stage of the design and
          construction process.
        </p>
      </section>

      <FAQ />
      <Deals />
    </main>
  );
}
