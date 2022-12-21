import React from "react";
import "./component.css";
import img from "../assets/one.png";
import img1 from "../assets/two.png";
import img2 from "../assets/three.png";
import img3 from "../assets/four.png";
const Card = ({ user }) => {
  return (
    <div className="row">
      <div
        className="card"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img src={img} />
        <h6
          style={{
            color: "silver",
            fontWeight: "lighter",
            textTransform: "uppercase",
          }}
        >
          Total Sub Users {user?.subuser.length}
        </h6>
      </div>
      <div
        className="card"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img src={img1} />
        <h6
          style={{
            color: "silver",
            fontWeight: "lighter",
            textTransform: "uppercase",
          }}
        >
          Total Graphs {10}
        </h6>
      </div>
      <div
        className="card"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img src={img2} />
        <h6
          style={{
            color: "silver",
            fontWeight: "lighter",
            textTransform: "uppercase",
          }}
        >
          Total Feedbacks 20
        </h6>
      </div>
      <div
        className="card"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <img src={img3} />
        <h6
          style={{
            color: "silver",
            fontWeight: "lighter",
            textTransform: "uppercase",
          }}
        >
          Total Attachements 10
        </h6>
      </div>
    </div>
  );
};

export default Card;
