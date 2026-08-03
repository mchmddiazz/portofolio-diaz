interface TimelineEntry {
  type: "work" | "education" | "freelance";
  title: string;
  organization: string;
  typeContract?: string;
  period: string;
  description: string;
  descriptionList?: string[];
}

const entries: TimelineEntry[] = [
  {
    type: "work",
    title: "Web Developer",
    organization: "Boleh Dicoba Digital",
    typeContract: "Full-time",
    period: "Sep 2019 — Feb 2025",
    description: "Responsibilities:",
    descriptionList: [
      "Developed and customized online stores using the Shopify platform.",
      "Responsible for website management and maintenance, including content update and performance.",
      "Conducted website redesigns based on Figma or similar web references, focusing on user experience and aesthetics.",
      "Collaborated with the design team to ensure alignment between design and functionality",
      "Optimized websites for speed and responsiveness.",
      "Troubleshot technical issues and provided user support."
    ]
  },
  {
    type: "freelance",
    title: "Web Developer",
    organization: "Easea Co",
    typeContract: "Freelance",
    period: "Nov 2021 - Dec 2021",
    description: "Responsibilities:",
    descriptionList: [
      "Development website using Shopify platform.",
      "Improvement and optimizing minor bugs on previous development.",
      "Configure third party apps from Shopify App Store to enhance website functionality.",
    ]
  },
  {
    type: "education",
    title: "Bachelor's in Informatics (in progress)",
    organization: "Widyatama University, Bandung",
    period: "Resuming 2027",
    description: "Currently on academic leave, planning to continue coursework.",
    descriptionList: [
      "Currently enrolled in the Informatics program, focusing on web development and software engineering.",
    ]
  },
  {
    type: "education",
    title: "Vocational School — Informatics",
    organization: "Informatic Vocational High School, Bandung",
    period: "Completed",
    description: "Relevant coursework includes programming fundamentals, database management, and web development.",
    descriptionList: [
      "Completed coursework in programming fundamentals, database management, and web development.",
    ]
  },
];

export default function Timeline() {
  return (
    <div id="experience" className="flex flex-col items-center justify-center min-h-[100vh] max-w-4xl m-auto p-8">
      <div className="text-left w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 md:my-0 md:my-10 text-left">Experience and Education</h1>
      </div>
      <div className="relative pl-8 mx-auto mb-10">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-800" />
        <div className="space-y-10">
          {entries.map((entry, i) => (
            <div key={i} className="relative">
              <span
                className={`absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                  entry.type === "work"
                    ? "bg-gray-400 border-gray-400"
                    : "bg-neutral-900 border-neutral-500"
                }`}
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-heading text-lg font-semibold text-black">
                  {entry.title}
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-2">{entry.organization}</p>
              <p className="text-sm text-neutral-500 whitespace-nowrap">
                {entry.period}
              </p>
              {entry.description && (
                <div className="text-neutral-400 text-sm leading-relaxed">
                  <p className="text-sm text-neutral-400 mt-2">
                    {entry.description}
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    {entry.descriptionList?.map((item, j) => (
                      <li key={j} className="text-neutral-400 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}