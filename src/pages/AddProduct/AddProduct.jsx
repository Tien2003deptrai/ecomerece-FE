import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addProduct } from '../../apis/productApi';
import { toast } from 'react-toastify';
import { validateUpdateProduct } from '../../utils/validation';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        address: '',
        area: 0,
        price: 0,
        _date: '',
        description: '',
    });

    const navigate = useNavigate();

    const handleAdd = () => {
        if (!validateUpdateProduct(product)) {
            return;
        }
        console.log('product add', product);
        addProduct(product)
            .then(response => {
                toast.success('Product added successfully!');
                navigate('/');
                console.log(response);
            })
            .catch(error => {
                toast.error('Error adding product!');
                console.error('Error adding product:', error);
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Thêm mới mặt bằng</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Tên mặt bằng</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={product.name}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Địa chỉ</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        value={product.address}
                        onChange={(e) => setProduct({ ...product, address: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="area">Diện tích</label>
                    <input
                        type="number"
                        className="form-control"
                        id="area"
                        value={product.area}
                        onChange={(e) => setProduct({ ...product, area: parseInt(e.target.value) })}
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="mh">Loại mặt bằng</label>
                    <input
                        type="text"
                        className="form-control"
                        id="area"
                        value={product.mh}
                        onChange={(e) => setProduct({ ...product, mh: parseInt(e.target.value) })}
                    />
                </div> */}
                <div className="form-group">
                    <label htmlFor="price">Giá thuê</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: parseInt(e.target.value) })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="_date">Ngày thuê</label>
                    <input
                        type="date"
                        className="form-control"
                        id="price"
                        value={product._date}
                        onChange={(e) => setProduct({ ...product, _date: (e.target.value) })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Mô tả chi chiết</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: (e.target.value) })}
                    />
                </div>
                <div className='mt-3'>
                    <button type="button" className="btn btn-success" onClick={handleAdd}>Thêm</button>
                    <Link to={`/`} className="btn btn-primary ms-2">Huỷ</Link>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
