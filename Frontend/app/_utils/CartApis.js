// const {defailt : axiosClient} = require("./axiosClient")

import axiosClient from "./axiosClient"
const addToCart = (payload) => axiosClient.post("/carts" , payload)

const getUserCartItems = (email) => axiosClient.get
(`/carts?populate[product][populate]=bannerCard&filters[email][$eq]=${email}`)

// Delete User and Item Product
const deleteUserCartItems = (id) => axiosClient.delete(`/carts/${id}`)

export default {
    addToCart,
    getUserCartItems,
    deleteUserCartItems
}