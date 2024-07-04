const { default: axiosClient } = require("./axiosClient");

const getProductList = () => axiosClient.get('/products?populate=*');
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);

const getProductByBrand = (brand) => axiosClient.
get(`/products?filters[brand][$eq]=${brand}&populate=*`)

const getProductPagination = () => axiosClient.get(`/products?pagination[start]=25&pagination&populate=*`)

export default {
    getProductList, 
    getProductById,
    getProductByBrand,
    getProductPagination
}