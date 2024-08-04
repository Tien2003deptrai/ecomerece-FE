import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });

        axios.get('http://localhost:8080/categories')
            .then(response => {
                const categoryMap = response.data.reduce((acc, category) => {
                    acc[category.id] = category.name;
                    return acc;
                }, {});
                setCategories(categoryMap);
            })
            .catch(error => {
                console.error('There was an error fetching the categories!', error);
            });
    }, []);

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} - {product.quantity}- ${product.price} - {product.description}- {categories[product.category.id]}
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
