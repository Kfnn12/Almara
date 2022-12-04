import React from "react";
import { Spin as SpinAntd } from "antd";

function Spin({ ...props }) {
  return (
    <SpinAntd
      style={{
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    />
  );
}

export default Spin;
