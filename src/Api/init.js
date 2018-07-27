import axios from 'axios'


// Create an axios instance
const axiosApi = axios.create({
    // baseURL: 'http://localhost:3001' // API server dev
    baseURL: 'https://damp-lake-48963.herokuapp.com' // API server prod
})

// Add the bearer token to the axios instance
// Axios will then add this header with every subsequent request
const setJwt = (user) => {
    axiosApi.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
    axiosApi.defaults.headers.common['user'] = user
}

// TODO

// const setSupplierId = (id) => {
//     axiosApi.defaults.headers.common['supplierId'] = id
// }



export { axiosApi, setJwt }
