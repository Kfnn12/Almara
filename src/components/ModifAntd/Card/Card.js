import { Card as CardAntd } from "antd";
import React from "react";

function Card({ ...props }) {
  return (
    <CardAntd
      hoverable={true}
      style={{ ...props.styleCard, borderRadius: "10px" }}
      {...props}
    />
  );
}

export default Card;
