import React from "react";
import { Card, Image, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
const { Meta } = Card;

import { MoreOutlined } from "@ant-design/icons";
import { LoadUser, RemovedMedia } from "../../redux/actions/action";
import { toast } from "react-toastify";

const Media_User = ({ s }) => {
  return (
    <div className="media-section">
      <div className="media-box">
        <h4>Media Files</h4>
        <hr></hr>
        <div className="media-wrap">
          {s?.storage.map((data) => (
            <Card
              key={data._id}
              hoverable
              style={{
                width: 240,
                height: 260,
                margin: "1rem",
              }}
              cover={
                <Image
                  style={{
                    objectFit: "contain",
                    height: "200px",
                    width: "100%",

                    padding: "0.5rem",
                  }}
                  alt="example"
                  src={data.url}
                />
              }
            >
              <Meta title={data.title.substring(40, [0])} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media_User;
