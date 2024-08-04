import apiService from './initApi';

const API_URL_CATEGORIES = '/categories';
const API_URL_PRODUCTS = '/categories';

export const getCategories = async () => {
    return await apiService.read(API_URL_CATEGORIES);
};

export const getProducts = async () => {
    return await apiService.read(API_URL_PRODUCTS);
};

export const addProduct = async (product) => {
    return await apiService.create(API_URL_PRODUCTS, product);
};


