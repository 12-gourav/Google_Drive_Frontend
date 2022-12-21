import { Input } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  DeleteSubUser,
  LoadUser,
  UpdateSubUser,
} from "../../redux/actions/action";

const UpdateSubUserProfile = ({ sub, loading, setLoading }) => {
  //   const { sub } = useSelector((state) => state.user);

  useEffect(() => {
    setName(sub?.name);
    setEmail(sub?.email);
    setPassword(sub?.password);
    setContact(sub?.contact);
  }, [sub]);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [contact, setContact] = useState();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const id = sub?._id;
      const token = localStorage.getItem("token");

      UpdateSubUser(token, id, name, email, password, contact).then((res) => {
        if (res) {
          toast.success("User Update SuccessFully");
          LoadUser(token).then((res) => {
            dispatch({ type: "load", payload: res?.data });
          });
        }
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };
  const handleDelete = async () => {
    setLoading(true);
    try {
      const call = window.confirm("Are You Sure You want delete this record ");
      if (call) {
        const id = sub?._id;

        const token = localStorage.getItem("token");

        DeleteSubUser(token, id).then((res) => {
          if (res) {
            toast.success(res.message);
            LoadUser(token).then((res) => {
              dispatch({ type: "load", payload: res?.data });
            });
          }
          setLoading(false);
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="update-profile">
      <div className="form">
        <div>
          <label>Name</label>
          <Input
            className="input"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <Input
            className="input"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <Input.Password
            className="input"
            placeholder="User Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Contact No</label>
          <Input
            className="input"
            placeholder="User Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="btns">
          <button className="update-btn" onClick={handleSubmit}>
            Update
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateSubUserProfile;
