import "./component.css";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Link } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Sub Users", "sub1", <MailOutlined />, [
    getItem(
      <Link to="/create-sub-user">Create Sub Users</Link>,
      "5",
      <UserAddOutlined />
    ),
    getItem(<Link to="/sub-user-list">View Sub Users</Link>, "6"),
  ]),
  getItem("Graphs", "1", <PieChartOutlined />),
  getItem(<Link to="/feedback">Feedbacks</Link>, "2", <PieChartOutlined />),
];

const UserSideNav = ({ collapsed }) => {
  return (
    <div
      className="set"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <h5>Concuretn App</h5>
      <Menu
        className="menu"
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default UserSideNav;
