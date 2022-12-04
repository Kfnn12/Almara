import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetch = ({
  type = "",
  path = "",
  method = "get",
  dataPayload = {},
}) => {
  let url;
  if (type === "anime") {
    url = process.env.REACT_APP_ANIME_BASE_URL;
  }

  // const [state, setState] = useState({
  //   data: [],
  //   loading: true,
  //   error: "",
  // });

  // const fetchData = useCallback(async () => {
  //   await axios({
  //     method,
  //     url: `${url}${path}`,
  //     ...(method === "post" && { data: dataPayload }),
  //   })
  //     .then((res) => {
  //       setState((prevState) => ({ ...prevState, data: res?.data }));
  //     })
  //     .catch((err) => {
  //       setState((prevState) => ({
  //         ...prevState,
  //         error: error?.response?.data,
  //       }));
  //     })
  //     .finally(() => {
  //       setState((prevState) => ({ ...prevState, loading: false }));
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [state.data, method, path, url]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const { data, loading, error } = state;
  // return {
  //   data,
  //   loading,
  //   error,
  // };
  // return fetchData();

  const get = async () => {
    await axios.get(`${url}${path}`);
  };
  const p = () => {
    console.log("ddd");
  };

  // const post = async()=>{
  //   await axios.post(`${url}${path}`)
  // }

  return { p };
};

export default useFetch;
