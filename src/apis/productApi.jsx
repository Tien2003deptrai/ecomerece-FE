import apiService from './initApi';

const API_URL = '/api/products';

export const getProducts = async () => {
    return await apiService.read(API_URL);
};

export const getProductById = async (id) => {
    return await apiService.read(`${API_URL}/${id}`);
};

export const addProduct = async (product) => {
    return await apiService.create(API_URL, product);
};

export const updateProduct = async (id, product) => {
    return await apiService.update(`${API_URL}/${id}`, product);
};

export const deleteProduct = async (id) => {
    return await apiService.delete(`${API_URL}/${id}`);
};
