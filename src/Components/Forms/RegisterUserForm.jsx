import React, { useEffect } from "react";
import "./register.css";
import { Input, Select, DatePicker } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoadUser, RegisterUser } from "../../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const RegisterUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [pic, setPic] = useState([]);
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

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    let formdata = new FormData();

    formdata.append("pic", pic);
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("age", age);
    formdata.append("gender", gender);
    formdata.append("contact", contact);
    formdata.append("address", address);
    formdata.append("dob", dob);

    console.log(pic);
    RegisterUser(formdata)
      .then((res) => {
        console.log(res);
        dispatch({ type: "login", payload: res?.data });
        localStorage.setItem("token", res?.data.token);
        setName("");
        setAddress("");
        setAge("");
        setContact("");
        setDob("");
        setGender("");
        setEmail("");
        setName("");
        setPassword("");
        setPic("");
        setLoading(false);
        LoadUser(res?.data.token).then((res) => {
          dispatch({ type: "load", payload: res.data });
          Navigate("/");
          toast.success("Register SuccessFully");
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="register">
      <form
        onSubmit={handleSubmit}
        className="register-box"
        // encType="multipart/form-data"
        // method="POST"
        // action=""
      >
        <h3>Concurrent App</h3>
        <h4>Registration</h4>
        <div className="form">
          <div className="div">
            <label>Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="div">
            <label>Email</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="div">
            <label>Password</label>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter Your Password"
            />
          </div>
        </div>
        <div className="form">
          <div className="div">
            <label>Age</label>
            <Input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input"
              placeholder="Enter Your Age"
            />
          </div>
          <div className="div">
            <label>Gender</label>
            <Select
              placeholder="Select Gender"
              style={{
                marginTop: "0.5rem",
                width: "100%",
              }}
              onChange={(e) => setGender(e)}
            >
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </div>
          <div className="div">
            <label>Contact</label>
            <Input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="input"
              placeholder="Enter Your Contact No"
            />
          </div>
        </div>
        <div className="form">
          <div className="div">
            <label>Home Address</label>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input"
              placeholder="Enter Your Home Address"
            />
          </div>
          <div className="div">
            <label>Date of Birth</label>

            <DatePicker
              value={dob}
              className="input"
              onChange={(date, dateString) => setDob(date)}
              placeholder="Select Date of Birth"
            />
          </div>
          <div className="div">
            <label>Profile Pic</label>
            <input
              type="file"
              className="input"
              placeholder="Upload Profile Pic"
              name="pic"
              multiple
              onChange={(e) => setPic(e.target.files[0])}
            />
          </div>
        </div>
        <button
          disabled={
            name === "" ||
            email === "" ||
            password === "" ||
            age === "" ||
            pic === "" ||
            dob == "" ||
            contact === "" ||
            address === "" ||
            gender === ""
          }
          type="submit"
          className="register-btn"
          style={{ border: "none" }}
        >
          Register
        </button>
        <center>
          <Link className="link" to="/login">
            Already have an Account ?
          </Link>
        </center>
      </form>
    </div>
  );
};

export default RegisterUserForm;
