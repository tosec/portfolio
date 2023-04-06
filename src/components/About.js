import React from "react";

export default function About() {
  return (
    <section id="about" className='mt-10'>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 id='#about'className="title-font md:text-5xl text-3xl mb-4 font-medium text-white">
            Hi, I am <span className="animate-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">Stephen</span>
            <br className="hidden lg:inline-block" />
          </h1>
          <h2 className="title-font md:text-5xl text-3xl mb-4 font-medium text-gray-400">
            A Full-Stack Software Engineer
          </h2>
          <p className="mb-8 md:text-2xl leading-relaxed">
            I am a highly motivated software engineer with a talent for tackling
            complex problems. My passion for innovation and commitment to
            excellence drives me to continuously enhance my technical skills. I
            am eager to take on a challenging role that will push my abilities
            to the next level. With my extensive experience managing competing
            priorities and thriving in fast-paced environments, I am seeking new
            challenges that will allow me to push my skills to the next level.
          </p>
          {/* <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-neutral-900 border-0 py-3 px-6 focus:outline-none rounded text-base transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-300 duration-300"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-neutral-900 border-0 py-3 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-300 duration-300"
            >
              See My Work
            </a>
          </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className=""
            alt="image of me"   // getting a drawing done to be displayed here
            src=""
          />
        </div>
      </div>
    </section>
  );
}
