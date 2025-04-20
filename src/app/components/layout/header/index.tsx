import Link from "next/link";
import SearchBar from "./SearchBar";
import Language from "./Language";
import { Avatar, Badge, Button } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-white px-3 py-2 gap-3  sticky top-0 z-10 w-full shadow-sm">
        <Link href="/" className="!ms-5 gap-2">
          <img src="/images/logo.webp" alt="logo" className="w-60" />
        </Link>
        <SearchBar />
        <div className="flex items-center justify-around gap-2">
          <Language />

          <button className="text-xl flex items-center gap-2 cursor-pointer  rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Avatar size="large">
                <UserOutlined />
              </Avatar>
              <div className="flex flex-col items-start text-sm ">
                <p>Tài khoản</p>
                <p className="font-semibold">Đăng nhập</p>
              </div>
            </div>
          </button>
          <button className="text-xl flex items-center gap-2 cursor-pointer  rounded-xl p-3 ">
            <Badge count={5}>
              <ShoppingCartOutlined style={{ fontSize: 24 }} />
            </Badge>
            <p className="text-[16px]">Giỏ hàng</p>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
