import React, { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const AdminRoute = lazy(() => import("../AdminRoute"));
const SubUserForm = lazy(() => import("../Components/Forms/SubUserForm"));
const ViewSubUser = lazy(() => import("../Components/list/ViewSubUser"));
const Logout = lazy(() => import("../Components/Logout"));
const VideoFileUploader = lazy(() => import("../Components/VideoFileUploader"));
const SubDashboard = lazy(() =>
  import("../Dashboards/Sub User Dashboard/SubDashboard")
);
const Feedbacks = lazy(() => import("../Dashboards/UserDashboard/Feedbacks"));
const UserDashboard = lazy(() =>
  import("../Dashboards/UserDashboard/UserDashboard")
);
const ViewProfile = lazy(() =>
  import("../Dashboards/UserDashboard/ViewProfile")
);
const UserRoute = lazy(() => import("../UserRoute"));
const About = lazy(() => import("./About"));
const LandingPage = lazy(() => import("./LandingPage"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));

const Home = () => {
  return (
    <Suspense
      fallback={
        <div
          className=""
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "green",
            fontWeight: "bold",
          }}
        >
          ___Cool
          <LoadingOutlined />
          Drive___
        </div>
      }
    >
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ViewProfile />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/user-dashboard"
            element={
              <AdminRoute>
                <UserDashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/create-sub-user"
            element={
              <AdminRoute>
                <SubUserForm />
              </AdminRoute>
            }
          />
          <Route
            path="/sub-user-dashboard"
            element={
              <UserRoute>
                <SubDashboard />
              </UserRoute>
            }
          />
          <Route
            path="/sub-user-list"
            element={
              <AdminRoute>
                <ViewSubUser />
              </AdminRoute>
            }
          />
          <Route path="/logout" element={<Logout />} />
          <Route path="/video" element={<VideoFileUploader />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/feedback"
            element={
              <AdminRoute>
                <Feedbacks />
              </AdminRoute>
            }
          />
        </Routes>
      </div>
    </Suspense>
  );
};

export default Home;
