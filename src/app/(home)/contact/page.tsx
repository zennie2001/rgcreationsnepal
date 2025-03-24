import PageHeader from "@/components/PageHeader";
import Contact from "@/sections/Contact";
import {
  FaEnvelope,
  FaFacebookF,
  FaHeadset,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPinterest,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const contactInfos = [
  {
    logo: FaPhoneAlt,
    title: "Call us",
    subTitle: "Sun-Fri from 10am-5pm",
    contact: "+971 4324 772O",
  },
  {
    logo: FaEnvelope,
    title: "Mail us",
    subTitle: "We are here to help.",
    contact: "starlaxmi555@gmail.com",
  },
  {
    logo: FaLocationDot,
    title: "Visit us",
    subTitle: "Visit our office.",
    contact: "Locate us",
  },
];

const socialMedia = [
  {
    link: "facebook.com",
    icon: FaFacebookF,
  },
  {
    link: "instagram.com",
    icon: RiInstagramFill,
  },
  {
    link: "linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    link: "pinterest.com",
    icon: FaPinterest,
  },
];

const branches = [
  {
    branch: "Kathmandu Office",
    location: "Putalisadak Chowk-30,",
    postBox: "Kathmandu, P.O.B: 8927",
    number: "+977-1-4532334/4",
    mail: "info@rnc.edu.np",
  },
  {
    branch: "Bhaktapur Office",
    location: "Putalisadak Chowk-30,",
    postBox: "Kathmandu, P.O.B: 8927",
    number: "+977-1-4532334/4",
    mail: "info@rnc.edu.np",
  },
  {
    branch: "Itahari Office",
    location: "Putalisadak Chowk-30,",
    postBox: "Kathmandu, P.O.B: 8927",
    number: "+977-1-4532334/4",
    mail: "info@rnc.edu.np",
  },
];

export default function ContactUs() {
  return (
    <main className="w-full overflow-hidden">
      <PageHeader title="Contact Us" link="/contact" />
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:px-24 px-4 lg:py-16 py-10 gap-8">
        {contactInfos.map((info, index) => {
          return (
            <div
              key={index}
              className="flex flex-col col-span-1 gap-8 p-6 border border-text/30 rounded-md"
            >
              <div className="p-2 border border-text/30 rounded-md w-max">
                <info.logo className="size-6 text-secondary" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-secondary">{info.title}</p>
                  <p className="text-text text-sm">{info.subTitle}</p>
                </div>
                <div className="py-2 px-4 rounded-md border border-text/30 text-text w-max">
                  {info.contact}
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col col-span-1 gap-8 p-6 border border-text/30 rounded-md">
          <div className="p-2 border border-text/30 rounded-md w-max">
            <FaHeadset className="size-6 text-secondary" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-secondary">Give us a follow</p>
              <p className="text-text text-sm">Follow us in social medias.</p>
            </div>
            <div className="flex gap-3">
              {socialMedia.map((media, index) => (
                <a
                  key={index}
                  href={media.link}
                  target="_blank"
                  className="social rounded-full size-8 p-2 border border-text/30 text-secondary"
                >
                  <media.icon className="size-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Contact className="pt-0 pb-16" /> */}
      <div className="w-full flex_center h-max">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.390823710961!2d55.2927915!3d25.2645181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433fc32c0151%3A0xc280b5c494aa3428!2sAl%20Souq%20Al%20Kabeer%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2snp!4v1711382400000!5m2!1sen!2snp"
          loading="lazy"
          className="w-full h-[60vh]"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full flex lg:px-24 px-4 lg:py-16 py-10 gap-8">
        <div className="flex flex-wrap w-full gap-8">
          {branches.map((branch, index) => {
            return (
              <div key={index} className="flex flex-col gap-4 w-72">
                <h5 className="text-xl font-semibold text-secondary">
                  {branch.branch}
                </h5>
                <div className="flex flex-col">
                  <p className="text-text">{branch.location}</p>
                  <p className="text-text">{branch.postBox}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-tertiary">{branch.number}</p>
                  <p className="text-tertiary">{branch.mail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
