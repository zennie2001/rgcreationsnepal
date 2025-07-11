import React from "react";

interface StatItem {
  number: string;
  label: string;
}

const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    { number: "25+", label: "Years of industry Expertise" },
    { number: "15+", label: "Signature Projects Completed" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  return (
    <div className="md:h-[530px] h-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background atmospheric effects */}
      <div className="absolute inset-0 bg-black/80 overflow-hidden z-20"></div>
      <img
        src="/background.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* Decorative grass silhouette */}
      <div className="absolute bottom-0 right-8 w-32 h-48 opacity-30">
        <svg viewBox="0 0 100 150" className="w-full h-full fill-gray-700">
          <path
            d="M10,150 Q15,140 12,130 Q18,125 15,115 Q20,110 17,100 Q25,95 20,85 Q28,80 25,70"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M20,150 Q25,145 22,135 Q28,130 25,120 Q30,115 27,105 Q35,100 30,90 Q38,85 35,75"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M30,150 Q35,140 32,130 Q38,125 35,115 Q40,110 37,100 Q45,95 40,85 Q48,80 45,70"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M40,150 Q45,145 42,135 Q48,130 45,120 Q50,115 47,105 Q55,100 50,90 Q58,85 55,75"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M50,150 Q55,140 52,130 Q58,125 55,115 Q60,110 57,100 Q65,95 60,85 Q68,80 65,70"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-6 md:px-0 z-30">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="">
              <div className=" border-[16px] md:h-[370px] mt-10 md:mt-0 md:w-[585px] border-[#133950] p-8  relative ">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent"></div>

                <div className="relative mt-10 z-10">
                  <h2 className="text-white text-2xl md:text-4xl  font-light mb-2 tracking-wide">
                    SOME
                  </h2>
                  <h2 className="text-white text-2xl md:text-5xl font-bold mb-6 tracking-wide">
                    INTRESTING FACTS
                  </h2>

                  <p className="text-gray-300 text-sm leading-relaxed uppercase tracking-wider font-light">
                    Numbers that showcase our creativity, 
                    <br />
                    growth, and impact
                    
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Statistics */}
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="group relative">
                    {/* Dark card background */}
                    <div className=" backdrop-blur-sm p-8 rounded-lghover:border-[#244d4d]/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10">
                      {/* Animated background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/5 group-hover:to-cyan-500/5 rounded-lg transition-all duration-300"></div>

                      <div className="relative z-10 text-center">
                        {/* Large number */}
                        <div className="text-5xl md:text-6xl font-semibold text-white mb-3  transition-colors duration-300">
                          {stat.number}
                        </div>

                        {/* Divider line */}
                        <div className="w-12 h-0.5 bg-white mx-auto mb-4 group-hover:w-16 group-hover:bg-[#d5dd02] transition-all duration-300"></div>

                        {/* Label */}
                        <div className="text-white text-xs whitespace-normal font-medium tracking-widest uppercase group-hover:text-gray-300 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional atmospheric elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-[#244d4d]/40 rounded-full animate-pulse"></div>
      <div
        className="absolute top-32 right-20 w-1 h-1 bg-[#d5dd02]/50 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
};

export default StatsSection;
