import AboutCaseHero from "@/sections/AboutCaseHero";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Case Studies | Architecture & Design Projects in Nepal",
  description:
    "Explore detailed case studies of RG Creations Nepal’s standout projects in architecture, interior design, and hospitality. See how our designs come to life through innovation, sustainability, and craftsmanship.",
};

export default function page() {
  return (
    <>
     <Script
      id="case-studies-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "url": "https://www.rgcreationsnepal.com/about/case-studies",
          "name": "Case Studies - RG Creations Nepal Pvt. Ltd.",
          "description": "Detailed case studies showcasing RG Creations Nepal Pvt. Ltd.'s successful architecture and construction projects, highlighting innovation, client satisfaction, and sustainable design across Nepal.",
          "mainEntity": {
            "@type": "Organization",
            "name": "RG Creations Nepal Pvt. Ltd.",
            "url": "https://www.rgcreationsnepal.com",
            "logo": "https://www.rgcreationsnepal.com/logo.png",
            "description": "RG Creations Nepal is a leading architecture and construction firm known for innovative, sustainable, and client-focused projects delivered throughout Nepal.",
            "hasPart": [
              {
                "@type": "CreativeWork",
                "name": "Luxury Resort Development",
                "description": "Comprehensive architectural and construction services delivered for a premier luxury resort, integrating sustainable design and smart technology."
              },
              {
                "@type": "CreativeWork",
                "name": "Banquet Hall Renovation",
                "description": "Successful renovation project improving aesthetics, acoustics, and functionality for a top banquet hall in Kathmandu."
              },
              {
                "@type": "CreativeWork",
                "name": "Nightclub Interior Design",
                "description": "Innovative lighting and acoustics design creating immersive guest experiences in a high-profile Kathmandu nightclub."
              }
            ]
          },
          "publisher": {
            "@type": "Organization",
            "name": "RG Creations Nepal Pvt. Ltd.",
            "url": "https://www.rgcreationsnepal.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.rgcreationsnepal.com/logo.png"
            }
          }
        }),
      }}
    />

     <main className="overflow-hidden">
      
      <AboutCaseHero />

      <div className="bg-white text-gray-800 px-6 lg:px-20 py-12 space-y-12 pb-44">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-[#333d49] mb-4">Case Study: Rambagh Mahal</h2>
        <div className="w-24 h-1 bg-gray-700 mx-auto mb-4 rounded-full" />
        <p className="text-xl font-medium text-gray-600">
          Transforming a Vision of Royalty into a Landmark of Luxury
        </p>
      </div>

      {/* Project Info + Background Section */}
<div className="flex flex-col md:flex-row justify-between gap-10 items-start">
  {/* Left: Text Content */}
  <div className="md:w-1/2 space-y-8">
    {/* Project Info */}
    <div className="text-2xl space-y-4 md:py-12">
      <p><strong>Client:</strong> Rambagh Mahal</p>
      <p><strong>Location:</strong> Rambagh Mahal Bhanimandal, Lalitpur, Nepal</p>
      <p><strong>Scope:</strong> Full Construction, Interior Design & Branding</p>
      <p><strong>Completed By:</strong> RG Creations Nepal Pvt. Ltd.</p>
    </div>

    {/* Project Background */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold border-b pb-2">Project Background</h2>
      <p>
        Rambagh Mahal was envisioned as a one-of-a-kind venue in Nepal—a luxury banquet hall and party palace built to host grand celebrations, royal weddings, and high-profile events. The client’s goal was to create an architectural marvel inspired by the royal palaces of Rajasthan and Mughal design while incorporating all the functionalities and comforts expected in a modern hospitality venue.
      </p>
      <p>
        RG Creations Nepal Pvt. Ltd., known for its expertise in banquet hall construction in Nepal, interior design, and turnkey project management, was brought on board as the lead execution partner. Our multidisciplinary team worked across design, architecture, branding, and project delivery to bring Rambagh Mahal to life.
      </p>
    </div>

       {/* Phase 1 */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Phase 1: Architectural Design & Construction</h2>
        <p>
          We started with comprehensive planning that aligned structural integrity with traditional palace aesthetics. As one of the top party palace construction companies in Nepal, we developed the entire structure from the ground up, ensuring it was both visually iconic and structurally sound.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Grand Dome and Archways:</strong> Inspired by Indian heritage architecture, these features became the visual centerpiece of the venue.</li>
          <li><strong>Earthquake-Resistant RCC Frame:</strong> Engineered for durability and local safety standards.</li>
          <li><strong>Ornamental Exteriors:</strong> Custom-carved jharokhas, sandstone textures, and intricate exterior moldings.</li>
          <li><strong>Expansive Main Hall:</strong> A pillar-less span offering unobstructed views, perfect for large gatherings.</li>
          <li><strong>Smart Space Planning:</strong> Included dedicated kitchen zones, green rooms, storage areas, and accessible restrooms.</li>
        </ul>
      </div>
  </div>

  {/* Right: 3 Images Stacked */}
  <div className="md:w-1/3 flex flex-col gap-4">
    <img
      src="/rambagh.jpg"
      alt="Rambagh Image 1"
      className="rounded-xl shadow-md w-full object-cover aspect-[4/3]"
    />
    <img
      src="/ImageVideo/2(5).jpg"
      alt="Rambagh Image 2"
      className="rounded-xl shadow-md w-full object-cover aspect-[4/3]"
    />
    <img
      src="/ImageVideo/1(10).jpg"
      alt="Rambagh Image 3"
      className="rounded-xl shadow-md w-full object-cover aspect-[4/3]"
    />
  </div>
</div>


   

      {/* Interior Design */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Phase 2: Interior Design – Where Tradition Meets Modern Luxury</h2>
        <p>
          Our next focus was crafting a sensory-rich interior that evoked a royal ambience. As one of the best interior designers in Nepal, our approach combined handcrafted details with high-end materials and smart space functionality.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Custom Woodwork & Furniture:</strong> Locally sourced hardwood with hand-carved details.</li>
          <li><strong>Luxurious Textiles:</strong> Brocade and velvet drapery, gold-accented cushions, and upholstered furniture.</li>
          <li><strong>Marble & Mosaic Flooring:</strong> Designed in traditional geometric patterns with polished finishes.</li>
          <li><strong>Lighting Design:</strong> Imported chandeliers, LED accent lighting, and wall-mounted heritage sconces.</li>
          <li><strong>Bridal Suite & VIP Lounge:</strong> Designed for comfort, beauty prep, and private family interactions during events.</li>
          <li><strong>Designer Ceiling Work:</strong> Gypsum and wood panel mix with mirror and gold foiling in key areas.</li>
        </ul>
        <p>
          The entire interior was designed to leave a lasting impression, whether for wedding guests, event planners, or photo ops.
        </p>
      </div>

      {/* Branding */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Phase 3: Branding & Visual Identity</h2>
        <p>
          To ensure Rambagh Mahal stood out not only in design but also in perception, RG Creations delivered a full suite of branding services. We worked closely with the client to build a visual brand identity that aligned with the elegance of the venue.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Royal Logo & Theme:</strong> A visual system using peacocks, crowns, domes, and heritage fonts.</li>
          <li><strong>Entrance Signage & Wall Branding:</strong> Designed to be photo-worthy while remaining directional.</li>
          <li><strong>Printed Collateral:</strong> Business cards, brochures, booking folders, and event invitation templates.</li>
          <li><strong>Interior Signage & Room Naming:</strong> Custom-made brass nameplates and wayfinding signs.</li>
          <li><strong>Social Media Launch Kit:</strong> Graphics and templates for promotions and venue bookings.</li>
        </ul>
      </div>

      {/* Challenges & Solutions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Challenges & Solutions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Challenge:</strong> Balancing royal aesthetics with modern event utility</p>
            <p><strong>Our Solution:</strong> Smart layout design + functional zoning without compromising elegance</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Challenge:</strong> Acoustic treatment for high-noise events</p>
            <p><strong>Our Solution:</strong> Soundproofing in walls and acoustic ceiling panels</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Challenge:</strong> Working with custom finishes on tight timelines</p>
            <p><strong>Our Solution:</strong> Engaged local artisans alongside our project managers for speed and quality</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Challenge:</strong> Branding that matched the physical ambience</p>
            <p><strong>Our Solution:</strong> Developed theme-driven visuals tied directly to architectural cues</p>
          </div>
        </div>
      </div>
    </div>

        <div className="bg-white text-gray-800 px-6 lg:px-20 py-12 space-y-12 pb-24">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-[#333d49] mb-4">Case Study: Harsa Batika</h2>
        <div className="w-24 h-1 bg-gray-700 mx-auto mb-4 rounded-full" />
        <p className="text-xl font-medium text-gray-600">
          A Celebration of Elegance in Nature
        </p>
      </div>

{/* Project Info + Overview + Architecture Section */}
<div className="flex flex-col md:flex-row justify-between gap-10 items-start">
  {/* Left: Text Content */}
  <div className="md:w-1/2 space-y-10">
    {/* Project Info */}
    <div className="text-2xl space-y-4 md:py-12">
      <p><strong>Client:</strong> Harsa Batika</p>
      <p><strong>Location:</strong> Lalitpur, Nepal</p>
      <p><strong>Scope:</strong> Complete Construction, Landscape Design, Interior Styling, and Branding</p>
      <p><strong>Executed By:</strong> RG Creations Nepal Pvt. Ltd.</p>
      <p><strong>Project Type:</strong> Outdoor-Inspired Banquet Venue & Event Space</p>
    </div>

    {/* Project Overview */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold border-b pb-2">Project Overview</h2>
      <p>
        Harsa Batika is a unique event destination that blends natural elements with refined architecture. Conceptualized as a garden-style banquet and celebration space, it was designed to host weddings, receptions, corporate gatherings, and lifestyle events in a peaceful yet luxurious atmosphere.
      </p>
      <p>
        RG Creations Nepal was entrusted with designing and delivering the entire project — from civil structure and landscaping to interior detailing and brand identity creation. Our goal was to create an event space that felt open, organic, and premium — a refreshing alternative to traditional closed banquet halls.
      </p>
    </div>

    {/* Construction & Architecture */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold border-b pb-2">Construction & Architectural Vision</h2>
      <p>
        The design concept revolved around merging indoor functionality with outdoor ambiance. RG Creations crafted structural designs that support large-scale events while preserving a natural, open-air experience.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Elegant pavilion-style halls</strong> with open beams and high ceilings</li>
        <li><strong>Durable yet elegant exterior flooring</strong> for garden paths and seating areas</li>
        <li><strong>Rain-ready roofing</strong> with proper drainage to ensure year-round use</li>
        <li><strong>Wide, open landscape zones</strong> for photoshoots, ceremonies, and guest mingling</li>
        <li><strong>Seamless transition</strong> from indoor to outdoor zones</li>
      </ul>
      <p>
        Our civil and architectural team coordinated closely with horticulturists and landscape designers to ensure the greenery thrives without interfering with infrastructure.
      </p>
    </div>
  </div>

  {/* Right: 3 Smaller Images Stacked */}
  <div className="md:w-1/3 flex flex-col gap-4">
    <img
      src="/harsa-batika-new.jpg"
      alt="Harsa Batika 1"
      className="rounded-xl shadow-md w-full object-cover aspect-[4/3]"
    />
    <img
      src="/harsa-batika2.jpg"
      alt="Harsa Batika 2"
      className="rounded-xl shadow-md w-full object-cover aspect-[4/3]"
    />
    <img
      src="/harshah.jpg"
      alt="Harsa Batika 3"
      className="rounded-xl shadow-md w-full object-cover aspect-[4/3]"
    />
  </div>
</div>


      {/* Landscaping */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Landscaping & Natural Aesthetics</h2>
        <p>
          Nature is at the heart of Harsa Batika. The landscaping was designed to offer both beauty and utility, making it ideal for photo-friendly events.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Curated flora</strong> including seasonal blooms, decorative trees, and hedges</li>
          <li><strong>Custom water features:</strong> fountains and reflective ponds</li>
          <li><strong>Garden lighting</strong> with soft LEDs for evening events</li>
          <li><strong>Pergolas and floral arches</strong> for wedding setups</li>
          <li><strong>Natural stone walkways</strong> and eco-friendly outdoor materials</li>
        </ul>
        <p>
          The result is a serene, luxurious atmosphere that feels both organic and celebratory.
        </p>
      </div>

      {/* Interior Styling */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Interior Styling</h2>
        <p>
          Even with the outdoor emphasis, interior spaces at Harsa Batika were given equal attention. RG Creations styled key areas for comfort and aesthetics:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Bridal and groom lounges</strong> with rich textures and calming tones</li>
          <li><strong>Minimalist yet elegant</strong> washrooms and prep areas</li>
          <li><strong>Reception counters and bar setups</strong> crafted from natural materials</li>
          <li><strong>Custom lighting and ceiling decor</strong> for main event zones</li>
          <li><strong>Modular spaces</strong> for decor customization by external planners</li>
        </ul>
      </div>

      {/* Branding */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Branding & Identity</h2>
        <p>
          RG Creations also developed the visual and brand identity for Harsa Batika, ensuring the venue had a marketable, memorable image.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Logo and identity system</strong> using nature-inspired motifs and fonts</li>
          <li><strong>Digital branding elements</strong> for Instagram and Facebook marketing</li>
          <li><strong>Outdoor signage, welcome boards,</strong> and guest navigation design</li>
          <li><strong>Printed assets:</strong> invitation folders, menus, brochures</li>
          <li><strong>Website and booking design guidance</strong> (optional)</li>
        </ul>
      </div>

      {/* Challenges & Solutions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Challenges & Our Solutions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Challenge:</strong> Integrating nature with event infrastructure</p>
            <p><strong>Solution by RG Creations:</strong> Designed modular layouts with protective landscaping</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Challenge:</strong> Making outdoor venue all-season ready</p>
            <p><strong>Solution by RG Creations:</strong> Added covered zones, drainage systems, and flexible layouts</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Challenge:</strong> Balancing greenery with modern function</p>
            <p><strong>Solution by RG Creations:</strong> Blended rustic design with luxury finish elements</p>
          </div>
        </div>
      </div>
    </div>

     

    
    </main>
    </>
   
  );
}
