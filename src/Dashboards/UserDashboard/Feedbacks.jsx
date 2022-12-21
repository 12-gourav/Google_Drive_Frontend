import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CreateFeedback } from "../../redux/actions/action";
import img from "../../assets/main2.png";
import { Input } from "antd";

const Feedbacks = () => {
  const { user } = useSelector((state) => state.user);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handleSubmit = () => {
    setLoading(true);
    const id = user?._id;
    const name = user?.name;
    const avtar = user?.pic[0].url;
    CreateFeedback(token, id, name, feedback, avtar)
      .then((res) => {
        toast.success(res.data.message);
        setLoading(false);
        setFeedback("");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.error);
      });
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <img src={img} alt="sssa" />
        </div>
        <div className="right">
          {loading ? <h4 className="danger">Loading...</h4> : <h4>Feedback</h4>}
          <div>
            <label>FeedBack</label>
            <Input
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="input"
              placeholder="Enter your Feedbacks"
            />
          </div>
          <br></br>
          <button
            style={{ cursor: "pointer" }}
            disabled={feedback === ""}
            onClick={handleSubmit}
            className="login-btn"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
