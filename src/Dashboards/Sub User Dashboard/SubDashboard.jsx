import React from "react";
import SubTop from "../../Components/SubTop";

import "./sub.css";

import TopNav2 from "../../Components/TopNav2";
import Sub from "../../Components/Sub";

const SubDashboard = () => {
  return (
    // <>hiiiiii</>
    <div className="wrap7">
      <TopNav2 />
      <div className="no">
        <SubTop />
      </div>
      <div className="no2">
        <Sub />
      </div>
    </div>
  );
};

export default SubDashboard;
