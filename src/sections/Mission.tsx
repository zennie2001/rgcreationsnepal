import React from 'react';
import { Mail, TrendingUp, Edit3, Grid3X3 } from 'lucide-react';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'bottom-center';
}

const MissionSection: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Luxurious Quality and Craftmanship",
      description: "We aim to be pioneers in architectural innovation, crafting distinctive and opulent spaces that reflect the highest standards of uniqueness and creativity.",
      position: "top-left"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Customer-Centric Approach",
      description: "Our mission is centered around understanding the unique aspirations of our clients, tailoring our projects to their desires, and creating spaces that resonate with their vision of luxury and sophistication.",
      position: "top-right"
    },
    {
      icon: <Edit3 className="w-6 h-6 text-white" />,
      title: "Technological Advancements",
      description: "We commit to integrating the latest technologies and materials, ensuring that our constructions are at the forefront of innovation, efficiency, and sustainability.",
      position: "bottom-left"
    },
    {
      icon: <Grid3X3 className="w-6 h-6 text-white" />,
      title: "Building Trust, Building Quality",
      description: "At RG Creations, we aim to build not only structures but lasting relationships with our clients. We prioritize quality, efficiency, and trust in every phase of our construction process.",
      position: "bottom-right"
    }
  ];

  const centerFeature: FeatureCard = {
    icon: <Grid3X3 className="w-6 h-6 text-white" />,
    title: "Where Vision Meets Precision",
    description: "Our mission is to combine client vision with our construction expertise to create functional, aesthetic, and durable buildings that exceed expectations.",
    position: "bottom-center"
  };

  return (
    <section className="py-20 w-full relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-darkGreen text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            OUR MISSION
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Gain more insight into how people use your
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Our construction company endeavors to be synonymous with opulence, quality construction for residential and commercial, and 
            innovation, leaving an indelible mark on the world of construction with projects that exude timeless sophistication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="relative max-w-7xl mx-auto">
          {/* Central Image */}
          <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-80 h-96 lg:w-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/royal.jpg" 
                alt="Luxury Building" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-32 lg:pt-0">
            {/* Top Left */}
            <div className="lg:pr-48 lg:pt-16">
              <div className="flex flex-col items-center  text-center ">
                <div className="w-12 h-12 bg-darkGreen rounded-lg flex items-center justify-center mb-4">
                  {features[0].icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {features[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm">
                  {features[0].description}
                </p>
              </div>
            </div>

            {/* Top Right */}
            <div className="lg:pl-48 lg:pt-16">
              <div className="flex flex-col items-center  text-center ">
                <div className="w-12 h-12 bg-darkGreen rounded-lg flex items-center justify-center mb-4">
                  {features[1].icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {features[1].title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm">
                  {features[1].description}
                </p>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="lg:pr-48 ">
              <div className="flex flex-col items-center  text-center ">
                <div className="w-12 h-12 bg-darkGreen rounded-lg flex items-center justify-center mb-4">
                  {features[2].icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {features[2].title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm">
                  {features[2].description}
                </p>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="lg:pl-48">
              <div className="flex flex-col items-center  text-center ">
                <div className="w-12 h-12 bg-darkGreen rounded-lg flex items-center justify-center mb-4">
                  {features[3].icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {features[3].title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Center Feature */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center">
              <div className="w-12 h-12 bg-darkGreen rounded-lg flex items-center justify-center mb-4">
                {centerFeature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {centerFeature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-md">
                {centerFeature.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;