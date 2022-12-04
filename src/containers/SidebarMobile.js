import { Drawer } from "antd";
import React from "react";

function SidebarMobile({ collapsed, closeSidebar, children }) {
  return (
    <Drawer
      open={collapsed}
      width={300}
      onClose={() => closeSidebar()}
      placement="left"
    >
      {children}
    </Drawer>
  );
}

export default SidebarMobile;
