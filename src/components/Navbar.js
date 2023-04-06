import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-zinc-700 sticky top-0">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0"></div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <button
                    tabIndex={0}
                    onClick={() => {
                      document
                        .getElementById("about")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        document
                          .getElementById("about")
                          .scrollIntoView({ behavior: "smooth" });
                      }
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
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        document
                          .getElementById("skills")
                          .scrollIntoView({ behavior: "smooth" });
                      }
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
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        document
                          .getElementById("projects")
                          .scrollIntoView({ behavior: "smooth" });
                      }
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
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        document
                          .getElementById("resume")
                          .scrollIntoView({ behavior: "smooth" });
                      }
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
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        document
                          .getElementById("contact")
                          .scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-gray-300 px-3 py-2 rounded-md text-lg font-medium focus:text-white focus:underline decoration-2 underline-offset-4 underline-thickness-4"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
            <div id="#top" className="fixed -mr-2 flex flex md:hidden">
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
          <div className="md:hidden" id="mobile-menu">
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
      </nav>
    </div>
  );
}
