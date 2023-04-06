import { BiCodeAlt } from "react-icons/bi";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "project 1",
      subtitle: "subtitle 1",
      description: "description 1",
      image: "https://i.kym-cdn.com/entries/icons/original/000/038/339/inabakumori_-_Lagtrain_(Vo._Kaai_Yuki)___%E7%A8%B2%E8%91%89%E6%9B%87%E3%80%8E%E3%83%A9%E3%82%B0%E3%83%88%E3%83%AC%E3%82%A4%E3%83%B3%E3%80%8FVo._%E6%AD%8C%E6%84%9B%E3%83%A6%E3%82%AD_0-0_screenshot.png",
      link: "#"
    },
    {
      title: "Project 2",
      subtitle: "Subtitle 2",
      description: "Description 2",
      image: "https://i.kym-cdn.com/entries/icons/original/000/038/339/inabakumori_-_Lagtrain_(Vo._Kaai_Yuki)___%E7%A8%B2%E8%91%89%E6%9B%87%E3%80%8E%E3%83%A9%E3%82%B0%E3%83%88%E3%83%AC%E3%82%A4%E3%83%B3%E3%80%8FVo._%E6%AD%8C%E6%84%9B%E3%83%A6%E3%82%AD_0-0_screenshot.png",
      link: "#"
    },
    {
      title: "Project 3",
      subtitle: "Subtitle 3",
      description: "Description 3",
      image: "https://i.kym-cdn.com/entries/icons/original/000/038/339/inabakumori_-_Lagtrain_(Vo._Kaai_Yuki)___%E7%A8%B2%E8%91%89%E6%9B%87%E3%80%8E%E3%83%A9%E3%82%B0%E3%83%88%E3%83%AC%E3%82%A4%E3%83%B3%E3%80%8FVo._%E6%AD%8C%E6%84%9B%E3%83%A6%E3%82%AD_0-0_screenshot.png",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="text-gray-400 bg-zinc-700 body-font scroll-mt-460">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 mt-10">
        <div className="flex flex-col w-full mb-20">
          <BiCodeAlt className=" text-white text-5xl mx-auto inline-block w-20 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
           jkhbdjkahwldhaldhawhdklwhdlwhaudhuwahldhklduhalkdhwkldha
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-700 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-zinc-900 mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-gray-500">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
