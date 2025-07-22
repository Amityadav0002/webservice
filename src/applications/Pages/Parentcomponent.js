import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Subchild from './Subchild';

const ParentComponent = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  // Fetch product list
  const fetchProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setAllProducts(res.data.products);
      })
      .catch((err) => console.error('Error fetching products:', err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Select a Product</h2>

      <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">-- Select Product --</option>
        {allProducts.map((product) => (
          <option key={product.id} value={product.id}>
            {product.title}
          </option>
        ))}
      </select>

      {/* Pass selected ID to child as a number */}
      {selectedId && <Subchild id={parseInt(selectedId)} />}
    </div>
  );
};

export default ParentComponent;
