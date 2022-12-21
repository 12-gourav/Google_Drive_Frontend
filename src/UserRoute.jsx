import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  console.log(user, "user");
  const token = localStorage.getItem("token");

  return (
    <>
      {" "}
      {user && user.role === "subuser" && token ? (
        children
      ) : (
        <LoadingToRedirect />
      )}
    </>
  );
};

export default UserRoute;
