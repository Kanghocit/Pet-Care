// components/MegaMenu.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";

type MenuItem = {
  label: string;
  path: string;
};

type MenuCategory = {
  title: string;
  path: string;
  items: MenuItem[];
};

interface MegaMenuProps {
  label: string;
  path: string;
  numberCol?: number;
  widthCol?: number;
  menuData: MenuCategory[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  label,
  path,
  menuData,
  numberCol,
  widthCol,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative flex items-center cursor-pointer py-4 px-3 "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="flex items-center">
        {label} <DownOutlined className="ms-1 text-[15px]" />
      </span>

      <div className="flex flex-col">
        <div
          className={`absolute top-15 left-[-150px] items-start w-[${widthCol}vh] bg-white text-black shadow-xl p-2 py-6 gap-4 z-50 rounded-lg transition-all duration-300 ease-in-out transform ${
            open
              ? "translate-y-0 opacity-100 visible"
              : "translate-y-4 opacity-0 invisible"
          }`}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numberCol}, 1fr)`,
          }}
        >
          {menuData.map((category, idx) => (
            <div key={idx} className="ms-25">
              <Link href={category?.path} className="hover:text-orange-600">
                <h4 className="font-semibold text-[20px] mb-3 hover:text-orange-600 ">
                  {category.title} 🐈
                </h4>
              </Link>
              <ul className="space-y-2 text-[13px]">
                {category.items.map((item, i) => (
                  <li key={i}>
                    <Link href={item.path} className="hover:text-orange-600">
                      😺 {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default MegaMenu;
