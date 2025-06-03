import { CAT_MENU, SALE_MENU } from "@/app/constants/menu";
import { PhoneOutlined, ShopOutlined } from "@ant-design/icons";
import MegaMenu from "./MegaMenu";
import Link from "next/link";

const Menu = () => {
  return (
    <ul className="bg-[#ff8662] flex items-center justify-center gap-20 px-3 text-xl text-white font-semibold ">
      <ul className="flex items-center justify-end gap-2 cursor-pointer hover:text-[#ffc902]">
        <Link href="/">Trang chủ</Link>
      </ul>
      <ul className="flex items-center justify-end gap-2 cursor-pointer hover:text-[#ffc902]">
        <Link href="/products">Sản phẩm</Link>
      </ul>
      <MegaMenu
        label="Mua cho mèo"
        menuData={CAT_MENU}
        numberCol={3}
        widthCol={150}
        path="thucung"
      />
      <MegaMenu
        label="Mua cho chó"
        menuData={SALE_MENU}
        numberCol={2}
        widthCol={100}
        path="sale"
      />
      <li className="flex items-center justify-center gap-2 cursor-pointer hover:text-[#ffc902]">
        <ShopOutlined /> Today's Sale
      </li>
      <li className="flex items-center justify-center gap-2 cursor-pointer hover:text-[#ffc902]">
        Dịch vụ
      </li>
      <li className="flex items-center justify-center gap-2 cursor-pointer hover:text-[#ffc902]">
        Blog
      </li>
      <li className="flex items-center justify-center gap-2 cursor-pointer  hover:text-[#ffc902]">
        <PhoneOutlined /> Liên hệ
      </li>
    </ul>
  );
};
export default Menu;
