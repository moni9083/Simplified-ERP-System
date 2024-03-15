
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import OrdersManagement from './OrdersManagement';
import ProductsManagement from './ProductsManagement';
import OrdersCalendarView from './OrdersCalendarView';

// Define styles
const navStyles = {
  backgroundColor: '#333',
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '8px',
};

const ulStyles = {
  listStyle: 'none',
  padding: '0',
  display: 'flex',
  justifyContent: 'center',
};

const liStyles = {
  margin: '0 10px',
};

const linkStyles = {
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#555',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '1.2em',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
};

const App = () => {
  return (
    <Router>
      <nav style={navStyles}>
        <ul style={ulStyles}>
          <li style={liStyles}>
            <Link to="/" style={linkStyles}>
              Dashboard
            </Link>
          </li>
          <li style={liStyles}>
            <Link to="/products" style={linkStyles}>
              Products
            </Link>
          </li>
          <li style={liStyles}>
            <Link to="/orders" style={linkStyles}>
              Orders
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductsManagement />} />
        <Route path="/orders" element={<OrdersManagement />} />
        <Route path="/calendar" element={<OrdersCalendarView />} />
      </Routes>
    </Router>
  );
};

export default App;
