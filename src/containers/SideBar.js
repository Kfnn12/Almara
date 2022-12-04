import React from "react";
import { Layout, Grid, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { SidebarMenuData } from "../helpers/helpersMenuData";

function SideBar({ collapsed, siderToggleHandle, accessLinkHandle }) {
  const { Sider } = Layout;
  const { xs } = Grid.useBreakpoint();
  const location = useLocation();

  return (
    <Sider
      trigger={xs && null}
      collapsible
      collapsed={xs ? false : collapsed}
      onCollapse={(val) => siderToggleHandle(val)}
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        height: "100vh",
      }}
    >
      <Menu
        style={{ minWidth: 0, flex: "auto" }}
        theme="light"
        mode="inline"
        defaultSelectedKeys={[location.pathname.toString()]}
        selectedKeys={[location.pathname.toString()]}
        // defaultOpenKeys={[location.pathname.toString()]}
        defaultOpenKeys={["/anime"]}
        // onSelect={(e) => console.log("e : ", e)}
      >
        {SidebarMenuData()?.map((item, itemIndex) => (
          <>
            {item?.childrens?.length ? (
              <Menu.SubMenu
                {...(!xs && {
                  onTitleClick: () => accessLinkHandle(item?.path),
                })}
                key={item?.path}
                title={item?.name}
              >
                {item?.childrens?.map((child, childIndex) => (
                  <Menu.Item key={child?.path}>
                    <Link to={child?.path}>{child?.name}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={item?.key}>
                <Link to={item?.path}>{item?.name}</Link>
              </Menu.Item>
            )}
          </>
        ))}
      </Menu>
    </Sider>
  );
}

export default SideBar;
