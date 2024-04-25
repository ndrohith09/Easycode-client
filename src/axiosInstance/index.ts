import Axios  from "axios";

const instance = Axios.create({
  baseURL: 'http://0.0.0.0:8000/api/v1/', 
  headers: {
    "Access-Control-Allow-Origin": "*",
     "Authorization" : `Bearer token`
  },
});
export default instance;