import { Avatar, List, Space } from "antd";
import React from "react";
import "./about.css";
import { GithubOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about">
      <motion.h2
        initial={{ x: -100, scale: 0 }}
        whileInView={{ x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      >
        About <span>CoolDrive</span>
      </motion.h2>
      <hr></hr>
      <p>
        {" "}
        A comfortable way to have access to all your files.It manages every
        media type files format.
        <br></br>All data are stored in the encrypted formates
      </p>
      <p>
        Before we go into all the benefits of using cloud storage, let’s quickly
        go over how it works. When you upload a file to a cloud storage service,
        it gets saved on a remote computer called a “server.” You can access
        these servers from anywhere in the world via the internet. This means
        that your file is no longer tied to your device, and you can access it
        from any device, anywhere in the world.
      </p>
      <b>Advantages</b>
      <List>
        <List.Item>
          A cloud storage service has many benefits over traditional physical
          storage methods, including more accessible data storage.
        </List.Item>
        <List.Item>
          Using the cloud, you can easily share files and collaborate with
          others.
        </List.Item>
        <List.Item>
          The only true disadvantage of cloud storage is that you need to be
          online to use it.
        </List.Item>
      </List>

      <h3>Our Team</h3>
      <Space>
        <Avatar
          size={50}
          src="https://avatars.githubusercontent.com/u/67543863?v=4"
        />
        <p>
          <UserOutlined
            style={{
              paddingRight: "0.5rem",
              color: "#606CFC",
              fontWeight: "bold",
            }}
          />
          Gaurav Bajpai <b>(Cool Developer)</b>
        </p>
        <p>
          <GithubOutlined
            style={{
              paddingRight: "0.5rem",
              color: "#606CFC",
              fontWeight: "bold",
            }}
          />
          <a href="https://github.com/12-gourav">
            https://github.com/12-gourav
          </a>
        </p>
        <p>
          <MailOutlined
            style={{
              paddingRight: "0.5rem",
              color: "#606CFC",
              fontWeight: "bold",
            }}
          />
          gouravbajpai143@gmail.com <b>(+91 7355 22 8160)</b>
        </p>
      </Space>
    </div>
  );
};

export default About;
