import { Input, Skeleton } from "antd";
import byteSize from "byte-size";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LoadUser, UploadMedia } from "../../redux/actions/action";
import "./sub.css";

const Upload = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { user } = useSelector((state) => state.user);

  /// Calculation of bytes to mb
  const climit = byteSize(images?.size);
  const mlimit = byteSize(user?.maxlimit);
  const storagelimit = user?.existlimit;
  var sendlimit = 0;
  var bad = 0;
  if (climit?.unit == "kB") {
    const mbvalue = climit?.value / 1024;
    console.log(mbvalue.toFixed(2), "mb");
    bad = mbvalue.toFixed(2);
    const newclimit = parseFloat(storagelimit) + parseFloat(mbvalue);
    sendlimit = newclimit.toFixed(2);
  } else {
    const newclimit = parseFloat(storagelimit) + parseFloat(climit?.value);
    sendlimit = newclimit.toFixed(2);
    bad = climit?.value;
  }

  /////

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    console.log(images?.size);
    if (sendlimit < mlimit) {
      const myForm = new FormData();
      myForm.append("title", title);
      myForm.append("images", images);
      myForm.append("limit", sendlimit);
      myForm.append("fileSize", bad);
      try {
        await UploadMedia(token, myForm).then((res) => {
          if (res.data) {
            toast.success("Data Uploaded SuccessFully");
            setImages("");
            setTitle("");
            setLoading(false);
            LoadUser(token)
              .then((res) => {
                dispatch({ type: "load", payload: res?.data });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
        setLoading(false);
      }
    } else {
      toast.error("Your File size is more then your available storage");
      setLoading(false);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload">
      <h3>Upload Media Files</h3>
      {loading ? (
        <Skeleton active={true} style={{ margin: "1rem 0" }} />
      ) : (
        <div className="form">
          <div>
            <label>Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
              placeholder="Enter Post Title"
            />
          </div>
          <div className="">
            <label>Media</label>
            <input
              onChange={(e) => setImages(e.target.files[0])}
              className="drag"
              type="file"
              multiple
              name="images"
            />
          </div>
        </div>
      )}
      <button
        disabled={images == "" || title == ""}
        className="upload-btn"
        type="submit"
      >
        {loading ? "Uploading....." : "   Upload Media"}
      </button>
    </form>
  );
};

export default Upload;
