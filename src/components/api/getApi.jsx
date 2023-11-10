import axios from "axios";

export function getBtc() {
  return axios.get("https://blockchain.info/ticker").then((res) => res.data);
}


