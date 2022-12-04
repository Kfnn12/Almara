export const SidebarMenuData = () => {
  const sidebar = [
    {
      name: "Home",
      path: "/",
      key: "/",
    },
    {
      name: "Anime",
      path: "/anime",
      key: "/anime",
      childrens: [
        {
          name: "Trending",
          path: "/anime/trending",
          key: "/anime/trending",
        },
        {
          name: "Popular",
          path: "/anime/popular",
          key: "/anime/popular",
        },
        {
          name: "Airing Schedule",
          path: "/anime/airing_schedule",
          key: "/anime/airing_schedule",
        },
        {
          name: "Random Anime",
          path: "/anime/random_anime",
          key: "/anime/random_anime",
        },
      ],
    },
    {
      name: "Song",
      path: "/song_anime",
      key: "/song_anime",
    },
    {
      name: "Generate PP Couple",
      path: "/generate_pp_couple",
      key: "/generate_pp_couple",
    },
  ];

  return sidebar;
};
