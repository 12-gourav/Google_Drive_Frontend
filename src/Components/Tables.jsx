import React from "react";
import { Space, Table, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "User Id",
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "Password",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "Date",
    dataIndex: "dob",
    key: "dob",
  },
];

const Tables = () => {
  const { user } = useSelector((state) => state.user);

  const data = user?.subuser.map((u) => ({
    key: u._id,
    name: u.name,
    email: u.email,
    userId: u.userId,
    password: u.password,
    dob: u?.dob,
  }));

  return (
    <>
      <div className="table-container">
        <h6 className="table-head">
          Records of all the Sub Users <span>{user?.subuser.length}</span>
        </h6>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default Tables;
