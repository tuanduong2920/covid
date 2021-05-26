import axiosClient from "../AxiosClient";

const Position = {
  locate: async () => {
    const res = axiosClient.get("https://ipinfo.io/?token=9da3df1b6abbc2", {
      baseURL: "",
    });
    return res;
  },
};

export default Position;
