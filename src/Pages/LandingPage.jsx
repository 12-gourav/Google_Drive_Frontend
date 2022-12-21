import React from "react";
import Navigation from "../Components/Navigation";
import img from "../assets/logo.png";
import main from "../assets/main.png";
import main2 from "../assets/main2.png";
import { Link } from "react-router-dom";
import img2 from "../assets/c1.png";
import Slider from "../Components/Slider";
import { useEffect } from "react";
import { GetFeedback } from "../redux/actions/action";
import { useState } from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [feedback, setFeedback] = useState();

  useEffect(() => {
    GetFeedback()
      .then((res) => setFeedback(res?.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="landing-section">
        <Navigation />
        <div className="data">
          <motion.div
            initial={{ x: -100, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="left1"
          >
            <div className="wrap-content">
              <motion.img
                initial={{ x: -150, opacity: 0, scale: 0.5 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.2 }}
                src={img2}
              />
              <h4>
                Manage <span>all your files</span>
                <br></br> in <span>one place</span>
              </h4>
              <h5>
                A comfortable way to have access to<br></br>
                all your files.
              </h5>
              <div className="input-group">
                <input placeholder="Enter your Email" />
                <button>Get Started</button>
              </div>
            </div>
            <img src={main} alt="" className="hideland" />
          </motion.div>

          <div className="right1">
            <motion.img
              initial={{ x: -150, opacity: 0, scale: 0.5 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              src={main}
              alt=""
            />
          </div>
        </div>
      </div>
      <motion.div
        className="www"
        initial={{ x: 0, y: -50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
      >
        <h4>Why are you Select ?</h4>
        <p>
          {" "}
          A comfortable way to have access to all your files.It manages every
          media type files format.
          <br></br>All data are stored in the encrypted formates
        </p>
      </motion.div>

      <motion.div
        initial={{ x: -150, opacity: 0, scale: 0.5 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
        className="why"
      >
        <div className="w1">
          <img src={main2} alt="main" />
        </div>
      </motion.div>
      <div className="sliders">
        <motion.h4
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        >
          What Our Client Says
        </motion.h4>
        <p>
          {" "}
          A comfortable way to have access to all your files.It manages every
          media type files format.
          <br></br>All data are stored in the encrypted formates
        </p>
        <div className="wrap">
          <Slider feedback={feedback} />
        </div>
      </div>
      <br></br>
      <hr></hr>
      <motion.div
        className="footer"
        initial={{ x: -150, opacity: 0, scale: 0.5 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
      >
        <div className="f1">
          <img src={img} />
          <h6>About Me</h6>
          <p>
            Cool Drive is Fast uploader app for secure your data free.And
            downlaod it with secure links.
          </p>
        </div>
        <div className="f2">
          <div className="f21">
            <h6>Important Links</h6>
            <Link to="/about" className="a">
              About
            </Link>
            <Link to="/Login" className="a">
              Login
            </Link>
            <Link to="/register" className="a">
              Register
            </Link>
            <Link to="/login" className="a">
              Dashboards
            </Link>
          </div>
          <div className="f22">
            <h6>Contact us</h6>
            <li>Any query: +91 7355 22 8160</li>
            <li>Download App: https://www.cooldev.com</li>
          </div>
        </div>
      </motion.div>
      <center>
        <b style={{ paddingBottom: "1rem" }}>
          Developed by CoolDeveloper(Gaurav Bajpai)
        </b>
      </center>
    </>
  );
};

export default LandingPage;
