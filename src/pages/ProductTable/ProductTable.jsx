import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteProduct, getProducts } from '../../apis/productApi';
import { toast } from 'react-toastify';
import { getCategories } from '../../apis/categoriesApi';

const filteredData = (rows, key) => {
    return rows.filter(row => {
        return Object.values(row).some(value => {
            return value.toString().toLowerCase().includes(key)
        })
    })
}

const ProductTable = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = filteredData(products, searchTerm);

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch(error => {
                console.error('Error fetching products:', error);
            });
        getCategories()
            .then(setCategories)
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleDelete = (id) => {
        deleteProduct(id)
            .then(() => {
                setProducts(products.filter(p => p.id !== id));
                toast.success('Product deleted successfully');
            })
            .catch(error => {
                toast.error('Error deleting product');
                console.error('Error deleting product:', error);
            });
    };

    return (

        <div className="container mt-5 d-flex justify-content-center">
            <div className="w-100">
                <div className='mb-4 text-center'>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div>
                    <h1 className="mb-4 text-center">Quản lý mặt bằng</h1>

                    <div className='row'>
                        <div className='flex'>
                            <div className="form-group">
                                <label htmlFor="id">Mã mặt bằng</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="id"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Tên mặt bằng</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Địa chỉ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="area">Diện tích từ</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="area"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="area">Diện tích đến</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="area"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mh">Loại mặt bằng</label>
                                <select
                                    class="form-select form-select-md"
                                    name=""
                                    id=""
                                >
                                    <option selected>Tất cả</option>
                                    {
                                        categories.map(category => (
                                            <option value="">{category.name}</option>
                                        ))
                                    }
                                </select>
                            </div>


                            <div className="form-group">
                                <label htmlFor="price">Giá thuê</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="_date">Ngày thuê từ</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="_date"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="_date">Ngày thuê đến</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="_date"
                                />
                            </div>
                            <div className='mt-3 button_down'>
                                <button type="button" className="btn btn-success">Đặt lại</button>
                                <Link to={`/`} className="btn btn-secondary ms-2">Tìm Kiếm</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/add" className="btn btn-primary mb-4 mt-4">Thêm mới</Link>
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Mã mặt bằng</th>
                            <th>Tên mặt bằng</th>
                            <th>Địa chỉ</th>
                            <th>Diện tích</th>
                            <th>Giá thuê</th>
                            <th>Ngày bắt đầu cho thuê</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts?.length > 0 ?
                            filteredProducts.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.address}</td>
                                    <td>{product.area}</td>
                                    <td>{product.price}</td>
                                    <td>{product._date}</td>
                                    <td>
                                        <Link to={`/detail/${product.id}`} className="btn btn-primary btn-sm">Chi tiết</Link>
                                        <button
                                            className="btn btn-danger btn-sm ms-2"
                                            onClick={() => handleDelete(product.id)}
                                        >
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4">Không tìm thấy mặt bằng</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ProductTable;
