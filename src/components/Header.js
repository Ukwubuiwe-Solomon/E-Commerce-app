import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const productData = useSelector((state) => state.solomon.productData);
  const userInfo = useSelector((state) => state.solomon.userInfo);

  return (
    <div className="w-[250px] md:w-full h-[50px] border-b-[2px] bg-white border-gray-800 font-titleFont sticky top-0 z-50">
      <div className=" max-w-screen-xl h-full mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl text-black font-extrabold decoration-zinc-900 hover:line-through cursor-pointer ">
            SOLOMON
          </h1>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-800 cursor-pointer hover:scale-150 duration-300 ">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-800 cursor-pointer hover:scale-150 duration-300 ">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-800 cursor-pointer hover:scale-150 duration-300 ">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-800 cursor-pointer hover:scale-150 duration-300 ">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-800 cursor-pointer hover:scale-150 duration-300 ">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <HiOutlineShoppingCart size={30} />
              <span className="absolute w-6 bg-slate-800 font-bold text-white -top-2 left-4 rounded-full justify-center items-center flex">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="userLogo"
            />
          </Link>
          {userInfo && (
            <p
              className=" cursor-pointer text-base font-titleFont font-semibold underline
            underline-offset-2"
            >
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
