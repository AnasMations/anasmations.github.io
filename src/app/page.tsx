"use client";

import Image from "next/image";
import { ProjectCard } from "./components/ProjectCard";
import { FontH1, FontH2, FontP } from "./components/Fonts";
import AnasMeraba3Img from "@/app/assets/AnasMeraba3.png";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const frontendStack = [
  "React",
  "Next.js",
  "Flutter",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind",
];

const backendStack = ["Node.js", "Python", "Firebase", "AWS", "SQL"];

const gamedevStack = ["Unity Engine", "C#", "C++", "C", "Android"];

const otherStack = ["Git", "Figma", "Photoshop", "UI/UX", "Video Editing"];

const techStack = [
  ...frontendStack,
  ...backendStack,
  ...gamedevStack,
  ...otherStack,
];

const hackathons = [
  {
    description: "1️⃣st place in Grand Egyptian Museum Hackathon",
    date: "Dec 2024",
  },
  {
    description:
      "1️⃣st in Egypt and 3rd over Africa in ALX startup accelerator",
    date: "Oct 2024",
  },
  {
    description:
      "Top 3️⃣ finalists in LabLab.me MENA AI hackathon",
    date: "Jun 2023",
  },
  {
    description: "4️⃣th place winner in VR Metaverse Game Hack",
    date: "Dec 2022",
  },
  {
    description: "1️⃣st place winner over Egypt in AR/VR Africa Hackathon",
    date: "Nov 2022",
  },
  {
    description:
      "3️⃣rd place winner in CAIRO ICT Egyptian Game Dev Competition",
    date: "Nov 2022",
  },
  {
    description:
      "Ranking 5️⃣th over Nile University in ECPC qualifications round",
    date: "Aug 2021",
  },
];

const experiences = [
  {
    company: "Simli",
    location: "Oslo, Norway",
    position: "Fullstack Engineer",
    duration: "Oct 2023 - Aug 2025",
    achievements: [
      "Lead end-to-end development of core features at simli.com and app.simli.com ",
      "Migrating our website to Next.js improving load speed as twice as much",
      "Integrated a variety of Voice Agent APIs like ElevenLabs, VAPI, Retell.",
      "Authored and maintained comprehensive API documentation for seamless developer onboarding",
      "Published the simli-client SDK to NPM for client-side integration",
      "Facilitated third-party integrations by liaising with startups and developers",
      "Implemented payment systems and dashboards using Stripe",
      "Managed an active developer community through Discord, addressing technical queries and product feedback.",
    ],
  },
  {
    company: "Yatek",
    location: "Remote",
    position: "Unity VR Developer",
    duration: "Sep 2022 - Oct 2023",
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
    position: "Junior Teaching Assistant",
    duration: "Apr 2021 – June 2021",
    description: "",
    achievements: [
      "Assist in teaching Python fundamentals to a range of 10-20 students weekly through online tutorials",
    ],
  },
];

const AnasMeraba3 = () => {
  return (
    <div className="absolute -top-20 group hover:rotate-12 transition-transform duration-300">
      <Image
        src={AnasMeraba3Img}
        alt="Anas Hassanien"
        className="absolute z-10 w-[100px]"
      ></Image>
      <Image
        src={AnasMeraba3Img}
        alt="Anas Hassanien"
        className="blur-sm w-[100px]"
      ></Image>
    </div>
  );
};

export default function Home() {
  return (
    <div className="font-sans flex flex-col text-black items-center justify-start w-full h-[100svh] px-8 sm:px-20 bg-blue-500">
      {/* Top Header Section */}
      <div className="w-full mt-8 mb-2 flex justify-between">
        <div className="flex flex-col ml-[150px]">
          <FontH1 className="text-white">Anas Hassanien</FontH1>
          <FontP className="text-white font-bold">Software Engineer</FontP>
        </div>
        <div className="flex items-end gap-3 mr-[40px]">
          <FaYoutube
            fill="white"
            size={28}
            className="cursor-pointer hover:opacity-50 transition-all"
            onClick={() => {
              window.open("https://www.youtube.com/@AnasMations", "");
            }}
          />
          <FaGithub
            fill="white"
            size={28}
            className="cursor-pointer hover:opacity-50 transition-all"
            onClick={() => {
              window.open("https://github.com/AnasMations", "");
            }}
          />
          <FaLinkedin
            fill="white"
            size={28}
            className="cursor-pointer hover:opacity-50 transition-all"
            onClick={() => {
              window.open("https://www.linkedin.com/in/anas-ahmed-hassan/", "");
            }}
          />
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative bg-white w-full h-fit rounded-4xl p-8">
        <AnasMeraba3 />

        <div className="flex items-start justify-start gap-8">
          {/* Experience */}
          <div>
            <FontH1 className="mb-2">Experience</FontH1>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-2 mb-2 rounded-lg shadow w-[850px] bg-gray-50 hover:shadow-lg hover:bg-gray-200 cursor-default transition-all duration-300"
              >
                <div className="flex justify-between mb-1">
                  <FontH2>
                    {exp.position} @ {exp.company}
                  </FontH2>
                  <FontP className="text-gray-700 text-sm">
                    {exp.location} | {exp.duration}
                  </FontP>
                </div>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {/* Tech Stack */}
            <div className="flex flex-col">
              <FontH1 className="mb-2">Tech Stack</FontH1>
              <div className="flex flex-wrap">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 hover:bg-gray-200 p-2 rounded-lg shadow m-2 cursor-default transition-all duration-300"
                  >
                    <FontP className="text-gray-700">{tech}</FontP>
                  </div>
                ))}
              </div>
            </div>
            {/* Hackathons */}
            <div className="flex flex-col">
              <FontH1 className="mb-2">Hackathons</FontH1>
              {hackathons.map((hackathon, index) => (
                <div
                  key={index}
                  className="p-2 mb-2 flex justify-between rounded-lg shadow bg-gray-50 hover:shadow-lg hover:bg-gray-200 cursor-default transition-all duration-300"
                >
                  <FontP className="text-gray-700">
                    {hackathon.description}
                  </FontP>
                  <FontP className="text-gray-500 text-sm">
                    {hackathon.date}
                  </FontP>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
