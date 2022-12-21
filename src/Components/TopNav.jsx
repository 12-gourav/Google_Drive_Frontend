import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Dropdown, Space, Input } from "antd";
import "./component.css";
import { MoreOutlined } from "@ant-design/icons";
const { Search } = Input;
const TopNav = () => {
  const items = [
    {
      label: (
        <Link className="a" to="/profile">
          View Profile
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link className="a" to="/logout">
          Logout
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  return (
    <>
      <div className="top">
        <Search
          placeholder="input search text"
          style={{ paddingLeft: "1rem", width: "40%" }}
        />

        <div>
          <Link className="a" to="/profile">
            View Profile
          </Link>
          <Link className="a" to="/logout">
            Logout
          </Link>
        </div>
      </div>
      <div className="top2">
        <h5>Concurent App</h5>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MoreOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </>
  );
};

export default TopNav;
