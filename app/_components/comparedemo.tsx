import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="md:w-[100%] lg:w-[80%] h-[60vh]  flex items-center justify-center [perspective:900px] [transform-style:preserve-3d]">
      <div
        className="p-1 md:p-4   dark:bg-neutral-900  mx-auto w-[90%] h-1/2 md:h-full"
      >
        <Compare
          firstImage="https://res.cloudinary.com/dsalsyu0z/image/upload/v1756036477/ChatGPT_Image_Jul_29_2025_at_12_47_48_PM_ihf2yt.png"
          secondImage="https://res.cloudinary.com/dsalsyu0z/image/upload/v1756036489/ChatGPT_Image_Jul_29_2025_at_01_10_00_PM_pyb2w7.png"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}
