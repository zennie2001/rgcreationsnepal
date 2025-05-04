import Image from "next/image";
import knifeImage from "@/assets/images/blade.png";

export default function About() {
  return (
    <main className=" bg-black">
      <section className="flex flex-col-reverse lg:flex-row w-full container text-white px-5 py-16 lg:px-0 lg:py-32 items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2  flex flex-col gap-6">
          <p className="text-[#FF5A1F] font-medium text-sm">About us</p>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
            Crafted with Vision, Honed with <br className="hidden sm:block" />
            Purpose, Carried with Confidence
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            At Swift-Action, we craft more than blades — we build tools that
            answer the call of speed, safety, and style. Every knife is a
            product of thoughtful engineering and bold design, made to perform
            when it matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 pt-4">
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Engineered with Purpose.</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                From concept to creation, every knife we produce reflects our
                commitment to quality, performance, and cutting-edge design.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-2">A Legacy of Precision</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Born from a deep respect for mechanics and form, we set out to
                redefine the automatic knife — delivering speed, safety, and
                style.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={knifeImage}
            alt="Crossed knives"
            className="w-[300px] sm:w-[400px] h-auto object-contain"
          />
        </div>
      </section>
    </main>
  );
}
