import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const nameInput = form.current.querySelector("#user_name");
    const emailInput = form.current.querySelector("#user_email");
    const messageInput = form.current.querySelector("#message");

    // validate
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      setIsSuccess(false)
      return;
    }

    emailjs
      .sendForm(
        "service_jwk675h",
        "template_zokllby",
        form.current,
        "7CDIdZBP0uiUS7pQk"
      )
      .then(
        () => {
          setIsSuccess(true);
          form.current.reset(); // reset the form fields
          setTimeout(() => {
            setIsSuccess(false);
          }, 10000); // hide the alert after 10 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-neutral-900 py-8 scroll-mt-10">
      {isSuccess && (
        <div className="fixed top-20 right-10 w-500 z-50 bg-green-500 text-white p-4 text-center rounded-md animate-bounce">
          <strong className="font-bold text-lg">Success!</strong>
          <span className="block sm:inline text-md">
            {" "}
            Your message has been sent.
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              onClick={() => setIsSuccess(false)}
              className="fill-current h-6 w-12 text-white hover:text-gray-500 transition duration-300"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            ></svg>
          </span>
        </div>
      )}
      <h2 className="flex justify-center sm:text-4xl text-3xl font-medium title-font mt-4 text-white">
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto mt-20 text-white"
      >
        <div className="mb-4 m-2">
          <label className="block font-bold mb-2" htmlFor="user_name">
            Name
          </label>
          <input
            className="appearance-none border-zinc-500 rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-zinc-700 focus:border-2 focus:zinc-500"
            id="user_name"
            type="text"
            name="user_name"
          />
        </div>
        <div className="mb-4 m-2">
          <label className="block font-bold mb-2" htmlFor="user_email">
            Email
          </label>
          <input
            className="appearance-none border-zinc-500 rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-zinc-700 focus:border-2 focus:border-zinc-500"
            id="user_email"
            type="email"
            name="user_email"
          />
        </div>
        <div className="mb-4 m-2">
          <label className="block font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="appearance-none border-zinc-500 rounded w-full py-4 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-zinc-700 focus:border-2 focus:border-zinc-500"
            id="message"
            name="message"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <input
            className="bg-white text-zinc-500 font-bold py-3 px-24 mt-4 rounded focus:outline-none focus:shadow-outline transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:text-white hover:bg-zinc-500"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </section>
  );
}
