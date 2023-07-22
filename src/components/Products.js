import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({products}) => {
  
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="rounded-xl text-2xl bg-black text-center py-2 text-white w-80">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-700 text-center">
          I am so glad for this project, I have passion for coding most
          especially, in the UI aspect of software engineering learning new
          skills and technologies gives me Joy. And I have fast learning ability
          and can handle multiple projects at parallel{" "}
        </p>
      </div>
      <div className="max-w-screen-xl md:mx-auto py-10 grid grid-cols-2 px-2  gap-10 md:px-0 md:grid-cols-4 md:gap-10">
      {
        products.map((item)=>(
          <ProductsCard key={item.id} product={item}/>
        ))
      }
      </div>
      
    </div>
  );
};

export default Products;
