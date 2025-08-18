"use client"
import React from "react";
import Link from "next/link";

function SocialResponsibilites() {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      image: "/Award1_11zon.jpg",
      category: "News",
      title: "Blood Donation Program at Taaj Reception",
      description:
        "At RG Creations Nepal, we believe our responsibility goes beyond designing spaces—we strive to make a meaningful difference in people’s lives and the community we are part of. The initiative was made successful through the dedicated medical expertise of the Himal Blood Transfusion Center.",
      
      date: "20 Jan 2022",
      link: "/about/corporate-social-responsibility/blood-donation-program",
    },
    
  ];

  return (
    <section className="w-full bg-primary md:pt-10 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
         
            {/* <p className="text-[#133950] font-medium text-base md:text-lg text-center md:text-left mb-2">
              Blogs
            </p> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333d49] mb-2">
           Corporate Social Responsibility
          </h2>
           
            {/* <h2 className=" flex md:hidden text-xl md:text-3xl lg:text-4xl text-black font-semibold mb-2 text-center md:text-left ">
              The Edge Report: Stories,<br/>  Tips &Sharp Talk
            </h2> */}
          

          {/* <Link
            href="/blogs"
            className="bg-[#133950] hover:darkGreen text-white px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-14 rounded-md transition-all"
          >
            Learn More
          </Link> */}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((item, index)=>(
                <article key={index} className="group cursor-pointer h-full lg:h-[500px]">
                    
            <div className="relative rounded-sm h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 overflow-hidden z-10 rounded-sm"></div>

              {/* Image */}
              <img
                src={item.image}
                alt='The Leading Architecture and Construction Company'
                className="
                  w-[276.6946105957031px] h-[439px]
                  sm:w-[276.6946105957031px] sm:h-[439px]
                  md:w-full md:h-full
                  mx-auto
                  object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm
                "
              />

              {/* Overlay Content */}
              
              <div className="absolute top-1/2  left-16 transform -translate-y-1/2 text-white rounded-sm max-w-md z-20">
               
                <div className="lg:border-[16px] border-[#133950] py-6 lg:pl-6  lg:pr-6 pr-1 ">
                  <Link href={item.link}>
                  <h3 className="text-2xl font-bold  leading-tight mb-4">
                    {item.title}
                  </h3>
                  </Link>
                  <Link href={item.link}>
                  <p className="text-sm hidden lg:block pb-4  opacity-90 leading-relaxed mb-4">
                      {item.description}
                  </p>
                  </Link>
                  <Link href={item.link}>
                  <button className="text-xs font-medium mt-8 tracking-widest hover:underline">
                    READ MORE
                  </button>
                  </Link>
                </div>
              </div>
             
            </div>
            
          </article>
            ))}
           
        </div>
      </div>
    </section>
  );
}

// This is just the interface for the blog card that will be imported
// The actual implementation will be in a separate file
export default SocialResponsibilites;
