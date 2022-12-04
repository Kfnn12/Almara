import { Button, Image, Space, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import BocchiTheRock from "../assets/images/BocchiTheRock.gif";
import { ImageWrapper } from "../styled/ImageWrapper.styled";

function NotFound(props) {
  const navigate = useNavigate();

  const { Title, Text } = Typography;

  return (
    <Space
      align="center"
      size="middle"
      direction="vertical"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <ImageWrapper>
        <Image
          placeholder={false}
          src={BocchiTheRock}
          preview={{ visible: false }}
        />
      </ImageWrapper>
      <Title level={2}>404</Title>
      <Text>Not Found Page</Text>
      <Button onClick={() => navigate(-1)} type="primary">
        Back
      </Button>
    </Space>
  );
}

export default NotFound;
