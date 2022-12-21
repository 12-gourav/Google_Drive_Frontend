import React from "react";
import { Card, Image, Popover } from "antd";

const Media_Video_User = ({ s }) => {
  return (
    <div className="media-section">
      <div className="media-box">
        <h4>Video and Audio Files</h4>
        <hr></hr>
        <div className="media-wrap">
          {s?.videos.map((data) => (
            <div className="m-card" key={data._id}>
              {data.type1 === "video/mp4" ? (
                <video src={data?.url} controls style={{ width: "100%" }} />
              ) : (
                <div className="music">
                  <audio
                    src={data.url}
                    controls
                    style={{ background: "transparent" }}
                  />
                </div>
              )}
              <h5>{data.title.substring(30, [0])}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media_Video_User;
