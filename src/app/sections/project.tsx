// app/projects/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import { ChevronRightCircleIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects - Diaz's Portfolio",
  description: "A showcase of selected projects I've worked on, highlighting my skills in web development and design.",
};

const projects = [
  {
    name: "Green Rebel Foods",
    description: "Implemented custom cart logic to alert customers when frozen and non-frozen items are mixed in the same shipment.",
    tech: ["Shopify", "Liquid", "JavaScript", "Liquid Ajax API"],
    url: "https://greenrebelfoods.com",
    image: "/projects/client/gr-foods.webp",
  },
  {
    name: "Steak Hotel by Holycow!",
    description: "Adjusted landing pages and provided ongoing website maintenance in collaboration with the SEO team.",
    tech: ["Shopify", "Liquid", "SEO"],
    url: "https://holycowsteak.com",
    image: "/projects/client/holycow.webp",
  },
  {
    name: "Persebaya Store",
    description: "Built custom product settings for jersey name-set personalization.",
    tech: ["Shopify", "Liquid", "JavaScript", "Liquid Ajax API"],
    url: "https://persebayastore.com",
    image: "/projects/client/persebaya.webp",
  },
  {
    name: "Luma (ex Kasanoa)",
    description: "Built a custom Shopify theme for a client, focusing on a clean and modern design to enhance user experience.",
    tech: ["Shopify", "Liquid", "JavaScript"],
    url: "https://luma.id",
    image: "/projects/client/luma-ex-kasanoa.webp",
  },
  {
    name: "Woodka Watch",
    description: "Redefine the brand's online presence with a custom Shopify theme, enhancing user experience and driving sales with custom bundling features.",
    tech: ["Shopify", "Liquid", "JavaScript", "Liquid Ajax API"],
    url: "https://woodka.fun",
    image: "/projects/client/woodka.webp",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-heading text-3xl font-bold mb-5 text-center">Projects</h1>
        <p className="text-gray-600 text-center mb-10 text-sm md:text-base">
          Here are some of selected the projects I've worked on. <br/>
          Each project presents unique challenges and opportunities to apply my skills in web development and design.
        </p>
        <div className="flex flex-wrap mb-10">
            {projects.map((project) => (
              <div className="basis-full md:basis-1/2 lg:basis-1/3 px-2 mb-8" key={project.name}>
                  <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[15em] overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      loading="eager"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-black-400 hover:text-black-300 transition-colors mt-2 inline-block">
                    <h2 className="text-xl font-bold mt-4">{project.name}</h2>
                    <span className="inline-block bg-black text-white text-xs font-bold px-2 py-1 rounded-full mt-2">
                      {project.tech.join(", ")}
                    </span>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                  </a>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-black-400 hover:text-black-300 transition-colors mt-2">
                    <span className="text-sm font-medium mr-4">Visit Project</span> <ChevronRightCircleIcon />
                  </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}