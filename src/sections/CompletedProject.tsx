"use client";

import { useRouter } from "next/navigation";

const CompletedProjects = () => {

  const router = useRouter();

  // ✅ Single array for all images
  const projects = [
    {
      id: 1,
      slug: "rambagh-mahal",
      category: "Image",
      image: "/rambagh.jpg",
      title: "Rambagh Mahal",
      description:
        "Rambagh Mahal is one of the largest and most luxurious banquet venues, designed to make your special occasions unforgettable. With a seating capacity of up to 2000 guests, our grand banquet hall provides ample parking space for your convenience. Spanning a total area of 22,000 sq. ft., our venue features a stunning 15,000 sq. ft. main hall, a 7,000 sq. ft. upstairs mini hall, and an expansive 10,000 sq. ft. outdoor garden area, offering the perfect setting for any event.",
    },
    {
      id: 2,
      slug:"harshah-batika",
      category: "Image",
      image: "/media1.jpg",
      title: "Harshah Batika",
      description:
        "Harshah Batika is a serene and family- friendly party venue in Kathmandu, spanning over 11 ropani of land. It features a charming Neo-Classical architectural design, making it ideal for various events, including corporate meetings and weddings. With elegant interiors and state-of-the-art facilities, it promises meticulous planning and exceptional service for an unforgettable experience.",
    },
    {
      id: 4,
      slug:"royal-empire-boutique-hotel",
      category: "Image",
      image: "/ImageVideo/Image4.jpg",
      title: "Royal Empire Boutique Hotel",
      description:
        "Royal Empire Boutique Hotel is the ideal choice for a memorable stay in the vibrant city of Kathmandu. As you step into the hotel, you will be greeted by a warm and friendly staff, ready to cater to your every need. With a total of 15 well-appointed rooms, each thoughtfully designed to provide a tranquil oasis amidst the bustling city, you are guaranteed a peaceful and restful night's sleep. The rooms are tastefully decorated with modern amenities and feature comfortable beds, ensuring that you wake up refreshed and ready to explore all that Kathmandu has to offer. "
    },
    {
      id: 5,
      slug:"club-deja-vu",
      category: "Image",
      image: "/ImageVideo/Image5.jpg",
      title: "Club Deja vu",
      description:
        "Déjà Vu Lounge, located in Durbar Marg, Kathmandu, offers a vibrant nightlife experience with a dance club atmosphere and gourmet dining. As an upscale venue, it caters to locals and tourists seeking memorable evenings. With a focus on entertainment and special events, Déjà Vu Lounge promotes active engagement on social media, showcasing its inviting ambiance and upcoming nightlife happenings.",
    },
    {
      id: 6,
      slug:"magestic-grand-nepal",
      category: "Image",
      image: "/about/majestic.jpg",
      title: "Majestic Grand Nepal",
      description:
        "The Majestic Grand is a beautifully designed banquet hall ideal for special occasions. It features elegant decor and a charming ambiance, enhancing the overall experience for guests. With convenient access to nearby attractions, the venue offers comprehensive event planning assistance, catering, and transportation arrangements, ensuring that each celebration is memorable and fits within budget.",
    },
    {
      id: 7,
      slug:"boudha-heritage",
      category: "Image",
      image: "/bouddha.jpg",
      title: "Boudha Heritage",
      description:
        "Boudha Heritage in Kathmandu is a versatile venue perfect for weddings, receptions, and intimate gatherings, blending cultural richness with serenity. It offers various event services, including anniversaries and rice feeding ceremonies, fostering memorable celebrations. For bookings and inquiries, contact them via email or phone. The venue also shares visual highlights of recent events on social media, showcasing its unique charm.",
    },
    {
      id: 8,
       slug:"imperial-banquet",
      category: "Image",
      image: "/media2.jpeg",
      title: "Imperial Banquet",
      description:
        "The Imperial Banquet is an opulent feast held to celebrate significant events or dignitaries in a monarchy. Attendees included nobility and esteemed guests, with an extravagant menu showcasing rare delicacies and fine wines. The banquet featured artistic presentations, performances, and elaborate decorations, reflecting the empire's wealth and cultural heritage. It served both as a diplomatic gesture and a display of power and prestige."
    },
    {
      id: 9,
      slug:"taaj-reception",
      category: "Image",
      image: "/ImageVideo/Image9.jpg",
      title: "Taaj Reception",
      description:
        "Taaj Reception, located in Baluwatar, Kathmandu, offers an opulent ballroom and customizable event spaces perfect for weddings and special occasions. The venue features a dedicated professional team, state-of- the-art amenities, and flexible catering options to suit various budgets. With its elegant ambiance and prime location, Taaj Reception aims to create unforgettable experiences for guests and hosts alike.",
    },
    {
      id: 10,
      slug:"faces-lounge",
      category: "Image",
      image: "/faces.jpg",
      title: "Faces Lounge",
      description:
        "A stylish urban lounge that blends comfort, ambiance, and design. Faces Lounge is a popular social spot known for its inviting interiors, vibrant vibe, and focus on experience-based design elements.",
    },
    {
      id: 11,
      slug:"victory-lounge",
      category: "Image",
      image: "/victory.jpg",
      title: "Victory Lounge",
      description:
        "Victory Lounge is a high-end lounge bar project focused on luxury entertainment. With bold lighting, plush seating, and signature design features, it offers an elite experience for the nightlife crowd.",
    },
    {
      id: 12,
      slug:"station-pub",
      category: "Image",
      image: "/station.jpg",
      title: "Station Pub",
      description:
        "Designed with an industrial-modern aesthetic, Station Pub is a lively urban venue ideal for casual hangouts and weekend get-togethers. The design prioritizes functionality, edgy visuals, and a vibrant atmosphere.",
    },
     {
      id: 13,
      slug:"panas-banquet-event-hall",
      category: "Image",
      image: "/panas.jpg",
      title: "Panas Banquet and Event Hall",
      description:
        "A multifunctional event venue with modern design sensibilities, Panas Banquet is suitable for weddings, social gatherings, and business functions. Its flexible layout and elegant finish make it a favorite for diverse occasions.",
    },
  ];

  return (
    <div>
      <section className="w-full py-24 mb-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-0 relative z-20">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Completed Projects
              </h2>
              <div className="w-16 h-1 bg-[#244d4d]"></div>
            </div>
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-lg shadow hover:shadow-lg cursor-pointer transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[550px] object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div
                 onClick={() =>
                  router.push(
                    `/projectss/rg-creations-completed-projects/${project.slug}`
                  )
                }
                 className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 flex flex-col justify-center items-center p-4">
                  <div className="opacity-0 group-hover:opacity-100 text-center transition duration-300">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {project.description}
                    </p>
                    <p className="text-gray-200 text-sm  pt-12">
                      Read More
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompletedProjects;
