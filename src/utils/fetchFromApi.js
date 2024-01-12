import instance from "./axios"



const fetchFromApi = async (path,params) => {
    try {
     const { data } = await instance.get(path ,{params})
     return data
    } catch (err) {
     console.log(err.message)
    }
  }

 export default fetchFromApi