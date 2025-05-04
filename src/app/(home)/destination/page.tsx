import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import Contact from "@/sections/Contact";
import Link from "next/link";

const countries = [
  {
    title: "USA",
    link: "/destination/usa",
  },
  {
    title: "UK",
    link: "/destination/usa",
  },
  {
    title: "Australia",
    link: "/destination/usa",
  },
  {
    title: "Canada",
    link: "/destination/usa",
  },
  {
    title: "Japan",
    link: "/destination/usa",
  },
  {
    title: "Germany",
    link: "/destination/usa",
  },
  {
    title: "Denmark",
    link: "/destination/usa",
  },
  {
    title: "France",
    link: "/destination/usa",
  },
];

export default function Destination() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader link="'destination" title="Destination" />
      <section className="w-full flex_center flex-col lg:px-24 px-4 py-16 gap-12">
        <div className="flex_center lg:flex-row flex-col gap-8 w-full">
          <div className="flex lg:w-1/2 w-full">
            <SectionHeader
              smallTitle="Destinations"
              title="Make Your Choice for the Preferred Nation"
              className="lg:items-start items-center"
            />
          </div>
          <div className="flex lg:w-1/2 w-full">
            <p className="text-text lg:text-start text-center">
              Reaction Nepal is a government-registered interdisciplinary
              organization with its headquarters in Putalisadak, Kathmandu,
              Nepal. Choosing the ideal destination for study is a pivotal
              decision that can shape the trajectory of your career.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-8 gap-3 w-full">
          {countries.map((country, index) => {
            return (
              <Link
                href={country.link}
                key={index}
                className="flex items-center gap-6 p-6 rounded-md border border-text/30 col-span-1 w-full"
              >
                <div className="flex_center flag size-12 rounded-full border border-text"></div>
                <h5 className="text-xl font-bold">{country.title}</h5>
              </Link>
            );
          })}
        </div>
      </section>
      {/* <Contact
                className="pt-0 pb-16"
            /> */}
    </main>
  );
}
