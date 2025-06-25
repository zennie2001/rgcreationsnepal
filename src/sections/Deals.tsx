import React from "react";

const clients = [
  { name: "Harshah Batika", logo: "/logo (1).png" },
  { name: "Taaj Palace", logo: "/logo (2).png" },
  { name: "Rambagh Mahal", logo: "/logo (3).png"},
  { name: "Royal Empire", logo: "/logo (4).png" },
  { name: "Déjà Vu", logo: "/logo (5).png" },
 
];

const Deals: React.FC = () => {
  return (
    <section className="md:py-16 py-6 bg-white">
      <div className="container mx-auto px-4 text-center">
       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className=" rounded-lg p-3 flex items-center justify-center hover:scale-105 transition-transform duration-300"
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
