import React from "react";
import {
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiFirebase,
  SiNodedotjs,
  SiJavascript,
  SiExpress,
  SiMui,
} from "react-icons/si";
import { MdComputer } from "react-icons/md";

export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "React",
      icon: <SiReact />,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
    },
    {
      name: "HTML5",
      icon: <SiHtml5 />,
    },
    {
      name: "CSS",
      icon: <SiCss3 />,
    },
    {
      name: "MUI",
      icon: <SiMui />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
    },
  ];

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center bg-neutral-900 py-20 md:scroll-mt-210"
    >
      <MdComputer className="text-white text-4xl mb-4" />
      <h2 className="text-white text-3xl font-bold mb-8 font-medium">
        My Skills
      </h2>
      <p className="flex justify-center lg:w-1/4 mx-auto leading-relaxed text-base md:text-2xl mb-10 text-center">
        Frame works and languages ive acquired proficiency in throughout my
        journey.{" "}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-zinc-700 p-4 rounded-md flex items-center justify-center"
          >
            {skill.icon}
            <span className="ml-2 text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
