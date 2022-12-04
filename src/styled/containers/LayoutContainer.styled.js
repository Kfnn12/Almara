import { Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;
export const HeaderWrapper = styled(Header)`
  .ant-menu-overflow.ant-menu.ant-menu-root.ant-menu-horizontal.ant-menu-light {
    align-items: center;
  }
`;

export const SideBarWrapper = styled.div`
  ul.ant-menu.ant-menu-root.ant-menu-inline {
    margin: -28px -24px 0;
    width: 150%;
  }
`;
