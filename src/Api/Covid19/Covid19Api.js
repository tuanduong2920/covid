import AxiosClient from "../AxiosClient";

const time = (dayNumber) => {
  const now = new Date();
  const today = new Date(now.setUTCHours(0, 0, 0, 0)).toISOString();
  const lastWeek = new Date(
    new Date(
      new Date(new Date().setDate(new Date().getDate() - dayNumber))
    ).setUTCHours(0, 0, 0, 0)
  ).toISOString();
  // console.log(lastWeek);
  const res = { from: lastWeek, to: today };
  return res;
};

const Covid19Api = {
  getGlobal: async () => {
    const res = await AxiosClient.get("/v2/all");
    return res;
  },
  getGlobalFromTo: async (params = time(30)) => {
    const res = await AxiosClient.get("/world", {
      baseURL: "https://api.covid19api.com",
      params,
    });
    return res;
  },
  getCountryFromTo: async (countrySlug, params = time(30)) => {
    const res = await AxiosClient.get(`/total/country/${countrySlug}`, {
      baseURL: "https://api.covid19api.com",
      params,
    });
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
  getDayOneCountry: async (countryName) => {
    const res = await AxiosClient.get(`/dayone/country/${countryName}`, {
      baseURL: "https://api.covid19api.com",
    });
    return res;
  },
  getAllCountriesInfo: async () => {
    const res = await AxiosClient.get(`/countries`, {
      baseURL: "https://api.covid19api.com",
    });
    return res;
  },
};

export default Covid19Api;
