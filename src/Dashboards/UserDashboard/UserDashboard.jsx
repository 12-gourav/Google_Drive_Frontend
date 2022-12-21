import React, { useState } from "react";
import UserSideNav from "../../Components/UserSideNav";
import "./userdashboard.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import TopNav from "../../Components/TopNav";
import Tables from "../../Components/Tables";
import Card from "../../Components/Card";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div className="container">
        <div className="left">
          <UserSideNav collapsed={collapsed} />
        </div>
        <div className="right">
          <TopNav />
          <div className="right-container">
            <Card user={user} />
            <Tables />
            <div className="last">@developed by Cool Developers</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
