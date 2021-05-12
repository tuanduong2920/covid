import AxiosClient from "../AxiosClient";

const Covid19Api = {
  getGlobal: async () => {
    const res = await AxiosClient.get("/v3/covid-19/all");
    return res;
  },
  getALLCountries: async () => {
    const res = await AxiosClient.get("/v3/covid-19/countries");
    return res;
  },
  getCountry: async (params) => {
    const res = await AxiosClient.get("/v3/covid-19/countries", { params });
    return res;
  },
};

export default Covid19Api;
