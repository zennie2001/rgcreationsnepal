import PrimaryButton from "@/components/UI/PrimaryButton";
import SectionHeader from "./SectionHeader";
import contactImage from '@/assets/images/contactImage.png';
import Image from "next/image";

export default function Contact() {
    return (
        <section className="w-full flex_center px-24 pt-24">
            <div className="flex_center p-20 gap-20 w-full bg-[#F5FBFF] rounded-md">
                <div className="w-[50%] flex_center flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <SectionHeader
                            smallTitle="Contact Us"
                            title="Schedule a Free Counseling Consultation"
                            className="items-start"
                        />
                        <p className="text-text">
                            Fill out the form below, and we&apos;ll be in touch to arrange a consultation at a time most suitable for you.
                        </p>
                    </div>
                    <form className="w-full flex_center flex-col gap-7">
                        <div className="flex_center gap-6 w-full">
                            <input
                                type="text"
                                placeholder="Fullname"
                                required
                                className="py-3 px-4 w-full rounded-md placeholder-text text-text"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                className="py-3 px-4 w-full rounded-md placeholder-text text-text"
                            />
                        </div>
                        <div className="flex_center gap-6 w-full">
                            <input
                                type="number"
                                placeholder="Number"
                                required
                                className="py-3 px-4 w-full rounded-md placeholder-text text-text"
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                required
                                className="py-3 px-4 w-full rounded-md placeholder-text text-text"
                            />
                        </div>
                        <div className="flex_center gap-6 w-full">
                            <input
                                type="text"
                                placeholder="Appointment Date"
                                required
                                className="py-3 px-4 w-1/2 rounded-md placeholder-text text-text"
                            />
                            <input
                                type="text"
                                placeholder="Appointment Time"
                                required
                                className="py-3 px-4 w-1/2 rounded-md placeholder-text text-text"
                            />
                        </div>
                        <select
                            name="courses"
                            id="courses"
                            className='rounded-md w-full py-3 px-4 text-text'
                        >
                            <option
                                value={''}
                            >
                                Choose a place to study
                            </option>
                            <option
                                value={'Australia'}
                            >
                                Australia
                            </option>
                            <option
                                value={'Canada'}
                            >
                                Canada
                            </option>
                            <option
                                value={'UK'}
                            >
                                UK
                            </option>
                            <option
                                value={'Germany'}
                            >
                                Germany
                            </option>
                        </select>
                        <div className="flex items-center w-full">
                            <input type="checkbox" id="terms" className="mr-2" required />
                            <label
                                htmlFor="terms"
                                className="text-sm text-text"
                            >
                                I understand and agree to privacy policy
                            </label>
                        </div>
                    </form>
                    <PrimaryButton
                        text="Make a Reservation"
                        className="w-full"
                    />
                </div>
                <div className="w-[50%] flex_center flex-col">
                    <Image src={contactImage} alt="contact-image" className="w-full h-[628px] object-cover" />
                </div>
            </div>
        </section>
    )
}