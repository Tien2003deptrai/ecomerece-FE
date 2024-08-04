import apiService from './initApi';

const API_URL = '/api/categories';

export const getCategories = async () => {
    return await apiService.read(API_URL);
};

