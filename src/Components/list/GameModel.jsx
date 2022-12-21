import React, { useState } from "react";
import { Avatar, Button, Modal } from "antd";
import { Progress, Space } from "antd";
import { Tabs } from "antd";
import UpdateSubUserProfile from "../Forms/UpdateSubUserProfile";
import { useSelector } from "react-redux";

import img from "../../assets/a.png";
import SubMedia from "../SubMedia";

const onChange = (key) => {
  console.log(key);
};
const GameModel = ({ isModalOpen, handleOk, handleCancel, s }) => {
  const { sub } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Modal
        title={sub?.name}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={<div>a</div>}
        width={1000}
        height={500}
      >
        <div className="tab-content" style={{ height: "400px" }}>
          <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            items={[
              {
                label: `Basic Info`,
                key: "1",
                children: (
                  <div className="basic">
                    <div className="left">
                      <Avatar
                        style={{ border: "2px solid silver", margin: "1rem 0" }}
                        size={80}
                        shape="square"
                        src={sub?.pic[0].url ? sub.pic[0].url : img}
                      />
                      <h5>
                        Name : <span>{sub?.name}</span>
                      </h5>
                      <h5>
                        Email : <span>{sub?.email}</span>
                      </h5>
                      <h5>
                        Password : <span>{sub?.password}</span>
                      </h5>
                      <h5>
                        Age : <span>{sub?.age}</span>
                      </h5>
                      <h5>
                        Gender : <span>{sub?.gender}</span>
                      </h5>
                      <h5>
                        Phone : <span>{sub?.contact}</span>
                      </h5>
                      <h5>
                        Address : <span>{sub?.address}</span>
                      </h5>
                      <h5>
                        Role : <span>{sub?.role}</span>
                      </h5>
                      <h5>
                        Created At : <span>{sub?.createdAt}</span>
                      </h5>
                    </div>
                    <div className="right">
                      <b>Cloud Storage</b>
                      <div className="bar">
                        <h6>Total Storage</h6>
                        <Progress
                          percent={sub?.maxlimit}
                          strokeColor={{
                            "0%": "#108ee9",
                            "100%": "#87d068",
                          }}
                        />
                        <p>{sub?.maxlimit} MB</p>
                      </div>

                      <div className="bar">
                        <h6>Available Storage</h6>
                        <Progress
                          percent={sub?.existlimit}
                          strokeColor={{
                            "0%": "#108ee9",
                            "100%": "#87d068",
                          }}
                        />
                        <p>{sub?.existlimit} MB</p>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                label: `Media Files`,
                key: "2",
                children: <SubMedia s={s} />,
              },
              {
                label: `Update Record`,
                key: "3",
                children: (
                  <div className="update-record">
                    {loading ? (
                      <h5 className="danger">Loading</h5>
                    ) : (
                      <h5>Update User Profile</h5>
                    )}
                    <UpdateSubUserProfile
                      loading={loading}
                      setLoading={setLoading}
                      sub={sub}
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </Modal>
    </>
  );
};
export default GameModel;
