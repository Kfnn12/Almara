import { lazy } from "react";
import StreamingAnime from "../pages/Anime/StreamingAnime";

const Anime = lazy(() => import("../pages/Anime/Anime"));
const AnimeTrending = lazy(() => import("../pages/Anime/AnimeTrending"));
const AnimePopular = lazy(() => import("../pages/Anime/AnimePopular"));
const AnimeAiringSchedule = lazy(() =>
  import("../pages/Anime/AnimeAiringSchedule")
);
const AnimeRandom = lazy(() => import("../pages/Anime/AnimeRandom"));
const DetailAnime = lazy(() => import("../pages/Anime/DetailAnime"));

const AnimeRouting = [
  {
    path: "/anime",
    element: <Anime />,
  },
  {
    path: "/anime/trending",
    element: <AnimeTrending />,
  },
  {
    path: "/anime/popular",
    element: <AnimePopular />,
  },
  {
    path: "/anime/airing_schedule",
    element: <AnimeAiringSchedule />,
  },
  {
    path: "/anime/random_anime",
    element: <AnimeRandom />,
  },
  {
    path: "/anime/:id",
    element: <DetailAnime />,
  },
  {
    path: "/anime/:id/:episodeId",
    element: <StreamingAnime />,
  },
];
export default AnimeRouting;
