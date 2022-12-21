import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { Input, Progress } from "antd";
import { useDispatch, useSelector } from "react-redux";
import byteSize from "byte-size";
import { toast } from "react-toastify";
import { LoadUser, UploadVideo } from "../redux/actions/action";
const VideoFileUploader = () => {
  const [state, setState] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [p, setP] = useState(0);
  const { user } = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const climit = byteSize(state?.size);
  const mlimit = byteSize(user?.maxlimit);
  const storagelimit = user?.existlimit;

  const newclimit = parseFloat(storagelimit) + parseFloat(climit?.value);
  const sendlimit = newclimit.toFixed(2);

  const uploadData = () => {
    setLoading(true);
    if (state.type != "video/mp4" && state.type != "audio/mpeg") {
      toast.error("Unsupported Files Formates you select...");
      setLoading(false);
      setState(null);
      return;
    }

    if (sendlimit < mlimit) {
      const data = new FormData();
      data.append("file", state);
      data.append("upload_preset", "whatsup_clone");
      data.append("cloud_name", "cooldeveloper");
      data.append("allowedFormats", ["jpg", "png", "pdf"]);
      axios
        .post(
          "https://api.cloudinary.com/v1_1/cooldeveloper/video/upload",
          data,
          {
            onUploadProgress: (result) => {
              setP(Math.round((result.loaded / result.total) * 100));
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          UploadVideo(
            token,
            res.data.public_id,
            res.data.secure_url,
            state.type,
            title,
            sendlimit,
            climit?.value
          )
            .then((res) => {
              console.log(res, "res");
              if (res) {
                toast.success("Data Uploaded SuccessFully");
                setLoading(false);
                LoadUser(token)
                  .then((res) => {
                    dispatch({ type: "load", payload: res.data });
                  })
                  .catch((err) => {
                    toast.error(err.response.data.error);
                  });
                setTitle("");
                setState("");
              }
              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
              toast.error(err.response.data.error);
              setLoading(false);
            });
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast.error("Your File size is more then your available storage");
      setLoading(false);
      setTitle("");
      setState([]);
    }
  };

  return (
    <div className="videofile">
      <h4>Upload Video and Audio Files</h4>
      <div className="fg">
        <label>Title</label>
        <Input
          className="input"
          placeholder="Enter Your Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <input
        type="file"
        multiple
        onChange={(e) => setState(e.target.files[0])}
      />
      <Progress percent={p} className="bar" />
      <button
        disabled={title == "" || state == ""}
        onClick={uploadData}
        className="btn btn-sm btn-primary"
      >
        {loading ? <LoadingOutlined /> : "Upload"}
      </button>
    </div>
  );
};

export default VideoFileUploader;
