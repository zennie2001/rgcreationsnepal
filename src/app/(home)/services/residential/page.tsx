import NewPageHeader from "@/components/NewPageHeader";
import About from "@/sections/About";
import BlogDesign from "@/sections/Blog";
import MissionSection from "@/sections/Mission";
import NewsLetter from "@/sections/NewsLetter";
import Image from "next/image";
import React from "react";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import Services from "@/sections/Services";

export default function RGMission() {
  return (
    <main>
      <NewPageHeader title="Residential Construction" />
      <div className="container mx-auto w-full py-10 bg-white">
        {/* Top Section */}

       
        <Services />
      </div>
    </main>
  );
}
