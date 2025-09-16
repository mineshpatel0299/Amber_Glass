import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="w-full lg:w-[80%] h-[50vh] md:h-[80vh] flex items-center justify-center [perspective:900px] [transform-style:preserve-3d]">
      <div
        className="p-1 md:p-4   dark:bg-neutral-900  mx-auto w-full h-full"
      >
        <Compare
          firstImage="https://res.cloudinary.com/djicxkd9u/image/upload/v1757938884/drage_img2_2_rnasqw.png"
          secondImage="https://res.cloudinary.com/djicxkd9u/image/upload/v1757938805/drag_image1_2_syc10l.png"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="drag"
          autoplay={true}
        />
      </div>
    </div>
  );
}
