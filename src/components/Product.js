import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/solomonSlice";
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
  const dispatch = useDispatch()
  let [baseQty, setBaseQty] = useState(1);
  const [details, setDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);
  return (
    <div>
      <div className="max-w-screen-xl w-fit mx-auto flex  gap my-10">
        <div className="w-2/5">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="productImg"
          />
        </div>
        <div className="w-3/5 flex flex-col gap-12 justify-center ml-10">
          <div>
            <h2 className="font-semibold text-4xl">{details.title}</h2>
            <p className="text-2xl text-gray-900 font-medium mt-4">
              ${details.price}
            </p>
          </div>
          <div className="flex text-base items-center gap-2">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-sm text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>

          <div className="flex gap-4">
            <div className="w-52 items-center justify-center flex text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center
              px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center
              px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
            onClick={()=>dispatch(addToCart({
              id:details.id,
              title:details.title,
              image:details.image,
              price:details.price,
              quantity:baseQty,
              description:details.description
            })) & toast.success(`${details.title} is added`)
          }
            className="bg-black text-white py-3 px-6 active:bg-gray-800">
              add to cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
};

export default Product;
