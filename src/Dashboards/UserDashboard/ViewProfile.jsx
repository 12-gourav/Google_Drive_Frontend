import { Avatar } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./userdashboard.css";
const ViewProfile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="profile">
      <div className="pbox">
        <h4>Our Profile</h4>
        <hr
          style={{
            width: "50%",
            marginTop: "0.2rem",
            borderColor: "whitesmoke",
          }}
        ></hr>
        <Avatar
          className="pimg"
          src={user?.pic[0].url}
          shape="square"
          size={100}
        />
        <h6>
          Id :-{" "}
          <span>
            <i>{user?._id}</i>{" "}
          </span>
        </h6>
        <div className="data">
          <div className="left">
            <h5>
              Name :- <span>{user?.name} </span>
            </h5>
          </div>
          <div className="right">
            <h5>
              Age :- <span>{user?.age} </span>
            </h5>
          </div>
        </div>
        <div className="data">
          <div className="left">
            <h5>
              Gender :- <span>{user?.gender} </span>
            </h5>
          </div>
          <div className="right">
            <h5>
              Date of Birth :- <span>{user?.dob} </span>
            </h5>
          </div>
        </div>
        <div className="data">
          <div className="left">
            <h5>
              Email :- <span>{user?.email} </span>
            </h5>
          </div>
          <div className="right">
            <h5>
              Password :- <span>{user?.password.substring(28, [0])}..... </span>
            </h5>
          </div>
        </div>
        <div className="data">
          <div className="left">
            <h5>
              Contact No :- <span>{user?.contact} </span>
            </h5>
          </div>
          <div className="right">
            <h5>
              Address :- <span>{user?.address.substring(28, [0])}..... </span>
            </h5>
          </div>
        </div>
        <div className="data">
          <div className="left">
            <h5>
              Role :- <span>{user?.role} </span>
            </h5>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
