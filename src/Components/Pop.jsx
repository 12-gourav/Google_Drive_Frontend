import React from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: (
      <Link to="/" className="a">
        Home
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/about" className="a">
        About Us
      </Link>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link to="/login" className="a">
        Login
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <Link to="/register" className="a">
        Register
      </Link>
    ),
    key: "4",
  },
];

const Pop = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space style={{ color: "#000" }}>
          <MenuUnfoldOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default Pop;
