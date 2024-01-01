import axios from "axios";



const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3'

})

// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle global errors here
//     console.error("Axios Error:", error);
//     return Promise.reject(error);
//   }
// );

export default instance


