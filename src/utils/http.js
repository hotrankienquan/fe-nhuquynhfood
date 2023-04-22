import axios from "axios"

// axios.defaults.baseURL = 'http://localhost:6969/api/v1';


// custom baseURL 

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  // withCredentials: true
});


instance.interceptors.response.use(
  (response) => {
    // Thrown error for request with OK status code
    return response.data;
  }

);

export default instance;