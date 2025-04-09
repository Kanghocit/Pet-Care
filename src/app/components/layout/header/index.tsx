import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Language from "./Language";
import { Badge, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex items-center justify-evenly bg-white m-2 p-3 gap-3">
        <Link href="/">
          <img src="/images/logo.webp" alt="logo" />
        </Link>
        <SearchBar />
        <Language />

        <Button color="default" variant="outlined">
          Đăng nhập{" "}
        </Button>
        <Button type="default">
          <Badge count={5}>
            <ShoppingCartOutlined style={{ fontSize: 24 }} />
          </Badge>
          <p>Giỏ hàng</p>
        </Button>
      </header>
    </>
  );
};

export default Header;
