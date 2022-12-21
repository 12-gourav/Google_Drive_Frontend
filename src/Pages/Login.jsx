import React from "react";
import "../App.css";
import img from "../assets/a.png";
import { Input, Select } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoadUser, LoginUser } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isvalid } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = () => {
      if (isvalid) {
        Navigate("/");
        toast.error("Already Login");
      }
    };
    return () => unsubscribe();
  }, [Navigate]);

  const handleSubmit = () => {
    setLoading(true);
    try {
      LoginUser(email, password, role)
        .then((res) => {
          if (res?.data.data) {
            dispatch({ type: "login", payload: res?.data });
            toast.success("Login Successfully");
            localStorage.setItem("token", res?.data.data.token);
            setEmail("");
            setPassword("");
            setRole("");
            LoadUser(res?.data.data.token).then((res) => {
              dispatch({ type: "load", payload: res?.data });
              Navigate("/");
            });
          }

          setLoading(false);
        })
        .catch((error) => {
          toast.error(error);
          console.log(error);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  return (
    <div className="login">
      <motion.div
        initial={{ x: -150, opacity: 0, scale: 0.5 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
        className="card"
      >
        <div className="left">
          <img src={img} alt="sssa" />
        </div>
        <div className="right">
          {loading ? <h4 className="danger">Loading...</h4> : <h4>Login</h4>}
          <div>
            <label>Email</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Enter your register Email"
            />
          </div>
          <div>
            <label>Password</label>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter your register Password"
            />
          </div>
          <div>
            <label>Role </label>
            <Select
              className="input"
              onChange={(value) => setRole(value)}
              style={{
                width: "100%",
                marginTop: "0.5rem",
              }}
              placeholder="Select Role of Authorization"
            >
              <Select.Option value="user">User</Select.Option>
              <Select.Option value="subuser">Sub User</Select.Option>
            </Select>
          </div>
          <button
            style={{ cursor: "pointer" }}
            disabled={email === "" || password === "" || role === ""}
            onClick={handleSubmit}
            className="login-btn"
          >
            Submit
          </button>
          <Link to="/register" className="link">
            Don't have an Account ?
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
