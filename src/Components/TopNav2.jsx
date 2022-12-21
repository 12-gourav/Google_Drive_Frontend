import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Dropdown, Space, Image, Avatar, Tooltip } from "antd";
import "./component.css";
import { MoreOutlined } from "@ant-design/icons";
import img from "../assets/a.png";
import { useSelector } from "react-redux";

const TopNav2 = () => {
  const { user } = useSelector((state) => state.user);

  const items = [
    {
      label: (
        <Link className="a" to="/sub-user-dashboard">
          Dashboard
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link className="a" to="/upload">
          Upload Media Files
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link className="a" to="/view">
          View Media Files
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link className="a" to="/logout">
          Logout
        </Link>
      ),
      key: "3",
    },
  ];
  return (
    <>
      <div className="top">
        <div>
          <h5 style={{ paddingLeft: "1rem" }}>Concurrent App</h5>
        </div>
        <div>
          <Tooltip title="Profile Pic">
            <Avatar
              src={<Image src={user?.pic[0].url ? user?.pic[0].url : img} />}
              style={{ border: "2px solid #5597e7" }}
            />
          </Tooltip>

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

export default TopNav2;
