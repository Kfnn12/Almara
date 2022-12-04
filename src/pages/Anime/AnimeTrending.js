import React from "react";
import { useLocation } from "react-router-dom";
import AnimeParents from "../../components/Anime";

function AnimeTrending(props) {
  const location = useLocation();
  const currentPathname = location.pathname?.split("/")?.[2]?.replace("_", "-");
  return <AnimeParents path={`/${currentPathname}`} />;
}

export default AnimeTrending;
