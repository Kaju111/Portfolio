import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact">
      <div className="h-full flex flex-col mt-[260px] items-center justify-center text-white">
        <h1 className="font-primary sm:text-[35px] text-[35px] md:text-[45px] font-bold">
          Get in Touch!
        </h1>
        <h1 className="font-primary sm:text-[15px] text-[15px] md:text-[20px] w-[70%]  my-11 text-center">
          My inbox is always open. Whether for a potential project or just to
          say hi, feel free to reach out to me!
        </h1>
        <a href="mailto:saikiakaju275@gmail.com">
          <button className="font-primary text-[20px] border-2 bg-gradient-to-t rounded-lg hover:duration-100 hover:scale-105 ease-in-out transition from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 py-4 px-8 font-semibold ">
            Say Hello
          </button>
        </a>
      </div>

      <span className="text-white text-[15px] sm:txet-[15px] md:text-[20px] gap-6 font-primary md:flex md:justify-between pb-16 sm:pb-5 mt-14 ">
        {/* <h1 className="px-3 py-4 border rounded-full hover:border-blue-500 hover:text-blue-500 items-center">
          saikiakaju275@gmail.com
        </h1> */}
        <h1 className="flex gap-6 ml-8 mt-3">
          <a href="https://www.linkedin.com/in/kaju-saikia-2706422a9/">
            <button className="p-3 border hover:duration-100 hover:scale-105 ease-in-out transition rounded-full hover:border-blue-500 hover:text-blue-500">
              <FaLinkedinIn
                size={30}
                className="text-white hover:text-blue-500"
              />
            </button>
          </a>
          <a href="mailto:saikiakaju275@gmail.com">
            <button className="p-3 border hover:duration-100 hover:scale-105 ease-in-out transition rounded-full hover:border-blue-500 hover:text-blue-500">
              <SiMinutemailer
                size={30}
                className="text-white hover:text-blue-500"
              />{" "}
            </button>
          </a>
          <a href="https://github.com/Kaju111">
            <button className="p-3 border hover:duration-100 hover:scale-105 ease-in-out transition rounded-full hover:border-blue-500 hover:text-blue-500">
              <FaGithub size={30} className="text-white hover:text-blue-500" />
            </button>
          </a>
        </h1>
        <h1 className="px-3 py-4 sm:border text-[14px] sm:text-[17px] sm:rounded-full hover:border-blue-500 hover:text-blue-500 items-center">
          ©2024 Copyright by Kaju Saikia
        </h1>
      </span>
    </div>
  );
};

export default Footer;
