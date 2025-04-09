"use client";

import React from "react";
import { Button, Input, Select, Space } from "antd";

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
  },
];

const SearchBar: React.FC = () => (
  <Space direction="vertical" size="middle">
    <Space.Compact>
      <Select defaultValue="Zhejiang" options={options} />
      <Input placeholder="Search" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
  </Space>
);

export default SearchBar;
