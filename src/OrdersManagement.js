
import React, { useState } from 'react';

const initialOrders = [
  { id: 1, customerName: 'Customer 1', orderDate: '2022-01-01', status: 'Delivered' },
  { id: 2, customerName: 'Customer 2', orderDate: '2022-01-02', status: 'Processing' },
  { id: 3, customerName: 'Customer 3', orderDate: '2022-01-04', status: 'Shipped' },
];

const OrdersManagement = () => {
  const [orders, setOrders] = useState(initialOrders);

  const updateOrderStatus = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const deleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <div style={containerStyles}>
      <h1>Orders Management</h1>
      <table style={tableStyles}>
        <thead>
          <tr style={tableHeaderStyles}>
            <th style={tableCellStyles}>ID</th>
            <th style={tableCellStyles}>Customer Name</th>
            <th style={tableCellStyles}>Order Date</th>
            <th style={tableCellStyles}>Status</th>
            <th style={tableCellStyles}>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} style={tableRowStyles}>
              <td style={tableCellStyles}>{order.id}</td>
              <td style={tableCellStyles}>{order.customerName}</td>
              <td style={tableCellStyles}>{order.orderDate}</td>
              <td style={tableCellStyles}>
                <span style={{ color: getStatusColor(order.status) }}>{order.status}</span>
              </td>
              <td style={tableCellStyles}>
                <button onClick={() => updateOrderStatus(order.id, 'Shipped')} style={shipButtonStyles}>
                  Ship
                </button>
                <button onClick={() => updateOrderStatus(order.id, 'Delivered')} style={deliverButtonStyles}>
                  Deliver
                </button>
                <button onClick={() => deleteOrder(order.id)} style={deleteButtonStyles}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles
const containerStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
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
};

const shipButtonStyles = {
  padding: '8px 16px',
  fontSize: '0.9em',
  backgroundColor: '#f39c12',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  marginRight: '5px',
};

const deliverButtonStyles = {
  padding: '8px 16px',
  fontSize: '0.9em',
  backgroundColor: '#2ecc71',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  marginRight: '5px',
};

const deleteButtonStyles = {
  padding: '8px 16px',
  fontSize: '0.9em',
  backgroundColor: '#e74c3c',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  marginRight: '5px',
};

// Function to get status color
const getStatusColor = (status) => {
  switch (status) {
    case 'Processing':
      return '#3498db'; // Blue
    case 'Shipped':
      return '#f39c12'; // Orange
    case 'Delivered':
      return '#2ecc71'; // Green
    default:
      return '#333'; // Default color
  }
};


export default OrdersManagement;