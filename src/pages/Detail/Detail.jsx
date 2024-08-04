import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../apis/productApi';
import { toast } from 'react-toastify';

const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then(setProduct)
            .catch(error => {
                toast.error('Error fetching product');
                console.error('Error fetching product:', error);
            });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="w-100">
                <h1 className="mb-4 text-center">Quản lý mặt bằng</h1>
                <Link to="/add" className="btn btn-primary mb-4">Add Product</Link>
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Mã mặt bằng</th>
                            <th>Tên mặt bằng</th>
                            <th>Địa chỉ</th>
                            <th>Diện tích</th>
                            <th>Giá thuê</th>
                            <th>Ngày bắt đầu cho thuê</th>
                            <th>Miêu tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.address}</td>
                            <td>{product.area}</td>
                            <td>{product.price}</td>
                            <td>{product._date}</td>
                            <td>{product.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Detail;
