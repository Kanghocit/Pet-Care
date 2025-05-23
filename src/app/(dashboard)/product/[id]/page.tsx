import BreadCumb from "@/app/components/breadCumb";
import ProductDetailPicture from "./components/ProductDetailPicture";
import ProductDetailInfo from "./components/ProductDetailInfo";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <>
      <div className="p-4 flex flex-col gap-4 max-w-screen-2xl mx-auto">
        <BreadCumb />
        <div className="grid grid-cols-2 bg-[#f4f4f4] p-4 rounded-md mx-4 shadow-sm">
          <ProductDetailPicture />
          <ProductDetailInfo />
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
