import React from "react";
import { Tabs } from "antd";
import Sub from "./Sub";
import Upload from "./Forms/Upload";
import MediaList from "./MediaList";
import VideoFileUploader from "./VideoFileUploader";
import VideoList from "./list/VideoList";
import DocUploader from "./DocUploader";
import DocList from "./list/DocList";

const SubTop = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      tabPosition="left"
      style={{
        height: "100vh",
        width: "100%",
        paddingTop: "2rem",
      }}
      items={[
        {
          label: `Dashboard`,
          key: "1",
          children: <Sub />,
        },
        {
          label: `Upload Post`,
          key: "2",
          children: <Upload />,
        },
        {
          label: `Upload Video Files`,
          key: "3",
          children: <VideoFileUploader />,
        },

        {
          label: `View Media`,
          key: "4",
          children: <MediaList />,
        },

        {
          label: `View Videos`,
          key: "5",
          children: <VideoList />,
        },
      ]}
    />
  );
};
export default SubTop;
