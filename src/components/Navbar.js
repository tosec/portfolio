import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex fixed bg-neutral-900 top-0 right-0 left-0">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <button
                      tabIndex={0}
                      onClick={() => {
                        document
                          .getElementById("about")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-300 px-3 py-2 rounded-md text-lg font-medium focus:text-white focus:underline decoration-2 underline-offset-4 underline-thickness-4"
                    >
                      About
                    </button>

                    <button
                      tabIndex={0}
                      onClick={() => {
                        document
                          .getElementById("skills")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-300 px-3 py-2 rounded-md text-lg font-medium focus:text-white focus:underline decoration-2 underline-offset-4 underline-thickness-4"
                    >
                      Skills
                    </button>

                    <button
                      tabIndex={0}
                      onClick={() => {
                        document
                          .getElementById("projects")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-300 px-3 py-2 rounded-md text-lg font-medium focus:text-white focus:underline decoration-2 underline-offset-4 underline-thickness-4"
                    >
                      Projects
                    </button>

                    <button
                      tabIndex={0}
                      onClick={() => {
                        document
                          .getElementById("resume")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-300 px-3 py-2 rounded-md text-lg font-medium focus:text-white focus:underline decoration-2 underline-offset-4 underline-thickness-4"
                    >
                      Resume
                    </button>

                    <button
                      tabIndex={0}
                      onClick={() => {
                        document
                          .getElementById("contact")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-300 px-3 py-2 rounded-md text-lg font-medium focus:text-white focus:underline decoration-2 underline-offset-4 underline-thickness-4"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="#top" className="-mr-2 flex flex md:hidden fixed">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  window.scrollTo(0, 0);
                }}
                type="button"
                className="bg-neutral-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only"></span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="-translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transition ease-in duration-20 transform"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="-translate-x-full opacity-0"
        >
          <div className="md:hidden mt-10" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <button
                tabIndex={0}
                onClick={() => {
                  setIsOpen(!isOpen);
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsOpen(!isOpen);
                    document
                      .getElementById("about")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-gray-300 px-3 py-2 rounded-md text-lg font-medium focus:text-white text-left"
              >
                About
              </button>

              <button
                tabIndex={0}
                onClick={() => {
                  setIsOpen(!isOpen);
                  document
                    .getElementById("skills")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    document
                      .getElementById("skills")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-gray-300 px-3 py-2 rounded-md text-lg text-left font-medium focus:text-white focus:underline decoration-2 underline-offset-4 underline-thickness-4"
              >
                Skills
              </button>

              <button
                tabIndex={0}
                onClick={() => {
                  setIsOpen(!isOpen);
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsOpen(!isOpen);
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-gray-300 px-3 py-2 rounded-md text-lg text-left font-medium focus:text-white focus:underline decoration-2 underline-offset-4 underline-thickness-4"
              >
                Projects
              </button>

              <button
                tabIndex={0}
                onClick={() => {
                  document
                    .getElementById("resume")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    document
                      .getElementById("resume")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-gray-300 px-3 py-2 rounded-md text-lg text-left font-medium focus:text-white focus:underline decoration-2 underline-offset-4 underline-thickness-4"
              >
                Resume
              </button>

              <button
                tabIndex={0}
                onClick={() => {
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-gray-300 px-3 py-2 rounded-md text-lg text-left font-medium focus:text-white focus:underline decoration-2 underline-offset-4 underline-thickness-4"
              >
                Contact
              </button>
            </div>
          </div>
        </Transition>
        <div className="flex justify-end items-center ml-auto">
          <a href="https://github.com/tosec">
            <SiGithub className="text-gray-300 hover:text-white w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/stephenvallejoiii/">
            <SiLinkedin className="text-gray-300 hover:text-white w-6 h-6 m-4" />
          </a>
        </div>
      </nav>
    </div>
  );
}
