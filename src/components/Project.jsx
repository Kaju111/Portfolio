import React from "react";
import ecom from "./images/ecom.png";
import drw from "./images/drw.png";
import shoppy from "./images/shoppy.jpeg";
import social from "./images/social.png";
import mba from "./images/mba.jpeg";
import shose from "./images/shose.jpeg";
import { FaGithub } from "react-icons/fa";
import { ImLink } from "react-icons/im";

const Project = () => {
  return (
    <div>
      <section>
        <div className="container m-auto px-4">
          <h2 className="font-primary text-[30px] sm:text-[30px] md:text-[45px] font-bold text-white ">
            {" "}
            02: Some Things I've build
          </h2>
          <div className="flex flex-col sm:flex-row gap-10 mt-11 text-white">
            <div className="border  border-gray-500 rounded-md p-5 flex-1 hover:scale-105 hover:duration-500 ease-in-out transition">
              <a href="https://server-frontend.vercel.app/">
                <img src={ecom} alt="shoppy" className="w-full h-auto" />
              </a>
              <h3 className="font-primary opacity-80 font-semibold text-[17px] py-5 px-3 rounded-xl mt-8 bg-[#222221]">
                <h1 className="uppercase font-bold text-[19px] text-white border-b mb-3">
                  E-Commerce
                </h1>
                Built a Node.js-powered e-commerce platform featuring user
                authentication, product management, and secure payment
                integration via Stripe. Included an exclusive admin dashboard
                for streamlined product and order management.
              </h3>
              <p className="uppercase font-primary text-sm mt-2 font-semibold text-white">
                MongDB : Express : Nodejs : Reactjs : Stripe : SASS : Firebase
              </p>
              <div className="flex mt-12 gap-2 ">
                <a href="https://server-frontend.vercel.app/">
                  <button className="p-3 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <ImLink size={30} />
                  </button>
                </a>
                <a href="https://github.com/Kaju111/FULLSTACK-ECOMMERCE">
                  <button className="p-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <FaGithub size={30} />{" "}
                  </button>
                </a>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5 flex-1 hover:scale-105 hover:duration-500 ease-in-out transition">
              <a href="https://blank-eight.vercel.app/">
                <img src={drw} alt="shoppy" className="w-full h-auto" />
              </a>

              <h3 className="font-primary opacity-80 font-semibold text-[17px]  py-5 px-3 rounded-xl mt-8 bg-[#222221]">
                <h1 className="uppercase font-bold text-[19px] text-white border-b mb-3">
                  drawing
                </h1>
                Developed a drawing website using React with features like
                drawing tools, shapes, text, undo/redo, and local storage
                integration. Continuing to enhance functionality for better user
                experience.
              </h3>
              <p className="uppercase font-primary text-sm mt-2 font-semibold text-white">
                reactjs : tailwind
              </p>
              <div className="flex mt-12 gap-2 ">
                <a href="https://blank-eight.vercel.app/">
                  <button className="p-3 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <ImLink size={30} />
                  </button>
                </a>
                <a href="https://github.com/Kaju111/roughjs">
                  <button className="p-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 mt-11 text-white">
            <div className="border  border-gray-500 rounded-md p-5 flex-1 hover:scale-105 hover:duration-500 ease-in-out transition">
              <a href="https://www.linkedin.com/posts/kaju-saikia-2706422a9_tech-react-node-mongo-express-cloudinary-activity-7167053279770624000-jOHR?utm_source=share&utm_medium=member_desktop">
                <img src={social} alt="shoppy" className="w-full h-auto" />
              </a>
              <h3 className="font-primary opacity-80 font-semibold text-[17px] py-5 px-3 rounded-xl mt-8 bg-[#222221]">
                <h1 className="uppercase font-bold text-[19px] text-white border-b mb-3">
                  Social Media
                </h1>
                Developed a MERN stack social media platform with Cloudinary
                integration for photo upload/delete. Features include login,
                logout, create account, comment management, follow/unfollow,
                user profiles.
              </h3>
              <p className="uppercase font-primary text-sm mt-2 font-semibold text-white">
                MongDB : Express : Nodejs : Reactjs : Stripe : SASS : Firebase
              </p>
              <div className="flex mt-12 gap-2 ">
                <a href="https://www.linkedin.com/posts/kaju-saikia-2706422a9_tech-react-node-mongo-express-cloudinary-activity-7167053279770624000-jOHR?utm_source=share&utm_medium=member_desktop">
                  <button className="p-3 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <ImLink size={30} />
                  </button>
                </a>
                <a href="https://github.com/Kaju111/MERN-SOCIALAPP">
                  <button className="p-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <FaGithub size={30} />{" "}
                  </button>
                </a>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5 flex-1 hover:scale-105 hover:duration-500 ease-in-out transition">
              <a href="https://shoppy-dashboard-seven.vercel.app/">
                <img src={shoppy} alt="shoppy" className="w-full h-auto" />
              </a>

              <h3 className="font-primary opacity-80 font-semibold text-[17px]  py-5 px-3 rounded-xl mt-8 bg-[#222221]">
                <h1 className="uppercase font-bold text-[19px] text-white border-b mb-3">
                  dashboard
                </h1>
                Simple e-com dashboard app Orders, Employees, Customers,
                Calender, Kanban, Editor, Color-Picker all sites available and
                Dark mode feafures.
              </h3>
              <p className="uppercase font-primary text-sm mt-2 font-semibold text-white">
                reactjs : tailwind
              </p>
              <div className="flex mt-12 gap-2 ">
                <a href="https://shoppy-dashboard-seven.vercel.app/">
                  <button className="p-3 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <ImLink size={30} />
                  </button>
                </a>
                <a href="https://github.com/Kaju111/React-Dashboard">
                  <button className="p-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 mt-11 text-white">
            <div className="border  border-gray-500 rounded-md p-5 flex-1 hover:scale-105 hover:duration-500 ease-in-out transition">
              <a href="https://mbachaiwala-psi.vercel.app/">
                <img src={mba} alt="shoppy" className="w-full h-auto" />
              </a>
              <h3 className="font-primary opacity-80 font-semibold text-[17px] py-5 px-3 rounded-xl mt-8 bg-[#222221]">
                <h1 className="uppercase font-bold text-[19px] text-white border-b mb-3 ">
                  Clone
                </h1>
                A landing page for a chai walla
              </h3>
              <p className="uppercase font-primary text-sm mt-2 font-semibold text-white">
                Reactjs : CSS
              </p>
              <div className="flex mt-12 gap-2 ">
                <a href="https://mbachaiwala-psi.vercel.app/">
                  <button className="p-3 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <ImLink size={30} />
                  </button>
                </a>
                <a href="https://github.com/Kaju111/MBA-clone">
                  <button className="p-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <FaGithub size={30} />{" "}
                  </button>
                </a>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5 flex-1 hover:scale-105 hover:duration-500 ease-in-out transition">
              <a href="https://nike-store-saikiakaju275-gmailcom.vercel.app/">
                <img src={shose} alt="shoppy" className="w-full h-auto" />
              </a>

              <h3 className="font-primary opacity-80 font-semibold text-[17px]  py-5 px-3 rounded-xl mt-8 bg-[#222221]">
                <h1 className="uppercase font-bold text-[19px] text-white border-b mb-3">
                  nike store
                </h1>
                A landing page for a Shose company
              </h3>
              <p className="uppercase font-primary text-sm mt-2 font-semibold text-white">
                reactjs : tailwind : Redux
              </p>
              <div className="flex mt-12 gap-2 ">
                <a href="https://nike-store-saikiakaju275-gmailcom.vercel.app/">
                  <button className="p-3 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    <ImLink size={30} />
                  </button>
                </a>
                <a href="https://github.com/Kaju111/Nike-store">
                  <button className="p-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
