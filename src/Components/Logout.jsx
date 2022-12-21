import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoadUser, LogoutUser } from "../redux/actions/action";
import { useDispatch } from "react-redux";
const Logout = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const val = window.confirm("Are you sure you want to be logout");

    if (val) {
      LogoutUser(token)
        .then((res) => {
          console.log(res);
          toast.success("Logout SuccessFully");
          dispatch({ type: "logout" });
          localStorage.removeItem("token");
          Navigate("/");
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  }, [dispatch, Navigate]);
  return <div>Logout</div>;
};

export default Logout;
