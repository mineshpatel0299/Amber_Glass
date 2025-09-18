"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 sm:p-6 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4", /* Adjusted padding for mobile */
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-lg sm:text-xl"> {/* Adjusted text size for mobile */}
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-700 text-xs sm:text-sm dark:text-neutral-300"> {/* Adjusted text size for mobile */}
          {description}
        </div>
      </div>
    </div>
  );
};

export { BentoGrid, BentoGridItem };
