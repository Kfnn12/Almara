import { Popover, Tooltip } from "antd";
import React from "react";
import VideoPlayer from "./VideoPlayer";
import { StarFilled, PlayCircleFilled } from "@ant-design/icons";

const DescriptionCard = ({ item }) => {
  const BASE_URL_YOUTUBE = "https://www.youtube.com/watch?v=";

  return (
    <>
      <Popover
        trigger="click"
        content={
          <>
            {item?.trailer?.hasOwnProperty("id") ? (
              <VideoPlayer url={`${BASE_URL_YOUTUBE}${item?.trailer?.id}`} />
            ) : (
              <React.Fragment />
            )}
          </>
        }
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Tooltip title="Play Trailer" placement="bottom">
          <PlayCircleFilled
            style={{
              position: "absolute",
              top: 30,
              right: 0,
              zIndex: 999,
              fontSize: 30,
              color: "#3697F9",
            }}
          />
        </Tooltip>
      </Popover>
      <StarFilled />
      {item?.rating}
    </>
  );
};
export default DescriptionCard;
