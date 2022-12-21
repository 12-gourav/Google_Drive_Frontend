import React from "react";
import RegisterUserForm from "../Components/Forms/RegisterUserForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Register = () => {
  const Navigate = useNavigate();
  const { isvalid } = useSelector((state) => state.user);

  useEffect(() => {
    if (isvalid) {
      Navigate("/");
      toast.error("Already Login");
    }
  }, [Navigate]);

  return <RegisterUserForm />;
};

export default Register;
