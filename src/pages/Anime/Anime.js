import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Anime() {
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Link to="/anime/movie">
            <Card title="Card title">Anime Movie</Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/anime/series">
            <Card title="Card title">Anime Series</Card>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default Anime;
