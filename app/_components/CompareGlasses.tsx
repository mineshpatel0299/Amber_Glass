"use client";

import { useEffect, useState } from "react";
import { CompareDemo } from "./comparedemo";
import localFont from "next/font/local";
import { LockKeyhole, ShieldCheck, Sparkle } from "lucide-react";

const helvetica = localFont({
  src: "../../public/helvetica-255/helvetica-light-587ebe5a59211.ttf",
});

export default function CompareGlasses() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: ShieldCheck, label: "UV Protection" },
    { icon: LockKeyhole, label: "Privacy Protection" },
    { icon: Sparkle, label: "Enhance Aesthetics" },
  ];

  return (
    <div className={` bg-[#567387] overflow-hidden ${helvetica.className} sm:py-26`} >
      <div className="flex flex-col lg:flex-row ">
        
        <div className="flex-1 lg:flex-[2] lg:-mr-56">
          <CompareDemo />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center text-center gap-10 px-6 sm:px-8 md:px-12 py-12">
          
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-tight">
              HOLD AND DRAG
            </h1>
            <h1 className="text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-tight">
              TO SEE THE MAGIC
            </h1>
            <p className="text-white/57 uppercase text-sm sm:text-base md:text-xl lg:text-2xl font-medium tracking-wide mt-2">
              INNOVATIVE GLASS FILMS FOR ELEGANT SPACES
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-6">
            {features.map(({ icon: Icon, label }, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                <h2 className="text-white uppercase text-sm sm:text-lg md:text-xl font-semibold tracking-tight">
                  {label}
                </h2>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
