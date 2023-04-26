import React from "react";

export default function About() {
  return (
    <section id="about" className="section bg-zinc-700">
      <div className="container mx-auto px-4 lg:px-10 py-20 flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:w-1/2 sm:w-5/6 sm:mb-6 lg:mt-12">
          <img
            className="object-cover object-center rounded mb-6"
            alt="hero"
            src={require("../images/portfolioimg.png")}
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1
            id="#about"
            className="title-font md:text-5xl text-3xl mb-4 font-medium text-white"
          >
            Hi, I am{" "}
            <span className="animate-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">
              Stephen
            </span>
            <br className="hidden lg:inline-block" />
          </h1>
          <h2 className="title-font md:text-5xl text-3xl mb-4 font-medium text-gray-400">
            A Full-Stack Software Engineer
          </h2>
          <p className="text-xl md:text-2xl lg:leading-relaxed mb-8">
            I am a highly motivated Full-Stack software engineer with a talent
            for tackling complex problems. My passion for innovation and
            commitment to excellence drives me to continuously enhance my
            technical skills, and am eager to take on a challenging role that
            will push my abilities to the next level.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-neutral-900 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-neutral-900 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Contact Me
              </span>
            </a>
            <a
              href="/resume"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 ml-5 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-neutral-900 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-neutral-900 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                My Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
