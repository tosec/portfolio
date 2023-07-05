import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center text-xl py-12 bg-neutral-900">
      <div>
        Made by <span><Link to={"https://github.com/tosec"}>tosec</Link></span> with ❤️
      </div>
    </footer>
  );
};

export default Footer;
