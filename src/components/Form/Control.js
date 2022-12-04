import { Typography } from "antd";
import React from "react";
import Input from "./Input";

function Control({ ...props }) {
  const type = {
    text: <Input {...props} />,
  };

  if (type.hasOwnProperty(props?.type)) {
    return type?.[props?.type];
  } else {
    return <Typography.Text type="warning">Type not found</Typography.Text>;
  }
}

export default Control;
