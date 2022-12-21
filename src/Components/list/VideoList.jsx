import React from "react";
import { Card, Image, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
const { Meta } = Card;
import { MoreOutlined } from "@ant-design/icons";
import {
  LoadUser,
  RemovedMedia,
  RemovedVideo,
} from "../../redux/actions/action";
import { toast } from "react-toastify";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const VideoList = () => {
  const { user } = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const handleDelete = (picid, public_id, size) => {
    console.log(public_id);
    const exist = user?.existlimit;
    const val = parseFloat(exist) - parseFloat(size);
    RemovedVideo(token, picid, public_id, val.toFixed(2))
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
        <h4>Video and Audio Files</h4>
        <hr></hr>
        <div className="media-wrap">
          {user?.videos.map((data) => (
            <div className="m-card" key={data._id}>
              {data.type1 === "video/mp4" ? (
                <video src={data?.url} controls style={{ width: "100%" }} />
              ) : (
                <div className="music">
                  <AudioPlayer src={data.url} />
                </div>
              )}
              <h5>{data.title.substring(30, [0])}</h5>
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
                    color: "silver",
                    fontSize: "1.1rem",
                  }}
                />
              </Popover>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
