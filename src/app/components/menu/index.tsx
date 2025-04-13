import { CAT_MENU, SALE_MENU } from "@/app/constants/menu";
import { PhoneOutlined, ShopOutlined } from "@ant-design/icons";
import MegaMenu from "./MegaMenu";

const Menu = () => {
  return (
    <ul className="bg-[#ff8662] flex items-center justify-center gap-20 px-3 text-xl text-white font-semibold ">
      <ul className="flex items-center justify-end gap-2 cursor-pointer hover:text-[#ffc902]">
        Trang chủ
      </ul>
      <MegaMenu
        label="Đồ dùng thú cưng"
        menuData={CAT_MENU}
        numberCol={3}
        widthCol={150}
        path="thucung"
      />
      <MegaMenu
        label="Sale"
        menuData={SALE_MENU}
        numberCol={2}
        widthCol={100}
        path="sale"
      />
      <li className="flex items-center justify-center gap-2 cursor-pointer hover:text-[#ffc902]">
        Dịch vụ chăm sóc pets
      </li>
      <li className="flex items-center justify-center gap-2 cursor-pointer hover:text-[#ffc902]">
        Tạp chí chăm Boss
      </li>
      <li className="flex items-center justify-center gap-2 cursor-pointer hover:text-[#ffc902]">
        <ShopOutlined /> Hệ thống cửa hàng
      </li>
      <li className="flex items-center justify-center gap-2 cursor-pointer  hover:text-[#ffc902]">
        <PhoneOutlined /> Hotline: 0909090909
      </li>
    </ul>
  );
};
export default Menu;
