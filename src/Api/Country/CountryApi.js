import axiosClient from "../AxiosClient";

const CountryApi = {
  getCountries: async () => {
    const res = await axiosClient.get("/countries", {
      baseURL: "https://api.covid19api.com",
    });
    return res
  },
};

export default CountryApi;
