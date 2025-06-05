import React from "react";

const clients = [
  { name: "Harshah Batika", logo: "/l1.png" },
  { name: "Taaj Palace", logo: "/l2.jpg" },
  { name: "Rambagh Mahal", logo: "/l3.png" },
  { name: "Royal Empire", logo: "/l4.jpg" },
  { name: "Déjà Vu", logo: "/l5.jpg" },
  { name: "Panas", logo: "/l6.jpg" },
];

const Deals: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-10">Our Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-black rounded-lg p-3 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className=" h-20 md:h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
