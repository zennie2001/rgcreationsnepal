import home from "@/assets/images/home.jpg";

const Hero = () => {
  return (
    <main className="bg-black">
      <section className="relative w-full h-[100vh] container  text-white ">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 left-[40%]">
          <img
            src={home.src}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6  md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Built for Action.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mt-4">
            Designed to Impress.
          </h2>
          <p className="mt-6 max-w-xl text-sm md:text-base text-gray-200">
            From sleek silhouettes to dependable mechanics, our automatic knives
            are the perfect fusion of style, safety, and speed.
          </p>
          <button className="mt-8 w-max px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition rounded">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
