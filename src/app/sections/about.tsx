"use client";
import { useState } from "react";

const projects = [
  {
    name: "Green Rebel Foods",
    link: "https://greenrebelfoods.com",
    description:
      "Implemented custom cart logic to alert customers when frozen and non-frozen items are mixed in the same shipment.",
  },
  {
    name: "Steak Hotel by Holycow!",
    link: "https://holycowsteak.com",
    description:
      "Adjusted landing pages and provided ongoing website maintenance in collaboration with the SEO team.",
  },
  {
    name: "Persebaya Store",
    link: "https://persebayastore.com",
    description:
      "Built custom product settings for jersey name-set personalization.",
  },
];

export default function About(){
  return (
    <div id="about" className="flex flex-col items-center justify-center min-h-screen max-w-4xl m-auto p-8">
      <div className="text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-left">Hi, I'm Diaz</h1>
        <p className="text-base md:text-lg text-black-300 leading-relaxed mb-4">
          A Web Developer with 5 years of experience building e-commerce
          solutions within the Shopify ecosystem. My work spans theme
          development, store customization, and functional integrations
          using HTML, CSS, JavaScript, and Liquid — this has shaped how I
          think about building fast, maintainable e-commerce platforms.
        </p>
        <p className="text-base md:text-lg text-black-300 leading-relaxed mb-4">
          At Boleh Dicoba Digital, I&apos;ve worked across a range of Shopify
          projects, including:
        </p>
        <ul className="space-y-3 mb-4 pl-4 border-l border-black-700">
          {projects.map((project) => (
            <li key={project.name}>
              <span className="font-semibold text-black">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {project.name}
                </a>
              </span>{" "}
              <span className="text-base md:text-lg text-black-300">— {project.description}</span>
            </li>
          ))}
          <li className="text-black-400 italic">
            And many more, providing continuous maintenance and support
            services. Explore <a href="/projects" className="text-grey-400 hover:underline font-medium cursor-pointer"> my projects</a> to see a selection of my work.
          </li>
        </ul>
        <p className="text-base md:text-lg text-black-300 leading-relaxed mb-4">
          I&apos;m comfortable working with Git for version control and
          applying Agile methodologies within team workflows, ensuring
          changes are well-documented and development stays efficient.
        </p>
        <p className="text-base md:text-lg text-black-300 leading-relaxed mb-6">
          I&apos;m committed to continuously learning and deepening my
          expertise in the Shopify ecosystem and the practices around it, so
          that the solutions I build stay relevant and impactful.
        </p>
        <p className="text-base md:text-lg text-black-300">
          If you have a question, a proposal, or just want to say hello,
          feel free to{" "}
          <a
            href="mailto:mchmddiazz@gmail.com"
            className="text-grey-400 hover:underline font-medium cursor-pointer"
          >
            contact me
          </a>
          .
        </p>
      </div>
    </div>
  );
}