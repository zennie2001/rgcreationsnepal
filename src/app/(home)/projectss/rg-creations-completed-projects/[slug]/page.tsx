

import Image from "next/image";
import React from "react";
import { projects } from "@/constants/completedData";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | RG Creations Nepal",
      description: "The requested project does not exist. Explore other projects by RG Creations Nepal.",
    };
  }

  return {
    title: `${project.name} | RG Creations Nepal`,
    description: `${project.description1.slice(0, 160)}${project.description1.length > 160 ? "..." : ""} Explore project details, location, client, and gallery.`,
  };
}


type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await  params;

  // Find the project by slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
    <div className="overflow-hidden min-h-screen flex flex-col md:mb-32 mb-4 gap-16">
      {/* Hero images and video */}
      <div className="w-full flex flex-col justify-center gap-20">
        <div className="relative w-full h-screen text-white">
          {/* Background Image */}
          <Image
            src={`${project.bgImg}`}
            alt={project.name}
            fill
            className="object-cover z-0"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6">
            <div className="text-center border-b-2 w-[500px] mb-8">
              <p className="uppercase tracking-wider text-base font-medium mb-4">
                Projects
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider leading-loose max-w-3xl">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Video section */}
        {project.video && (
        <div className="lg:px-[215px] lg:py-18 px-4">
          <div className="w-full lg:h-[500px] h-[350px] rounded-lg overflow-hidden relative shadow-lg">
            {/* YouTube iframe */}
            <iframe
              className="w-full h-full"
              src={project.video}
              title={project.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        )}
      </div>

      

      {/* Content and sidebar */}
      <div className="lg:px-[215px] px-8 flex justify-between lg:flex-row flex-col gap-16">
        {/* Description area */}
        <div className="lg:w-[60%] w-full flex flex-col gap-8">
          <div>
            <h2 className="font-semibold text-lg md:text-xl mb-2">
              {project.name}
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {project.description1}
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base md:text-lg mb-2">
              More About Project
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {project.description2}
            </p>
          </div>

           <div>
            <h2 className="font-semibold text-base md:text-lg mb-2">
              Learn More & Make Reservations
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Explore detailed information—including venue features, gallery, packages, and booking options—on their official website:&emsp; 
              <span>
                  <a 
                  href={project.website}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {project.name}
                </a>
              </span>
            </p>
          </div>
        </div>

        {/* Sidebar with project details */}
        <aside className="lg:w-[30%] w-full bg-white shadow-md rounded-b-lg  text-gray-900 self-start">
          <h3 className="text-white bg-[#133950] py-6 font-bold text-center">
            Project Details
          </h3>
          <dl className="divide-y-2 divide-[#244D4D] bg-gray-100 px-6 rounded-b-lg">
            <div className="py-3 flex flex-col">
              <dt className="font-semibold text-sm">Client</dt>
              <dd className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                {project.name}
              </dd>
            </div>

            <div className="py-3 flex flex-col">
              <dt className="font-semibold text-sm">Location</dt>
              <dd className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                {project.location}
              </dd>
            </div>

            <div className="py-4 flex flex-col">
              <dt className="font-semibold text-sm">Category</dt>
              <dd className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                {project.category}
              </dd>
            </div>

            <div className="py-3 flex flex-col">
              <dt className="font-semibold text-sm">Contact</dt>
              <dd className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                {project.contact}
              </dd>
            </div>

            <div className="py-3 flex flex-col">
              <dt className="font-semibold text-sm">Project Demand</dt>
              <dd className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                {project.projectDemand}
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      {/* Optional Image Gallery Section */}
       {Array.isArray(project.images) && project.images.length > 0 && (

          <div className="px-4 lg:px-[215px] flex flex-col gap-6">
            <h2 className="text-xl font-semibold border-b pb-2">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((img, index) => (
                <div key={index} className="w-full">
                  <Image
                    src={img}
                    alt={`Project Image ${index + 1}`}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-md object-cover w-full h-64"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

    </div>
    </>
  );
}
