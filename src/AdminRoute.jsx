import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  console.log(user, "user");
  const token = localStorage.getItem("token");

  return (
    <>
      {" "}
      {user && user.role === "user" && token ? children : <LoadingToRedirect />}
    </>
  );
};

export default AdminRoute;
