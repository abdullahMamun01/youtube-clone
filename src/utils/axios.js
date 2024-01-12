import axios from "axios";
import { RAPID_API_KEY } from "./constants";



const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3'

})

export const instanceTwo = axios.create({
  baseURL: 'https://youtube138.p.rapidapi.com/video',
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }


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


