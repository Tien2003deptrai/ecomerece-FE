import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ onProductAdded }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the categories!', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name,
            price: parseFloat(price),
            quantity: parseInt(quantity),
            description,
            category: {
                id: parseInt(category)
            }
        };

        axios.post('http://localhost:8080/products', newProduct)
            .then(response => {
                onProductAdded(response.data);
                setName('');
                setPrice('');
                setQuantity('');
                setDescription('');
                setCategory('');
                window.alert("Product added successfully")
            })
            .catch(error => {
                console.error('There was an error adding the product!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Quantity:</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
