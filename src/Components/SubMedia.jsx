import React from "react";
import { Tabs } from "antd";
import Media_User from "./list/Media_User";
import Media_Video_User from "./list/Media_Video_User";
const onChange = (key) => {
  console.log(key);
};

const SubMedia = ({ s }) => {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `Post Media`,
            key: "1",
            children: <Media_User s={s} />,
          },
          {
            label: `Audio and Videos`,
            key: "2",
            children: <Media_Video_User s={s} />,
          },
        ]}
      />
    </div>
  );
};

export default SubMedia;
