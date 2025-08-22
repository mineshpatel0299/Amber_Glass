"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://res.cloudinary.com/dsalsyu0z/image/upload/v1755882406/2_mxccaq.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://res.cloudinary.com/dsalsyu0z/image/upload/v1755882379/amber_catalogue-4_h9ffka.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://res.cloudinary.com/dsalsyu0z/image/upload/v1755882376/ChatGPT_Image_Aug_22_2025_at_06_04_18_PM_1_hg1giw.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://res.cloudinary.com/dsalsyu0z/image/upload/v1755882373/ChatGPT_Image_Aug_22_2025_at_06_04_18_PM_qys96v.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://res.cloudinary.com/dsalsyu0z/image/upload/v1755882371/ChatGPT_Image_Aug_22_2025_at_06_43_15_PM_kdmzhj.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://res.cloudinary.com/dsalsyu0z/image/upload/v1755882363/ChatGPT_Image_Aug_22_2025_at_06_37_01_PM_cx4coi.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://res.cloudinary.com/dsalsyu0z/image/upload/v1755882365/ChatGPT_Image_Aug_22_2025_at_06_25_22_PM_lxp6rz.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://res.cloudinary.com/dsalsyu0z/image/upload/v1755882363/amber_catalogue-5_epagsa.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://res.cloudinary.com/dsalsyu0z/image/upload/v1755882361/AMBER_transparent_i6r0lr.jpg",
  },

  
];
