"use client"
import PageHeader from "@/components/PageHeader";



import mobileceoimage from '@/assets/images/event.svg';
import list from '@/assets/images/List.svg';
import map from '@/assets/images/Map.svg';
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import PrimaryButton from "@/components/UI/PrimaryButton";


const socialMedia = [
  {
    link: 'facebook.com',
    icon: FaFacebookF
  },
  {
    link: 'instagram.com',
    icon: RiInstagramFill
  },
  {
    link: 'linkedin.com',
    icon: FaLinkedinIn
  },
  {
    link: 'pinterest.com',
    icon: FaPinterest
  },
]
export default function EventDetails() {

  return (
    <main className="w-full max-w-[1740px] mx-auto">
      <PageHeader
        link="/event-details"
        title="Info Session on Fleming College"
      />

      <section className="xl:px-24 lg:px-10 px-4 lg:py-16 py-10 flex lg:flex-row flex-col justify-between lg:gap-0 gap-4">
        <div className="lg:w-[73%] w-full">
          <div className="w-full  rounded-sm lg:px-4 px-0">
            <Image
              src={mobileceoimage}
              alt="placeholder-image"
              className=""
            />
          </div>
          <div className=" w-full  mt-4  lg:px-4 px-0 py-5">
            <h1 className="text-secondary font-semibold text-3xl ">Event Description</h1>
            <p className="text-text pt-4">We are excited to announce that we are organizing an insightful study abroad session where you can explore opportunities in the USA, the UK, Australia, Canada, Denmark, Germany, and Japan. You will gain valuable insights on what and how to study abroad. Additionally, you have us to answer all your queries. This is your chance to get all your doubts cleared and plan your future with expert guidance.</p>
            <ul className="text-text list-disc px-5 mt-4">
              <li>Candidates listen to the recording just once before responding to the questions. </li>
              <li>Test-takers in the paper-based format have ten minutes to move their responses to the main answer sheet. </li>
              <li>After completing the listening test in computer-based format, individuals have two minutes to go over their responses. </li>

            </ul>


            <div className="mt-10">
              <p className="text-secondary font-semibold text-3xl">Event Venue & Gallery</p>
              <p className="text-text pt-4">We are excited to announce that we are organizing an insightful study abroad session where you can explore opportunities in the USA, the UK, Australia, Canada, Denmark, Germany, and Japan. You will gain valuable insights on what and how to study abroad. Additionally, you have us to answer all your queries. This is your chance to get all your doubts cleared and plan your future with expert guidance.</p>



            </div>
            <div className="mt-10">
              <p className="text-secondary font-semibold text-xl">About Company</p>
              <p className="text-text">Our team is driven by a shared vision of success, supported by a culture that values integrity, inclusivity, and continuous learning. We offer a dynamic work environment where creativity and ambition are celebrated, and employees are empowered to grow and achieve their career goals.
                Join us and be a part of a forward-thinking team dedicated to making a difference. Together, we build a brighter future.</p>
              <Image
                src={list}
                alt="placeholder-image"
                className="mt-5"
              />
              <Image
                src={map}
                alt="placeholder-image"
                className="mt-5"
              />
            </div>
            <div className="mt-10">
              <p className="text-secondary font-semibold text-3xl">Meet the Guest Speaker</p>
              <p className="text-text pt-4">We are excited to announce that we are organizing an insightful study abroad session where you can explore opportunities in the USA, the UK, Australia, Canada, Denmark, Germany, and Japan. You will gain valuable insights on what and how to study abroad. Additionally, you have us to answer all your queries. This is your chance to get all your doubts cleared and plan your future with expert guidance.</p>

              <div className="flex lg:flex-row flex-col border border-borderColor rounded items-center gap-4 mt-5 lg:w-[85%] w-full">
                <div className="h-[350px] w-[328px]">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover rounded-sm" />
                </div>
                <div className="flex flex-col gap-3 lg:w-[50%] w-full lg:items-start items-center">
                  <p className="font-semibold text-xl ">Raju Prasad Khanal</p>
                  <p className="text-text text-sm">Assistant Director of Swarthmore College</p>
                  <p className="text-text lg:text-start text-center">The CEO/Chairperson plays a pivotal role in steering the organization towards success and sustainability. Their work involves developing and executing the companys strategic vision.</p>
                  <div className="flex items-center gap-3">
                    {
                      socialMedia.map((media, index) => (
                        <a
                          key={index}
                          href={media.link}
                          target="_blank" 
                          className="social rounded-full size-8 p-1.5 border border-secondary"
                        >
                          <media.icon className="size-full" />
                        </a>
                      ))
                    }
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <section className="lg:w-[25%] w-full">
          <div className="border border-borderColor p-5">
            <p className="text-2xl font-semibold text-secondary">Event Details</p>
<p className="text-text py-3">Something Special Happening in Biratnagar!</p>
<p className="font-bold text-secondary">Date</p>
<p className="text-text text-sm">September 14, 2024</p>
<p className="font-bold text-secondary mt-4">Venue</p>
<p className="text-text text-sm">Nexon Learning and Consulting Services, Biratnagar-10</p>
<p className="font-bold text-secondary mt-4">Contact</p>
<p className="text-text text-sm">9820338158, 9827302716, <br /> 9820710459</p>
          </div>
          <div className="border border-borderColor mt-5 p-5">
            <p className="text-2xl font-semibold text-secondary">Event Registration</p>
            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                className="py-3 px-4 mt-3 w-full border rounded-md placeholder-text text-text"
                            />
                              <input
                                type="email"
                                placeholder="Email-address"
                                required
                                className="py-3 px-4 mt-3 w-full border rounded-md placeholder-text text-text"
                            />
                              <input
                                type="text"
                                placeholder="Phone Number"
                                required
                                className="py-3 px-4 mt-3 w-full border rounded-md placeholder-text text-text"
                            />
                            <PrimaryButton text="Register Now" className="w-full mt-3"/>
          </div>
        </section>
      </section>

    </main>
  )
}



