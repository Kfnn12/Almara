import useFetch from "./useFetch";

export const useFormatResponseAnimeResult = ({ link }) => {
  const { data } = useFetch({ url: link });
  const { currentPage, hasNextPage, results } = data;

  return { currentPage, hasNextPage, results };
};
