import React from "react";
import "../../App.css";
import { Card, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
const { Meta } = Card;
import img from "../../assets/a.png";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import GameModel from "./GameModel";

const ViewSubUser = () => {
  const { user } = useSelector((state) => state.user);
  const [state, setState] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState();

  const dispatch = useDispatch();

  const showModal = (s) => {
    setIsModalOpen(true);
    setResult(s);
    dispatch({ type: "sub", payload: s });
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const searched = (state) => (s) => s.email.toLowerCase().includes(state);

  return (
    <div className="card-section">
      <GameModel
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
        s={result}
      />
      <div className="card-box">
        <div className="card-top">
          <h4>Sub Users </h4>
          <div>
            <SearchOutlined className="dot" />
            <input
              value={state}
              placeholder={"Search Sub Users"}
              onChange={(e) => setState(e.target.value)}
              style={{
                width: 200,
                background: "transparent",
              }}
            />
          </div>
        </div>

        <hr></hr>
        <div className="card-wrap">
          {user?.subuser.filter(searched(state)).map((s, index) => (
            <>
              <Card
                onClick={() => showModal(s)}
                key={s._id}
                hoverable
                style={{
                  width: 240,
                  margin: "1rem",
                  padding: "0.5rem",
                }}
                cover={
                  <img
                    key={index}
                    alt="example"
                    src={s.pic[0].url ? s.pic[0].url : img}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />
                }
              >
                <Meta title={s.name} description={<>{s.email}</>} />
              </Card>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewSubUser;
