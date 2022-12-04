import { Button, Col, Descriptions, Image, Row, Spin } from "antd";
import React, { Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components";

function DetailAnime() {
  const { id } = useParams();

  const { data, loading } = useFetch({
    type: "anime",
    path: `/info/${id}`,
  });

  const { title, description, popularity, cover, status, episodes } = data;

  const ImageWrapper = styled.div`
    .ant-image {
      margin: 0 auto !important;
      display: flex !important;
    }
  `;

  return (
    <Spin spinning={loading}>
      <ImageWrapper>
        <Image src={cover} width={300} />
      </ImageWrapper>
      <Descriptions
        title={title?.romaji}
        bordered
        column={{
          xxl: 4,
          xl: 3,
          lg: 3,
          md: 3,
          sm: 2,
          xs: 1,
        }}
        layout="vertical"
      >
        <Descriptions.Item label="Description">{description}</Descriptions.Item>
        <Descriptions.Item label="Popularity">{popularity}</Descriptions.Item>
        <Descriptions.Item label="Status">{status}</Descriptions.Item>
      </Descriptions>

      {episodes?.length ? (
        <Row gutter={[16, 16]}>
          {episodes?.map((item, itemIndex) => (
            <Col>
              <Link to={item?.id}>
                <Button key={itemIndex} shape="circle">
                  {item?.number}
                </Button>
              </Link>
            </Col>
          ))}
        </Row>
      ) : (
        <Fragment />
      )}
    </Spin>
  );
}

export default DetailAnime;
