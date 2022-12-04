import React from "react";

const VideoPlayer = ({ url }) => {
  return <iframe url={url} title={url} />;
};

export default VideoPlayer;
