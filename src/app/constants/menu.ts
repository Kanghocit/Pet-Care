// constants/menu.ts

export const CAT_MENU = [
  {
    title: "Thức ăn mèo",
    path: "thuc-an-meo",
    items: [
      { label: "Thức ăn hạt", path: "hat" },
      { label: "Thức ăn ướt", path: "uot" },
      { label: "Thức ăn điều trị bệnh", path: "dieu-tri" },
      { label: "Bánh thưởng mèo", path: "banh-thuong" },
    ],
  },
  {
    title: "Vệ sinh",
    path: "ve-sinh",
    items: [
      { label: "Cát mèo", path: "cat-meo" },
      { label: "Chăm sóc răng miệng", path: "rang-mieng" },
      { label: "Sữa tắm", path: "sua-tam" },
      { label: "Xịt khử mùi", path: "xit-khu-mui" },
    ],
  },
  {
    title: "Phụ kiện - Đồ chơi",
    path: "phu-kien",
    items: [
      { label: "Đồ chơi", path: "do-choi" },
      { label: "Thời trang - Quần áo", path: "thoi-trang" },
      { label: "Vòng cổ - Dây dắt", path: "vong-co" },
    ],
  },
  {
    title: "Chăm sóc sức khỏe",
    path: "suc-khoe",
    items: [
      { label: "Sữa và bình bú cho mèo", path: "sua-binh-bu" },
      { label: "Vitamin và thực phẩm bổ sung", path: "vitamin" },
    ],
  },
  {
    title: "Vận chuyển - Chuồng",
    path: "van-chuyen",
    items: [
      { label: "Chuồng - Nhà nệm", path: "chuong-nha" },
      { label: "Vận chuyển", path: "phuong-tien" },
    ],
  },
  {
    title: "Bánh thưởng",
    path: "banh-thuong",
    items: [
      { label: "Bánh thưởng mềm", path: "mem" },
      { label: "Súp thưởng", path: "sup" },
      { label: "Bánh quy", path: "banh-quy" },
      { label: "Thịt sấy khô", path: "thit-say" },
    ],
  },
];

// constants/items.ts

export const SALE_MENU = [
  {
    title: "Mua X tặng Y",
    path: "mua-x-tang-y",
    items: [
      { label: "Mua 5 tặng 1", path: "mua-5-tang-1" },
      {
        label: "Mua thức ăn khô tặng bất ăn",
        path: "thuc-an-kho-tang-bat-an",
      },
      {
        label: "Mua áo tặng bánh thưởng",
        path: "ao-tang-banh-thuong",
      },
      {
        label: "Mua đồ chơi tặng thức ăn",
        path: "do-choi-tang-thuc-an",
      },
    ],
  },
  {
    title: "Flash Sale",
    path: "flash-sale",
    items: [
      { label: "Flash Sale 1 khung giờ", path: "1-khung-gio" },
      {
        label: "Flash Sale nhiều khung giờ",
        path: "nhieu-khung-gio",
      },
    ],
  },
  {
    title: "Combo phụ kiện",
    path: "combo-phu-kien",
    items: [
      { label: "Combo cho mèo", path: "cho-meo" },
      { label: "Combo cho cún", path: "cho-cun" },
      { label: "Combo halloween", path: "halloween" },
      { label: "Combo cosplay", path: "cosplay" },
    ],
  },
  {
    title: "Combo thức ăn",
    path: "combo-thuc-an",
    items: [
      { label: "Combo chăm sóc lông", path: "cham-soc-long" },
      { label: "Combo dinh dưỡng", path: "dinh-duong" },
      { label: "Combo ăn vặt", path: "an-vat" },
      { label: "Combo pate kèm hạt", path: "pate-kem-hat" },
    ],
  },
];
