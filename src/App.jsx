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
<<<<<<< HEAD
    // return () => unsubscribe();
  }, [dispatch, token]);
=======
    return () => unsubscribe();
  }, [dispatch,token]);
>>>>>>> e3547a4646b6f90ca4a5e9e1eb979986b99cd923

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
