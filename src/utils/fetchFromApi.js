import instance from "./axios"



const fetchFromApi = async (path) => {
    try {
     const { data } = await instance.get(path)
     return data
    } catch (err) {
     console.log(err.message)
    }
 }

 export default fetchFromApi