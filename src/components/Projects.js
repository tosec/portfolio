import { BiCodeAlt } from "react-icons/bi";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Social Web App",
      subtitle: "Feb-April 2023",
      description: "Social platform built with React/MaterialUI and Firebase",
      image: `${require("./images/socialwebapp.png")}`,
      link: "https://social-ebaa0.web.app/",
    },
    {
      title: "E-commerce Web App",
      subtitle: "February 2023",
      description: "E-commerce web app built with PERN-Stack and MaterialUI",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/038/339/inabakumori_-_Lagtrain_(Vo._Kaai_Yuki)___%E7%A8%B2%E8%91%89%E6%9B%87%E3%80%8E%E3%83%A9%E3%82%B0%E3%83%88%E3%83%AC%E3%82%A4%E3%83%B3%E3%80%8FVo._%E6%AD%8C%E6%84%9B%E3%83%A6%E3%82%AD_0-0_screenshot.png",
      link: "#",
    },
    {
      title: "Project 3",
      subtitle: "Subtitle 3",
      description: "Description 3",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/038/339/inabakumori_-_Lagtrain_(Vo._Kaai_Yuki)___%E7%A8%B2%E8%91%89%E6%9B%87%E3%80%8E%E3%83%A9%E3%82%B0%E3%83%88%E3%83%AC%E3%82%A4%E3%83%B3%E3%80%8FVo._%E6%AD%8C%E6%84%9B%E3%83%A6%E3%82%AD_0-0_screenshot.png",
      link: "#",
    },
    {
      title: "Project 3",
      subtitle: "Subtitle 3",
      description: "Description 3",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/038/339/inabakumori_-_Lagtrain_(Vo._Kaai_Yuki)___%E7%A8%B2%E8%91%89%E6%9B%87%E3%80%8E%E3%83%A9%E3%82%B0%E3%83%88%E3%83%AC%E3%82%A4%E3%83%B3%E3%80%8FVo._%E6%AD%8C%E6%84%9B%E3%83%A6%E3%82%AD_0-0_screenshot.png",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="text-gray-400 bg-zinc-700 body-font scroll-mt-10"
    >
      <div className="container px-5 py-6 mx-auto text-center lg:px-40 mt-10">
        <div className="flex flex-col w-full mb-20">
          <BiCodeAlt className="text-white text-5xl mx-auto inline-block w-20 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/4 mx-auto leading-relaxed text-base md:text-2xl">
            Check out a curated collection of web applications I've crafted,
            spanning from dynamic e-commerce solutions to engaging social media
            platforms.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="sm:w-1/2 w-full p-4"
            >
              <div className="flex">
                <div className="py-10 w-full bg-neutral-900 rounded-md hover:bg-neutral-800 active:bg-neutral-800 focus:outline-none focus:ring focus:bg-neutral-800 ease-out duration-500">
                  <h2 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h2>
                  <h1 className="tracking-widest text-md title-font font-medium mb-1">
                    {project.subtitle}
                  </h1>
                  <p className="leading-relaxed text-gray-500">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
