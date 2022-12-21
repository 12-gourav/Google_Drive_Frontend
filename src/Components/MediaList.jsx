import React from "react";
import { Card, Image, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
const { Meta } = Card;
import img from "../assets/a.png";
import { MoreOutlined } from "@ant-design/icons";
import { LoadUser, RemovedMedia } from "../redux/actions/action";
import { toast } from "react-toastify";

const MediaList = () => {
  const { user } = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const handleDelete = (picid, public_id, size) => {
    console.log(public_id);
    const exist = user?.existlimit;
    const val = parseFloat(exist) - parseFloat(size);
    RemovedMedia(token, picid, public_id, val.toFixed(2))
      .then((res) => {
        if (res?.data.data) {
          toast.success("Media deleted successFully");
          console.log(res);
          LoadUser(token)
            .then((res) => {
              dispatch({ type: "load", payload: res.data });
            })
            .catch((err) => toast.error(err.response.data.error));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="media-section">
      <div className="media-box">
        <h4>Media Files</h4>
        <hr></hr>
        <div className="media-wrap">
          {user?.storage.map((data) => (
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
              <Popover
                title={`Id : ${data._id}`}
                content={
                  <a
                    onClick={() =>
                      handleDelete(data._id, data.public_id, data.fileSize)
                    }
                  >
                    Delete{" "}
                  </a>
                }
              >
                <MoreOutlined
                  style={{
                    float: "right",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                    position: "absolute",
                    zIndex: "999",
                    top: 0,
                    right: 0,
                    marginTop: "0.5rem",
                    color: "silver",
                  }}
                />
              </Popover>
              <Meta title={data.title.substring(40, [0])} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaList;
