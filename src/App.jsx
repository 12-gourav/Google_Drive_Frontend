import React, { useEffect } from "react";
import { LoadUser } from "./redux/actions/action";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./Pages/Home";

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  ///correct mechanism of useeffect
  useEffect(() => {
    // const unsubscribe = () => {
    console.log(token);
    LoadUser(token)
      .then((res) => {
        console.log(res);
        if (res?.data.data) {
          dispatch({ type: "load", payload: res?.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // };
    //cleanup
    // return () => unsubscribe();
  }, [dispatch, token]);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
