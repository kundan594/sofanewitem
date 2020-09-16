import axios from "axios";

export default axios.create({
  baseURL: "https://95.168.161.223/testui/",
  //baseURL: "http://localhost:8888/",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    withCredentials: true,
    mode: 'no-cors',
}
});