import axios from "axios";

const fetchFunction = () => {
  const get = async () => {
    await axios({
      method: "get",
      url: "https://api.consumet.org/meta/anilist/popular",
    }).then((res) => {
      console.log("res : ", res);
    });
  };

  return { get };
};
export default fetchFunction;
