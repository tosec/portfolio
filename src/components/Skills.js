import React from "react";
import { SiReact, SiRedux, SiHtml5, SiCss3, SiPostgresql, SiFirebase, SiNodedotjs, SiJavascript, SiExpress, SiMui,  } from 'react-icons/si';
import { MdComputer } from "react-icons/md";

export default function Skills()  {
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
        name: 'MUI',
        icon: <SiMui/>
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
    <div className="flex flex-col items-center justify-center bg-neutral-900 py-10">
        <MdComputer className="text-white text-4xl mb-4" />
      <h2 id='skills' className="text-white text-2xl font-bold mb-4 scroll-mt-345">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-md flex items-center justify-center"
          >
            {skill.icon}
            <span className="ml-2 text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

