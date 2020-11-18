import axios from "axios";

export default axios.create({
  baseURL: "https://us-central1-clone-c9d80.cloudfunctions.net/api",
  // baseURL: "http://localhost:5001/clone-c9d80/us-central1/api",
});
