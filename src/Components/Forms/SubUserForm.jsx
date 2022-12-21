import React from "react";
import "./sub.css";
import { Input, Select, DatePicker, Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterSubUser, LoadUser } from "../../redux/actions/action";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const SubUserForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [storage, setStorage] = useState("");
  const [pic, setPic] = useState([]);

  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("age", age);
    myForm.append("gender", gender);
    myForm.append("contact", contact);
    myForm.append("email", email);
    myForm.append("address", address);
    myForm.append("userId", userId);
    myForm.append("password", password);
    myForm.append("dob", dob);
    myForm.append("storage", storage);
    myForm.append("pic", pic);

    const token = localStorage.getItem("token");

    RegisterSubUser(myForm, token)
      .then((res) => {
        if (res?.data) {
          toast.success("User Register SuccessFully");
          setName("");
          setAge("");
          setGender("");
          setAddress("");
          setContact("");
          setUserId("");
          setPassword("");
          setDob("");
          setStorage("");
          setPic("");

          Navigate("/user-dashboard");
          LoadUser(token).then((res) =>
            dispatch({ type: "load", payload: res?.data })
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="box">
        <form className="box2" onSubmit={handleSubmit}>
          {loading ? (
            <h4 className="danger">Loading....</h4>
          ) : (
            <h4> Registration Form</h4>
          )}
          <div className="row x">
            <div className="col">
              <label>Name</label>
              <Input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter User Name"
                style={{ marginTop: "0.5rem", width: "100%" }}
              />
            </div>
            <div className="col">
              <label>Age</label>

              <Input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter User Age"
                style={{ marginTop: "0.5rem", width: "100%" }}
              />
            </div>
            <div className="col">
              <label>Gender</label>
              <Select
                value={gender}
                onChange={(value) => setGender(value)}
                defaultValue="Select Gender"
                style={{
                  width: "100%",
                  marginTop: "0.5rem",
                }}
              >
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </div>
          </div>
          {/* ///two */}
          <div className="row">
            <div className="col">
              <label>Contact No</label>
              <Input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter User Contact Number"
                style={{ marginTop: "0.5rem", width: "100%" }}
              />
            </div>
            <div className="col">
              <label>Email</label>

              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter User Email Address"
                style={{ marginTop: "0.5rem", width: "100%" }}
              />
            </div>
            <div className="col">
              <label>Address</label>

              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter User Address"
                style={{ marginTop: "0.5rem", width: "100%" }}
              />
            </div>
          </div>
          {/* ///three */}
          <div className="row">
            <div className="col">
              <label>User Id</label>
              <Input
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User User Id"
                style={{ marginTop: "0.5rem", width: "100%" }}
              />
            </div>
            <div className="col">
              <label>Password</label>

              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter User Password"
                style={{ marginTop: "0.5rem", width: "100%" }}
              />
            </div>
            <div className="col">
              <label>Date of Birth</label>

              <DatePicker
                value={dob}
                onChange={(date, dateString) => setDob(date)}
                placeholder="Select Date of Birth"
              />
            </div>
          </div>
          {/* ///Four */}
          <div className="row">
            <div className="col">
              <label>Cloud Storage</label>
              <Select
                onChange={(value) => setStorage(value)}
                value={storage}
                defaultValue="Select Media Storage"
                style={{
                  width: "100%",
                  marginTop: "0.5rem",
                }}
              >
                <Select.Option value="10485760">10MB</Select.Option>
                <Select.Option value="20971520">20MB</Select.Option>
                <Select.Option value="5242880">5MB</Select.Option>
              </Select>
            </div>
            <div className="col  ">
              <label>Upload Profile Pic</label>

              <input
                type="file"
                className="input"
                placeholder="Upload Profile Pic"
                name="pic"
                multiple
                onChange={(e) => setPic(e.target.files[0])}
                style={{ marginTop: "0.5rem", width: "100%" }}
              />
            </div>
            <div className="col x"></div>
          </div>
          <button type="submit">Create User</button>
        </form>
      </div>
    </>
  );
};

export default SubUserForm;
