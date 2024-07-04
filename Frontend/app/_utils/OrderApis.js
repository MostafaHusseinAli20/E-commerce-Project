import axiosClient from './axiosClient'

const createOrder = (data) => axiosClient.get('/orders' , data);

export default {
    createOrder,
}