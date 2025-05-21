import home from "@/assets/images/blade-home.png";

const Hero = () => {
  return (
    <main className="bg-primary">
      <section className="md:relative flex flex-col-reverse w-full h-[85vh] container  text-white ">
        {/* Background Image with Overlay */}
        <div className="md:absolute  md:inset-0 md:left-[50%]">
          <img
            src={home.src}
            alt="Hero Background"
            className="w-full h-[98%] bg-primary object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6  md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left text-black">
            Built for Action.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-center md:text-left text-darkGreen mt-4">
            Designed to Impress.
          </h2>
          <p className="mt-6 max-w-xl text-sm md:text-base text-center md:text-left text-black">
            From sleek silhouettes to dependable mechanics, our automatic knives
            are the perfect fusion of style, safety, and speed.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="mt-8 w-max px-6 py-3 border-2  border-darkGreen text-black hover:bg-darkGreen hover:text-white transition rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
