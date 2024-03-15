import React, { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Product 1', category: 'Category 1', price: 100, stock: 10 },
  { id: 2, name: 'Product 2', category: 'Category 2', price: 200, stock: 6 },
  { id: 3, name: 'Product 3', category: 'Category 3', price: 500, stock: 5 },
  { id: 4, name: 'Product 4', category: 'Category 4', price: 800, stock: 2 },
  { id: 5, name: 'Product 5', category: 'Category 5', price: 900, stock: 8 },
];

const ProductsManagement = () => {
  const [productList, setProductList] = useState(initialProducts);
  const [editProductId, setEditProductId] = useState(null);

  const addProduct = () => {
    const newProduct = {
      id: productList.length + 1,
      name: 'New Product',
      category: 'New Category',
      price: 100,
      stock: 10,
    };
    setProductList([...productList, newProduct]);
  };

  const deleteProduct = (id) => {
    const updatedProducts = productList.filter((product) => product.id !== id);
    setProductList(updatedProducts);
  };

  const editProduct = (id) => {
    setEditProductId(id);
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = productList.map((product) =>
      product.id === editProductId ? updatedProduct : product
    );
    setProductList(updatedProducts);
    setEditProductId(null);
  };

  const containerStyles = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    maxWidth: '100%', // Utilize full page width
  };

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const tableHeaderStyles = {
    background: '#3498db',
    color: '#fff',
  };

  const tableRowStyles = {
    borderBottom: '1px solid #ddd',
    padding: '15px 0',
  };

  const tableCellStyles = {
    padding: '10px',
    textAlign: 'left',
    border: '1px solid #ddd',
  };

  const addButtonStyles = {
    padding: '12px 20px',
    fontSize: '1em',
    backgroundColor: '#2ecc71',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const deleteButtonStyles = {
    padding: '8px 16px',
    fontSize: '0.9em',
    backgroundColor: '#e74c3c',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const editButtonStyles = {
    padding: '8px 16px',
    fontSize: '0.9em',
    backgroundColor: '#3498db',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyles}>
      <h1>Products Management</h1>
      <button onClick={addProduct} style={addButtonStyles}>
        Add Product
      </button>
      <table style={tableStyles}>
        <thead>
          <tr style={tableHeaderStyles}>
            <th style={tableCellStyles}>ID</th>
            <th style={tableCellStyles}>Name</th>
            <th style={tableCellStyles}>Category</th>
            <th style={tableCellStyles}>Price</th>
            <th style={tableCellStyles}>Stock</th>
            <th style={tableCellStyles}>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id} style={tableRowStyles}>
              <td style={tableCellStyles}>{product.id}</td>
              <td style={tableCellStyles}>{product.name}</td>
              <td style={tableCellStyles}>{product.category}</td>
              <td style={tableCellStyles}>${product.price}</td>
              <td style={tableCellStyles}>{product.stock}</td>
              <td style={tableCellStyles}>
                <button onClick={() => deleteProduct(product.id)} style={deleteButtonStyles}>
                  Delete
                </button>
                <button onClick={() => editProduct(product.id)} style={editButtonStyles}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editProductId && (
        <EditForm
          product={productList.find((product) => product.id === editProductId)}
          updateProduct={updateProduct}
        />
      )}
    </div>
  );
};

const EditForm = ({ product, updateProduct }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleUpdate = () => {
    updateProduct(editedProduct);
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <label>
        Name:
        <input type="text" name="name" value={editedProduct.name} onChange={handleInputChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={editedProduct.category} onChange={handleInputChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={editedProduct.price} onChange={handleInputChange} />
      </label>
      <label>
        Stock:
        <input type="number" name="stock" value={editedProduct.stock} onChange={handleInputChange} />
      </label>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default ProductsManagement;
