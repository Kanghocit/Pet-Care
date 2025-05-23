import React from "react";
import SectionHeader from "../section-header";
import ProductCard from "../product-card";
import { PRODUCTS } from "@/app/constants/product";

const Products = () => {
  return (
    <>
      <SectionHeader title="Sản phẩm cho thú cưng" />
      <div className="flex flex-wrap gap-4 justify-around items-center me-25 ms-30">
        {PRODUCTS.map((product) => (
          <div className="rounded-md overflow-visible ">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <p className="text-center font-bold text-xl mt-4">{product.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
