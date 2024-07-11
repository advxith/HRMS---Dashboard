import axios from 'axios';


const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL // url = base url + request url
  // timeout: 5000 // request timeout
});

service.interceptors.request.use(
  (config) => {
    config.headers = {
      'content-type': 'application/json',
      Accept: 'application/json'
    };
    // console.log(process.env);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
    (response) => {
      // Do something with the response data
      return response;
    },
    (error) => {
      // Handle any error that occurs during the request
      return Promise.reject(error);
    }
  );

export default service;