import React from "react";
import { payment } from "../assets/index";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
// local styles
import './footer.css'

const Footer = () => {
  return (
    <div className="bg-black py-20 sm:py-4 text-[#949494] font-titleFont">
      <div className="max-w-screen-xl sm:px-4 sm:gap-5 mx-auto grid grid-cols-1 md:grid-cols-4">
        <div className="footer_section flex flex-col gap-5 justify-center text-lg text-gray-400 ">
          <h1 className="text-3xl text-white font-extrabold decoration-zinc-900 line-through cursor-pointer ">
            SOLOMON
          </h1>
          <p>www.github.com/Bobojete</p>
          <img className="w-[150px]" src={payment} alt="" />
          <div className="flex  gap-4">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="footer_section ">
          <h1 className="text-white mb-4 text-2xl font-semibold">Locate Us</h1>
          <div className="base-text flex flex-col gap-2">
            <p>React Frontend Developer</p>
            <p>Mobile: +2347039745170</p>
            <p>Email: solomonchinedu50@gmail.com</p>
            <p>Linkedln: www.linkedln.com/in/ukwubuiwe-solomon-ab3011173</p>
          </div>
        </div>
        <div>
          <h1 className="text-white mb-4 text-2xl font-semibold">Profile</h1>
          <div className="flex flex-col text-base gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              My account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              Order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        <div className="footer_section flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            type="text"
            placeholder="E-mail"
          />
          <button className="text-sm  text-white border border-b-1
           hover:bg-gray-900 active:bg-white
            active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
