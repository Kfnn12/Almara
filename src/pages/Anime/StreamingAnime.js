import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Button, Col, Row, Typography } from "antd";
import Spin from "../../components/ModifAntd/Spin";

function StreamingAnime(props) {
  const { episodeId } = useParams();
  const { data, loading, error } = useFetch({
    type: "anime",
    path: `/watch/${episodeId}`,
  });

  if (loading) {
    return <Spin />;
  }

  return (
    <Fragment>
      <Typography.Title level={2}>
        {episodeId?.replaceAll("-", " ")?.slice(0, 1)?.toUpperCase() +
          episodeId?.replaceAll("-", " ")?.slice(1)}
      </Typography.Title>
      <iframe
        src={data?.headers?.Referer}
        title={episodeId}
        style={{
          width: "90%",
          height: "82vh",
          margin: "0 auto 20px",
          display: "flex",
        }}
      />
      {data?.sources?.length ? (
        <Row
          gutter={[16, 15]}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data?.sources?.map((item, itemIndex) => (
            <Col>
              <a href={`${item?.url}`} target="_blank" rel="noreferrer">
                <Button size="large" shape="round" type="primary">
                  {item?.quality}
                </Button>
              </a>
            </Col>
          ))}
        </Row>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
}

export default StreamingAnime;
