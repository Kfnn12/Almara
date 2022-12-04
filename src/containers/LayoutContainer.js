import React, { Fragment, useState } from "react";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Grid, Layout, Row, Col, Input, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderWrapper,
  SideBarWrapper,
} from "../styled/containers/LayoutContainer.styled";
import SideBar from "./SideBar";
import SidebarMobile from "./SidebarMobile";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Content } = Layout;

function LayoutContainer({ children }) {
  const [state, setState] = useState({
    collapsed: false,
  });

  const { xs } = Grid.useBreakpoint();

  const navigate = useNavigate();
  const location = useLocation();

  const accessLinkHandle = (path) => {
    navigate(path);
    xs && setState((prevState) => ({ ...prevState, collapsed: false }));
  };

  const siderToggleHandle = (val) => {
    setState((prevState) => ({ ...prevState, collapsed: val }));
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      <HeaderWrapper style={{ display: "flex" }}>
        <Row gutter={16} align="middle" justify="center">
          {xs && (
            <Col>
              <MenuOutlined
                style={{ color: "white" }}
                onClick={() =>
                  state?.collapsed
                    ? setState({ collapsed: false })
                    : setState({ collapsed: true })
                }
              />
            </Col>
          )}
          <Col style={{ display: "flex" }}>
            <Input.Search
              type="text"
              placeholder="Search here..."
              style={{ width: !xs && "500px" }}
              enterButton={!xs ? "Search" : <SearchOutlined />}
              onSearch={(ee) => console.log("onsearch  ", ee)}
            />
          </Col>
        </Row>
      </HeaderWrapper>

      <Layout>
        {xs ? (
          <SidebarMobile
            closeSidebar={() =>
              setState((prevState) => ({ ...prevState, collapsed: false }))
            }
            collapsed={state?.collapsed}
          >
            <SideBarWrapper>
              <SideBar
                accessLinkHandle={accessLinkHandle}
                collapsed={state?.collapsed}
                siderToggleHandle={siderToggleHandle}
              />
            </SideBarWrapper>
          </SidebarMobile>
        ) : (
          <SideBar
            accessLinkHandle={accessLinkHandle}
            collapsed={state?.collapsed}
            siderToggleHandle={siderToggleHandle}
          />
        )}

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "white",
            overflow: "auto",
          }}
        >
          {location?.pathname !== "/" ? (
            <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
              Back
            </Button>
          ) : (
            <Fragment />
          )}

          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutContainer;
