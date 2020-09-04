import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://findfalcone.herokuapp.com/",
});
const searchApi = {
  async getPlanets() {
    return axiosInstance.get("planets");
  },
  async getVehicles() {
    return axiosInstance.get("vehicles");
  },
};
export default searchApi;
