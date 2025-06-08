import ProductCard from "@/components/product-card";
import React from "react";

const ProductsWatched = () => {
  return (
    <div className="bg-white rounded-lg p-6 mt-6 shadow">
      <h2 className="text-xl font-bold mb-2">Sản phẩm bạn đã xem</h2>
      <div className="grid grid-cols-4 gap-4">
        <ProductCard
          title="Pate Lon Wow 85g Vị Thịt Gà Và Lòng Đỏ Trứng"
          star={5}
          price={100000}
        />
        <ProductCard
          title="Pate Lon Wow 85g Vị Thịt Gà Và Lòng Đỏ Trứng"
          star={5}
          price={100000}
        />
        <ProductCard
          title="Pate Lon Wow 85g Vị Thịt Gà Và Lòng Đỏ Trứng"
          star={5}
          price={100000}
        />
        <ProductCard
          title="Pate Lon Wow 85g Vị Thịt Gà Và Lòng Đỏ Trứng"
          star={5}
          price={100000}
        />
      </div>
    </div>
  );
};

export default ProductsWatched;
