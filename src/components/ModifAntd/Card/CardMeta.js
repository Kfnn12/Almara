import { Card, Grid, Tooltip } from "antd";
import React from "react";

function CardMeta({ placementTooltip, ...props }) {
  const { Meta } = Card;
  const { xs } = Grid.useBreakpoint();

  return (
    <>
      {xs ? (
        <Tooltip title={props?.title} placement={placementTooltip}>
          <Meta {...props} />
        </Tooltip>
      ) : (
        <Meta {...props} />
      )}
    </>
  );
}

export default CardMeta;
