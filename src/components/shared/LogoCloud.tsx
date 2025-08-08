import React from "react";

interface LogoCloudProps {
  logos: { name: string; src: string }[];
}

export default function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <ul className="mt-6 grid grid-cols-3 items-center gap-6 sm:grid-cols-5 md:mt-8">
      {logos.map((logo) => (
        <li key={logo.name} className="flex items-center justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-opacity">
          <img
            src={logo.src}
            alt={`Logo ${logo.name}`}
            loading="lazy"
            className="h-6 w-auto"
          />
        </li>
      ))}
    </ul>
  );
}
