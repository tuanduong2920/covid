import AxiosClient from "../AxiosClient";

const Admin = {
  login: async (data) => {
    const res = await AxiosClient.post(
      "http://45.32.102.61:8080/api/login",
      JSON.stringify(data),
      { baseURL: "" }
    );
    return res;
  },
  logout: async (data) => {
    const res = await AxiosClient.delete(
      "http://45.32.102.61:8080/api/logout",
      {
        baseURL: "",
        headers: {
          Authorization: data.Authorization,
        },
      }
    );
    return res;
  },
  getDeclarer: async () => {
    const res = await AxiosClient.get("http://45.32.102.61:8080/api/declare", {
      baseURL: "",
    });
    return res;
  },
  getDeclarerById: async (id) => {
    const res = await AxiosClient.get(`http://45.32.102.61:8080/api/declare/${id}`, {
      baseURL: "",
    });
    return res;
  },
};

export default Admin;
