import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/solomonSlice";
import { ToastContainer, toast } from 'react-toastify';

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const id = product.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };

  const rootId = idString(id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="group">
      <div
        onClick={handleDetails}
        className="w-[200px] h-90 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-titleFont font-semibold text-sm">
              {product.title.substring(0, 15)}
            </h1>
          </div>
          <div className="flex justify-end gap-2 relative text-sm overflow-hidden w-28">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="font-semibold">${product.price}</p>
            </div>
            <p onClick={()=> dispatch(addToCart({
              id:product.id,
              title:product.title,
              image:product.image,
              price:product.price,
              quantity:1,
              description:product.description
            })) & toast.success(`${product.title} is added`)
          }
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900
            flex items-center top-0
             transform -translate-x-32 group-hover:translate-x-0 transition-transform 
             cursor-pointer duration-500"
            >
              add to cart{" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
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

export default ProductsCard;
