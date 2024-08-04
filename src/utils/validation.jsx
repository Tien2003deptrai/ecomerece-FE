import { toast } from 'react-toastify';

export const validateUpdateProduct = (product) => {
    let isValid = true;

    if (!product.name || product.name.trim() === "") {
        toast.error("Tên bắt buộc nhập.");
        isValid = false;
    }

    else if (product.address || product.address.trim() === "") {
        toast.error("Địa chỉ bắt buộc nhập.");
        isValid = false;
    }

    else if (isNaN(product.area) || product.area >= 10) {
        toast.error("Diện tích bắt buộc nhập và phải lớn hơn 10.");
        isValid = false;
    }

    else if (isNaN(product.price) || product.price >= 500000) {
        toast.error("Giá bắt buộc nhập và phải lớn hơn 500000.");
        isValid = false;
    }

    else if (product._date || product._date > Date.now()) {
        toast.error("Ngày cho thuê phải lớn hơn ngày hiện tại.");
    }

    else if (!product.description || product.description.trim() === "") {
        toast.error("Miêu tả bắt buộc nhập.");
        isValid = false;
    }

    return isValid;
};
