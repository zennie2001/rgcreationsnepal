const TestimonialCard = ({ name, description, image }: any) => (
  <section className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-[24px]">
    <div className="relative z-10 m-4 bg-gradient-to-br from-[#1f1f1f] to-[#121212] text-white px-8 py-10 rounded-[24px] max-w-4xl shadow-xl border border-neutral-800">
      <div className="text-secondary text-[80px] ">“</div>
      <p className="text-center text-sm sm:text-base italic leading-relaxed mb-8">
        {description}
      </p>
      <div className="flex flex-col items-center">
        <img
          src={image.src}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-secondary mb-2"
        />
        <h3 className="text-sm font-semibold uppercase tracking-wide">
          {name}
        </h3>
        <span className="text-xs text-gray-400">Verified Customer</span>
      </div>
    </div>
  </section>
);

export default TestimonialCard;
