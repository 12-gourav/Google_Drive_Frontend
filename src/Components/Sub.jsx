import React from "react";
import { Avatar, Progress, Space, Image, Typography } from "antd";
import "./component.css";
import { useSelector } from "react-redux";
import img from "../assets/a.png";
import byteSize from "byte-size";
const Sub = () => {
  const { user } = useSelector((state) => state.user);

  const maxlimits = byteSize(user?.maxlimit);
  const existlimit = user?.existlimit;

  console.log(existlimit, "ex");

  const percent = Math.round((existlimit / maxlimits?.value) * 100);
  console.log(maxlimits?.value, "max");
  console.log(percent, "percent");

  return (
    <>
      <div className="info2">
        <h3>Personal Info</h3>
        <p className="id">{user?._id}</p>
        <br></br>
        <div className="row2">
          <div className="col">
            <Avatar
              size={100}
              shape="square"
              style={{ background: "whitesmoke", objectFit: "contain" }}
              src={<Image src={user?.pic[0].url ? user?.pic[0].url : img} />}
            />
          </div>
          <div className="col"></div>
        </div>
        <div className="row2">
          <div className="col">
            <Typography style={{ color: " rgb(131, 131, 131)" }}>
              Name :- <span>{user?.name}</span>
            </Typography>
          </div>
          <div className="col">
            <Typography style={{ color: " rgb(131, 131, 131)" }}>
              Age:- <span>{user?.age}</span>
            </Typography>
          </div>
        </div>
        <div className="row2">
          <div className="col">
            <Typography style={{ color: " rgb(131, 131, 131)" }}>
              Gender:- <span>{user?.gender}</span>
            </Typography>
          </div>
          <div className="col">
            <Typography style={{ color: " rgb(131, 131, 131)" }}>
              Contact:- <span>+91 {user?.contact}</span>
            </Typography>
          </div>
        </div>
        <div className="row2">
          <div className="col">
            <Typography style={{ color: " rgb(131, 131, 131)" }}>
              Email :- <span>{user?.email}</span>
            </Typography>
          </div>
          <div className="col">
            <Typography style={{ color: " rgb(131, 131, 131)" }}>
              Address :- <span>{user?.address}</span>
            </Typography>
          </div>
        </div>
        <div className="row2">
          <div className="col">
            <Typography style={{ color: " rgb(131, 131, 131)" }}>
              User ID :- <span>{user?.userId}</span>
            </Typography>
          </div>
          <div className="col">
            <Typography style={{ color: " rgb(131, 131, 131)" }}>
              Password :-<span>{user?.password}</span>
            </Typography>
          </div>
        </div>
        <div className="row2">
          <div className="col">
            <Typography style={{ color: " rgb(131, 131, 131)" }}>
              Date of Birth :- <span>{user?.dob}</span>
            </Typography>
          </div>
          <div className="col">
            <Typography style={{ color: " rgb(131, 131, 131)" }}>
              Total Media Posts :- <span>{user?.storage.length}</span>
            </Typography>
          </div>
        </div>
        <div className="row2">
          <div className="col">
            <Typography style={{ color: " rgb(131, 131, 131)" }}>
              Total Video and Audio Files :- <span>{user?.videos.length}</span>
            </Typography>
          </div>
          <div className="col">
            <Typography style={{ color: " rgb(131, 131, 131)" }}>
              Total Documents :- <span>{user?.docs.length}</span>
            </Typography>
          </div>
        </div>
        <div className="row3">
          <h4>Cloud Storage</h4>
        </div>
        <div className="bat" style={{ width: "80%", paddingLeft: "1rem" }}>
          <Progress percent={percent} status="active" />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: " rgb(131, 131, 131)",
              }}
            >
              {" "}
              <div className="min">{}</div>0KB
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: " rgb(131, 131, 131)",
              }}
            >
              {" "}
              <div className="max">{maxlimits?.value + "MB "}</div> Max limit
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub;
