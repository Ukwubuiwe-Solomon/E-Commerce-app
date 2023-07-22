import React, { useEffect, useState } from "react";
//import {useSelector} from 'react-redux'
import { bg } from "../assets/index";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const productData = useSelector((state) => state.solomon.productData);
  const [totalAmt, setTotalAmt] = useState("")
  useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
      price += item.price * item.quantity
      return price
    })
    setTotalAmt(price.toFixed(2))
  }, [productData])
  return (
    <div>
      <img className="w-full h-60 object-cover" src={bg} alt="bgImg" />
      <div className="max-w-screen-xl py-20 flex mx-auto">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h1 className="font-medium text-2xl">Cart Totals</h1>
            <p className="flex items-center gap-4 text-base">
              subtotal
              <span className="font-titleFont font-bold text-lg">$ {totalAmt}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              shipping
              <span>
                Indeed you can react out to us from the contact info at the
                footer section of this page
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Totals<span className="text-xl font-bold">$ {totalAmt}</span>
          </p>
          <button className="bg-black text-base text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
