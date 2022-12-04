import React from "react";
import { useLocation } from "react-router-dom";
import AnimeParents from "../../components/Anime";

function AnimePopular(props) {
  const location = useLocation();
  const currentPathname = location.pathname?.split("/")?.[2]?.replace("_", "-");

  return (
    <AnimeParents
      // url={process.env.REACT_APP_ANIME_BASE_URL}
      path={`/${currentPathname}`}
    />
  );
}

export default AnimePopular;
