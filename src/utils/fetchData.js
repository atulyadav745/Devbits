import axios from 'axios'

const BASE_URL = "https://stock-trading-platform.onrender.com" ;
// let axiosConfig = {
//     withCredentials: true,
// }

export const getDataAPI = async (url, token) => {
    const res = await axios.get(`${BASE_URL}/${url}`, {
        headers: { Authorization: token }
    })
    return res;
}

export const postDataAPI = async (url, post, token) => {
    let new_url = `${BASE_URL}/${url}`
    const res = await axios.post(new_url, post, {
        headers: { Authorization: token }
    })
    return res;
}
