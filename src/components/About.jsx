import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const About = () => {
  return (
    <div id="about">
      <div
        className="text-white mt-24  h-full dm:h-[500px] flex flex-col "
        id="about"
      >
        <span className="font-primary text-[30px] sm:text-[30px] md:text-[45px] font-bold">
          01: About Me
        </span>

        <span className="font-primary text-[15px] sm:text-[17px] md:text-[20px] mt-8 mb-[30px] sm:leading-[21px] leading-[17px] md:leading-[25px]">
          I am a self taught frontend developer. Started my journey of coding
          around the mid of 2022 and enjoying the ride so far.
        </span>
        <span className="font-primary text-[15px] sm:text-[17px] md:text-[20px] mb-[30px] sm:leading-[21px] leading-[17px] md:leading-[25px]">
          Favourite language: Javascript || Favourite stack: MERN (Node, React
          and Mongo Express)
        </span>
        <span className="font-primary text-[15px] sm:text-[17px] md:text-[20px] mt-8 mb-[30px] sm:leading-[21px] leading-[17px] md:leading-[25px]">
          Hobbies: 404 Not Found (no, seriously!! I really don't have any
          hobbies) OK, that is it. Don't ask me how I wrote that much
          content(sh!t) on my "About" page. But still, if you do, the obvious
          answer would be:- I HAVE NOOOOOOOOO IDEA!! Want to say hi, don't you
          even think about finding me on social media. Oh, wait, wait, wait!!!
          In case you want to check out my{" "}
          <a href="https://github.com/Kaju111">
            <button className="p-3 border hover:duration-100 hover:scale-105 ease-in-out transition rounded-full hover:border-blue-500 hover:text-blue-500">
              <FaGithub size={30} className="text-white hover:text-blue-500" />
            </button>
          </a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/in/kaju-saikia-2706422a9/">
            <button className="p-3 border hover:duration-100 hover:scale-105 ease-in-out transition rounded-full hover:border-blue-500 hover:text-blue-500">
              <FaLinkedinIn
                size={30}
                className="text-white hover:text-blue-500"
              />
            </button>
          </a>{" "}
          profiles.
        </span>
        <span className="font-primary text-[15px] sm:text-[17px] md:text-[20px] mb-[30px] sm:leading-[21px] leading-[17px] md:leading-[25px]">
          wait, wait!!! no, seriously!! I enjoy creating things that live on the
          internet, whether that be websites, applications, or anything in
          between. My goal is to always build products that provide
          pixel-perfect, performant experiences.
        </span>
        <span className="font-primary text-[15px] sm:text-[17px] md:text-[20px] sm:leading-[17px] leading-[20px] md:leading-[25px]">
          I love learning new and better ways to create seamless user
          experiences with clean, efficient, and scalable code. I consider work
          an ongoing education, and I'm always looking for opportunities to work
          with those who are willing to share their knowledge as much as I want
          to learn. At the end of the day, my primary goal is to create
          something beautiful with people that bring out the best in me.
        </span>
      </div>
    </div>
  );
};

export default About;
