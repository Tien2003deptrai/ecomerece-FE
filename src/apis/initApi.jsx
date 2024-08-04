import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

const apiService = {
    request: async (method, url, data = null) => {
        try {
            const response = await axiosInstance({
                method,
                url,
                data,
            });
            return response.data;
        } catch (error) {
            console.error(`Error during ${method.toUpperCase()} request to ${url}`, error);
            throw error;
        }
    },

    create: async (url, data) => apiService.request('post', url, data),
    read: async (url) => apiService.request('get', url),
    update: async (url, data) => apiService.request('put', url, data),
    delete: async (url) => apiService.request('delete', url),
};

export default apiService;
