import { Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/ModifAntd/Card/Card";

function Home() {
  const items = [
    {
      path: "/anime",
      name: "Anime",
    },
    {
      path: "/song_anime",
      name: "Song",
    },
    {
      path: "/generate_pp_couple",
      name: "Generate PP Couple",
    },
  ];

  const navigate = useNavigate();

  return (
    <Row gutter={16}>
      {items?.map((item, itemIndex) => (
        <Col key={itemIndex}>
          <Card
            onClick={() => navigate(item?.path)}
            styleCard={{ cursor: "pointer" }}
          >
            {item?.name}
          </Card>
        </Col>
      ))}
      {/* <ReactQuill value={value} theme="snow" modules={editorModules} /> */}
    </Row>
  );
}

export default Home;
