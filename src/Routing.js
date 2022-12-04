import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spin from "./components/ModifAntd/Spin";
import TesPage from "./pages/TesPage";
import AnimeRouting from "./Routing/AnimeRouting";

function Routing() {
  const Home = lazy(() => import("./pages/Home"));
  const Song = lazy(() => import("./pages/Song"));
  const GeneratePPCouple = lazy(() => import("./pages/GeneratePPCouple"));
  const NotFound = lazy(() => import("./pages/NotFound"));

  const routers = [
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/song_anime",
      element: <Song />,
    },
    {
      path: "/generate_pp_couple",
      element: <GeneratePPCouple />,
    },
    {
      path: "/tes_page",
      element: <TesPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    ...AnimeRouting,
  ];
  return (
    <Routes>
      {routers?.map((router, routerIndex) => (
        <Route
          {...router}
          key={routerIndex}
          element={<Suspense fallback={<Spin />}>{router?.element}</Suspense>}
        />
      ))}
    </Routes>
  );
}

export default Routing;
