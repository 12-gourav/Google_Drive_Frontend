import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./component.css";
import Pop from "./Pop";
import img from "../assets/logo.png";

const Navigation = () => {
  const { isvalid, user } = useSelector((state) => state?.user);

  return (
    <header>
      <div className="wrap">
        <div className="left">
          <img src={img} alt="logo"></img>
          <p>CoolDrive</p>
        </div>
        <div className="right">
          <div className="pop">
            <Pop />
          </div>
          <Link to="/" className="a" style={{ color: " #3448FF" }}>
            Home
          </Link>
          <Link to="/about" className="a">
            About us
          </Link>
          {isvalid ? (
            user?.role === "user" ? (
              <Link to="/user-dashboard" className="a">
                User Dashboard
              </Link>
            ) : (
              <Link to="/sub-user-dashboard" className="a">
                Sub User Dashboard
              </Link>
            )
          ) : (
            <>
              <Link to="/Login" className="a">
                Login
              </Link>
              <Link to="/register" className="a">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
