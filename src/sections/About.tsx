import Image from "next/image";
import knifeImage from "@/assets/images/image-about.jpg";

export default function About() {
  return (
    <main className=" bg-primary">
      <section className="flex flex-col lg:flex-row w-full container text-white px-5 py-10 lg:px-0 lg:py-16  gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2  flex flex-col gap-6">
          <p className="text-darkGreen md:text-left text-center font-medium text-base md:text-lg -mb-4">About us</p>
          <h2 className="text-xl text-black sm:text-3xl md:text-4xl md:text-left text-center font-medium ">
            Crafted with Vision, Honed with <br className="hidden sm:block" />
            Purpose, Carried with Confidence
          </h2>
          <p className="text-black text-[13px] md:text-base md:text-left text-center leading-relaxed">
            At Swift-Action, we craft more than blades — we build tools that
            answer the call of speed, safety, and style. Every knife is a
            product of thoughtful engineering and bold design, made to perform
            when it matters most.
          </p>
          <div className="flex flex-col md:text-left text-black text-center sm:flex-row gap-8 pt-4">
            <div className="flex-1">
              <h4 className="font-semibold  mb-2">Engineered with Purpose.</h4>
              <p className="text-black  text-[13px] leading-relaxed">
                From concept to creation, every knife we produce reflects our
                commitment to quality, performance, and cutting-edge design.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-2">A Legacy of Precision</h4>
              <p className="text-black text-[13px] leading-relaxed">
                Born from a deep respect for mechanics and form, we set out to
                redefine the automatic knife — delivering speed, safety, and
                style.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center rounded-lg">
          <Image
            src={knifeImage}
            alt="Crossed knives"
            className="w-[300px] sm:w-full rounded-lg h-[90%] object-cover"
          />
        </div>
      </section>
    </main>
  );
}
