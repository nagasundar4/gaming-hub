import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "54a5df1e8192480f96594440a889ab01",
  },
});
