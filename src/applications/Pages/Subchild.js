import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Subchild = ({ id }) => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          setProductDetails(res.data);
        })
        .catch((err) => console.error('Error fetching product:', err)); 
    }
  }, [id]);

  if (!productDetails) return <p>Loading product details...</p>;

  return (
    <div>
      <h3>Product Details (ID: {id})</h3>
      <p><strong>Title:</strong> {productDetails.title}</p>
      <p><strong>Description:</strong> {productDetails.description}</p>
      <p><strong>Price:</strong> ${productDetails.price}</p>
    </div>
  );
};

export default Subchild
