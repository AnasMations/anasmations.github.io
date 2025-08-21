import Image from "next/image";
import { ProjectCard } from "./components/ProjectCard";

const frontendStack = [
  "React",
  "Next JS",
  "Flutter",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind",
];

const backendStack = ["Node", "Python", "Firebase", "AWS", "SQL"];

const gamedevStack = ["Unity Engine", "C#", "C++", "C", "Android"];

const otherStack = ["Git", "Figma", "Photoshop", "UI/UX", "Video Editing"];

const experiences = [
  {
    company: "Simli",
    location: "Oslo, Norway",
    position: "Fullstack Engineer",
    duration: "Oct 2023 - Aug 2025",
    description: "Develop AI-agents using Simli's real time face clone API",
    achievements: [
      "Lead frontend development of Simli.com using Next.js and React",
      "Migrating our website to Next.js improving load speed as twice as much",
      "Developed and integrated a variety of Voice Agent APIs with the Simli facial lipsync API",
      "Authored and maintained comprehensive API documentation for seamless developer onboarding",
      "Created and published the simli-client SDK to NPM for client-side integration",
      "Facilitated third-party integrations by liaising with startups and developers",
      "Implemented payment systems and dashboards using Stripe",
      "Built and managed an active developer community through Discord, addressing technical queries and gathering feedback for product improvements",
    ],
  },
  {
    company: "Simli",
    location: "Remote",
    position: "Unity VR Developer",
    duration: "Sep 2022 - Oct 2023",
    description:
      "Develop VR based solution in treatment of social anxiety using VR exposure therapy",
    achievements: [
      "Contribute and lead the development to core Unity VR development product",
      "Creating a range of Unity editor tools for a faster development pipeline",
      "UI\\UX design, testing and research for VR interactions interface",
      "Contribute to the Backend development of our API",
      "Stripe API payments and integration into our VR product",
    ],
  },
  {
    company: "412 Labs",
    location: "Maadi, Cairo, Egypt",
    position: "Unity VR Developer",
    duration: "July 2022 – Sep 2022",
    description: "",
    achievements: [
      "Graduate of 3 month VR Diploma offered by the ACC, U.S. Embassy Cairo in collaboration with 412labs",
      "Weekly development of XR projects using Unity, C#, and XR Interaction Toolkit",
    ],
  },
  {
    company: "Nile University",
    location: "Sheikh Zayed, Giza, Egypt",
    position: "Python Junior Teaching Assistant",
    duration: "Apr 2021 – June 2021",
    description: "",
    achievements: [
      "Assist in teaching Python fundamentals to a range of 10-20 students weekly through online tutorials",
    ],
  },
];

const ExperienceCard = ({ experience }: any) => {
  return (
    <div className=" rounded-lg p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-white">{experience.position}</h3>
          {experience.location && (
            <p className="text-gray-400">{experience.company} – {experience.location}</p>
          )}
        </div>
        <span className="text-gray-400 text-sm">{experience.duration}</span>
      </div>

      {experience.description && (
        <p className="text-gray-400">{experience.description}</p>
      )}

      <ul className="mt-4">
        {experience.achievements.map((achievement: any, index: any) => (
          <li key={index} className="text-gray-300 flex items-start">
            <span className="mr-2">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-start w-[70%] min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <h1 className="text-3xl font-bold text-white">Projects</h1>
      <ProjectCard
        title="Simli"
        description="Simli AS landing page"
        imageUrl="https://media.licdn.com/dms/image/v2/D4E16AQGmR2PZWhBLow/profile-displaybackgroundimage-shrink_350_1400/B4EZhWnQk_HoAY-/0/1753799791121?e=1756944000&v=beta&t=44EhrgIk3Gm5eZw80B4y03o_fCQAve1rCEfaWKoiRfc"
        link="https://simli.com"
      />
      {/* Simli Landing */}
      {/* app.simli */}
      {/* Edulga */}
      {/* GEM Hackathon Project */}
      {/* Guru ART */}

      <h1 className="text-3xl font-bold text-white">Tech Stack</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center flex-wrap">
          <h2 className="text-lg font-semibold text-white min-w-fit">
            Frontend
          </h2>
          {frontendStack.map((tech) => (
            <div
              key={tech}
              className="bg-gray-700 pointer-events-none px-2 py-1 rounded"
            >
              <p>{tech}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 items-center flex-wrap">
          <h2 className="text-lg font-semibold text-white min-w-fit">
            Backend
          </h2>
          {backendStack.map((tech) => (
            <div
              key={tech}
              className="bg-gray-700 pointer-events-none px-2 py-1 rounded"
            >
              <p>{tech}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 items-center flex-wrap">
          <h2 className="text-lg font-semibold text-white min-w-fit">
            Game Development
          </h2>
          {gamedevStack.map((tech) => (
            <div
              key={tech}
              className="bg-gray-700 pointer-events-none px-2 py-1 rounded"
            >
              <p>{tech}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 items-center flex-wrap">
          <h2 className="text-lg font-semibold text-white min-w-fit">Other</h2>
          {otherStack.map((tech) => (
            <div
              key={tech}
              className="bg-gray-700 pointer-events-none px-2 py-1 rounded"
            >
              <p>{tech}</p>
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-3xl font-bold text-white">Experience</h1>
      <div className="w-full">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>

      <h1 className="text-3xl font-bold text-white">Hackathons</h1>
      {/* Hackathons and their images */}
    </div>
  );
}
