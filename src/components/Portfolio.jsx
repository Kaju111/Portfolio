import React from "react";
import shoppy from "./images/shoppy.jpeg";
import shose from "./images/shose.jpeg";
import { FaGithub } from "react-icons/fa";
import { ImLink } from "react-icons/im";
import mba from "./images/mba.jpeg";
import cars from "./images/Cars.png";
import linktree from "./images/Linktree.png";
import ecom from "./images/ecom.png";
import social from "./images/social.png";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div id="portfolio" className="text-white h-auto">
      <div>
        <span className="font-primary text-[30px] sm:text-[30px] md:text-[45px] font-bold">
          02: Some Things I've build
        </span>
        <div className="grid md:grid-cols-2 mt-[70px]">
          <div className="sm-h[400px] sm:w-[550px] md:h-[400px] md:w-[550px] rounded-xl">
            <a href="https://server-frontend.vercel.app/">
              <motion.div
                whileHover={{ scale: 1.4, rotate: -7 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 0,
                  borderRadius: "100%",
                }}
              >
                <img
                  src={ecom}
                  className=" lg:h-[350px] lg:w-[550px] md:h-[300px] md:w-[400px] rounded-lg"
                />
              </motion.div>
            </a>
          </div>

          <div className="lg:h-[400px] lg:w-[550px]  md:h-[300] md:w-[400px] rounded-xl text-end">
            <h1 className="font-name text-[30px] sm:mt-[20px] md:mt-[30px]">
              E-commece Web
            </h1>
            <h1 className="font-primary opacity-80 bg-[#222221] py-5 px-3 rounded-xl sm:mt-1 md:mt-3">
              Built a Node.js-powered e-commerce platform featuring user
              authentication, product management, and secure payment integration
              via Stripe. Included an exclusive admin dashboard for streamlined
              product and order management.
            </h1>
            <h1 className="mt-3 font-primary">
              MongDB Express Nodejs Reactjs Stripe SASS Firebase
            </h1>
            <h1 className="flex gap-5 justify-end my-5">
              <a href="https://github.com/Kaju111/FULLSTACK-ECOMMERCE">
                <FaGithub size={30} />{" "}
              </a>
              <a href="https://server-frontend.vercel.app/">
                <ImLink size={30} />{" "}
              </a>
            </h1>
          </div>
        </div>
        // ----
        <div className="grid md:grid-cols-2 mt-[70px]">
          <div className="lg:h-[400px] lg:w-[550px]  md:h-[300] md:w-[400px] rounded-xl ">
            <h1 className="font-name text-[30px] sm:mt-[20px] md:mt-[30px]">
              Social Media
            </h1>
            <h1 className="font-primary opacity-80 bg-[#222221] py-5 px-3 rounded-xl sm:mt-1 md:mt-3">
              Developed a MERN stack social media platform with Cloudinary
              integration for photo upload/delete. Features include login,
              logout, create account, comment management, follow/unfollow, user
              profiles.
            </h1>
            <h1 className="mt-3 font-primary">
              Reactjs Node.js Express MongoDB cloudinary SASS
            </h1>
            <h1 className="flex gap-5 my-5">
              <a href="https://github.com/Kaju111/MERN-SOCIALAPP">
                <FaGithub size={30} />{" "}
              </a>
            </h1>
          </div>

          <div className="sm-h[400px] sm:w-[550px] md:h-[400px] md:w-[550px] rounded-xl">
            <span>
              <motion.div
                whileHover={{ scale: 1.4, rotate: 7 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 0,
                  borderRadius: "100%",
                }}
              >
                <img
                  src={social}
                  className=" lg:h-[350px] lg:w-[550px] md:h-[300px] md:w-[400px] rounded-lg"
                />
              </motion.div>
            </span>
          </div>
        </div>
        //---
        <div className="grid md:grid-cols-2 mt-[70px]">
          <div className="sm-h[400px] sm:w-[550px] md:h-[400px] md:w-[550px] rounded-xl">
            <a href="https://shoppy-dashboard-seven.vercel.app/">
              <motion.div
                whileHover={{ scale: 1.4, rotate: -7 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 0,
                  borderRadius: "100%",
                }}
              >
                <img
                  src={shoppy}
                  className=" lg:h-[350px] lg:w-[550px] md:h-[300px] md:w-[400px] rounded-lg"
                />
              </motion.div>
            </a>
          </div>

          <div className="lg:h-[400px] lg:w-[550px]  md:h-[300] md:w-[400px] rounded-xl text-end">
            <h1 className="font-name text-[30px] sm:mt-[20px] md:mt-[30px]">
              Shoppy dashboard
            </h1>
            <h1 className="font-primary opacity-80 bg-[#222221] py-5 px-3 rounded-xl sm:mt-1 md:mt-3">
              Simple e-com dashboard app Orders, Employees, Customers, Calender,
              Kanban, Editor, Color-Picker all sites available and Dark mode
              feafures.
            </h1>
            <h1 className="mt-3 font-primary">ReactJs Context Tailwind</h1>
            <h1 className="flex gap-5 justify-end my-5">
              <a href="https://github.com/Kaju111/React-Dashboard">
                <FaGithub size={30} />{" "}
              </a>
              <a href="https://shoppy-dashboard-seven.vercel.app/">
                <ImLink size={30} />{" "}
              </a>
            </h1>
          </div>
        </div>
        // ----
        <div className="grid md:grid-cols-2 mt-[70px]">
          <div className="lg:h-[400px] lg:w-[550px]  md:h-[300] md:w-[400px] rounded-xl ">
            <h1 className="font-name text-[30px] sm:mt-[20px] md:mt-[30px]">
              LinkTree Clone
            </h1>
            <h1 className="font-primary opacity-80 bg-[#222221] py-5 px-3 rounded-xl sm:mt-1 md:mt-3">
              Full Stack Linktree Website with google authentication,
              Animations, Dynamic head, in the backend using Express and
              Node.js, integrating with MongoDB for database management, and
              securing the API endpoints.
            </h1>
            <h1 className="mt-3 font-primary">
              NextJs Node.js Express MongoDB Tailwind
            </h1>
            <h1 className="flex gap-5 my-5">
              <a href="https://github.com/Kaju111/Next-LinkTree">
                <FaGithub size={30} />{" "}
              </a>
              <a href="https://github.com/Kaju111/LinkTree-backend">
                <FaGithub size={30} />{" "}
              </a>
            </h1>
          </div>

          <div className="sm-h[400px] sm:w-[550px] md:h-[400px] md:w-[550px] rounded-xl">
            <span>
              <motion.div
                whileHover={{ scale: 1.4, rotate: 7 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 0,
                  borderRadius: "100%",
                }}
              >
                <img
                  src={linktree}
                  className=" lg:h-[350px] lg:w-[550px] md:h-[300px] md:w-[400px] rounded-lg"
                />
              </motion.div>
            </span>
          </div>
        </div>
        //---
        <div className="grid md:grid-cols-2 mt-[70px]">
          <div className="sm-h[400px] sm:w-[550px] md:h-[400px] md:w-[550px] rounded-xl">
            <a href="https://nike-store-saikiakaju275-gmailcom.vercel.app/">
              <motion.div
                whileHover={{ scale: 1.4, rotate: -7 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 0,
                  borderRadius: "100%",
                }}
              >
                <img
                  src={shose}
                  className=" lg:h-[350px] lg:w-[550px] md:h-[300px] md:w-[400px] rounded-lg"
                />
              </motion.div>
            </a>
          </div>

          <div className="lg:h-[400px] lg:w-[550px]  md:h-[300] md:w-[400px] rounded-xl text-end">
            <h1 className="font-name text-[30px] sm:mt-[20px] md:mt-[30px]">
              Nike Store
            </h1>
            <h1 className="font-primary opacity-80 bg-[#222221] py-5 px-3 rounded-xl sm:mt-1 md:mt-3">
              This website for a demo nike store.
            </h1>
            <h1 className="mt-3 font-primary">
              ReactJs+Vite Redux-Toolkit Tailwind
            </h1>
            <h1 className="flex gap-5 justify-end my-5">
              <a href="https://github.com/Kaju111/Nike-store">
                <FaGithub size={30} />
              </a>
              <a href="https://nike-store-saikiakaju275-gmailcom.vercel.app/">
                <ImLink size={30} />
              </a>
            </h1>
          </div>
        </div>
        //---
        <div className="grid md:grid-cols-2 mt-[70px]">
          <div className="lg:h-[400px] lg:w-[550px] md:h-[300] md:w-[400px] rounded-xl">
            <h1 className="font-name text-[30px] sm:mt-[20px] md:mt-[30px]">
              Car Store
            </h1>
            <h1 className="font-primary opacity-80 bg-[#222221] py-5 px-3 rounded-xl sm:mt-1 md:mt-3">
              Using MongoDB for database management and pagination, search
              option provide
            </h1>
            <h1 className="mt-3 font-primary">ReactJs MongoDB Tailwind CSS</h1>
            <h1 className="mb-5 my-5 flex gap-5">
              <a href="https://github.com/Kaju111/car-frontend">
                <FaGithub size={30} />
              </a>
              <a href="https://github.com/Kaju111/Car-store/blob/main/backend/data.json">
                <FaGithub size={30} />
              </a>
            </h1>
          </div>

          <div className="sm-h[400px] sm:w-[550px] md:h-[400px] md:w-[550px] rounded-xl">
            <span>
              <motion.div
                whileHover={{ scale: 1.4, rotate: 7 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 0,
                  borderRadius: "100%",
                }}
              >
                <img
                  src={cars}
                  className=" lg:h-[350px] lg:w-[550px] md:h-[300px] md:w-[400px] rounded-lg"
                />
              </motion.div>
            </span>
          </div>
        </div>
        //---
        <div className="grid md:grid-cols-2 mt-[70px]">
          <div className="sm-h[400px] sm:w-[550px] md:h-[400px] md:w-[550px] rounded-xl">
            <a href="https://mbachaiwala-psi.vercel.app/">
              <motion.div
                whileHover={{ scale: 1.4, rotate: -7 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 0,
                  borderRadius: "100%",
                }}
              >
                <img
                  src={mba}
                  className=" lg:h-[350px] lg:w-[550px] md:h-[300px] md:w-[400px] rounded-xl"
                />
              </motion.div>
            </a>
          </div>

          <div className="lg:h-[400px] lg:w-[550px]  md:h-[300] md:w-[400px] rounded-xl text-end">
            <h1 className="font-name text-[30px] sm:mt-[20px] md:mt-[30px]">
              Clone Site
            </h1>
            <h1 className="font-primary opacity-80 bg-[#222221] py-5 px-3 rounded-xl sm:mt-1 md:mt-3">
              Simple Clone website with animation
            </h1>
            <h1 className="mt-3 font-primary">ReactJs Tailwind CSS</h1>
            <h1 className="flex gap-5 justify-end my-5">
              <a href="https://github.com/Kaju111/MBA-clone">
                <FaGithub size={30} />
              </a>
              <a href="https://mbachaiwala-psi.vercel.app/">
                <ImLink size={30} />{" "}
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
