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
    console.log("HI api ") ;
    let new_url = `${BASE_URL}/${url}`
    console.log(url) ;
    const res = await axios.post(new_url, post)
    console.log(res) ;
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`/api/${url}`, post, {
        headers: { Authorization: token }
    })
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`/api/${url}`, {
        headers: { Authorization: token }
    })
    return res;
}