import React, { useEffect } from "react";
import Card from "../ModifAntd/Card/Card";
import useFetch from "../../hooks/useFetch";
import Spin from "../../components/ModifAntd/Spin";
import CardMeta from "../ModifAntd/Card/CardMeta";
import { Row, Col, Grid, Button } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import DescriptionCard from "./DescriptionCard";
import fetchFunction from "../../helpers/fetchFunction";

function AnimeParents({ url, path, children }) {
  // const { data, loading, error } = useFetch({
  //   type: "anime",
  //   path,
  // });
  const { xs, sm } = Grid.useBreakpoint();

  // const { hasNextPage, results } = data;

  const nextPage = () => {
    console.log("data L ");
  };
  const { get } = fetchFunction();
  const a = () => {
    console.log("sa", get());
  };

  useEffect(() => {
    a();
  }, []);
  // if (loading) {
  //   return <Spin />;
  // } else if (error) {
  //   return <Card>{error}</Card>;
  // }
  // return (
  //   <>
  //     <Row gutter={[16, 32]} justify="center">
  //       {results?.length ? (
  //         <>
  //           {results?.map((item, itemIndex) => (
  //             <Col xs={12} md={8} xl={6}>
  //               <Link to={`/anime/${item?.id}`}>
  //                 <Card
  //                   styleCard={{
  //                     width: xs ? 140 : sm && 200,
  //                   }}
  //                   cover={
  //                     <img
  //                       alt={`${item?.title?.romaji}_${itemIndex}`}
  //                       key={itemIndex}
  //                       src={item?.image}
  //                       style={{ height: xs ? 200 : sm && 300 }}
  //                     />
  //                   }
  //                 >
  //                   <CardMeta
  //                     style={{ position: "relative" }}
  //                     title={item?.title?.userPreferred}
  //                     placementTooltip="left"
  //                     description={<DescriptionCard item={item} />}
  //                   />
  //                 </Card>
  //               </Link>
  //             </Col>
  //           ))}
  //           {hasNextPage && (
  //             <Button type="primary" onClick={() => nextPage()}>
  //               Next
  //             </Button>
  //           )}
  //         </>
  //       ) : (
  //         <>Data Kosong</>
  //       )}
  //     </Row>
  //   </>
  // );
}

export default AnimeParents;
