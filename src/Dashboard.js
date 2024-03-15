// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   // Use state to manage dynamic values
//   const [totalProducts, setTotalProducts] = useState(10);
//   const [totalOrders, setTotalOrders] = useState(5);

//   // Function to simulate dynamic changes
//   const simulateDynamicChanges = () => {
//     setTotalProducts(totalProducts + 1);
//     setTotalOrders(totalOrders + 1);
//   };

//   return (
//     <div style={dashboardStyles}>
//       <h1 style={titleStyles}>Dashboard</h1>
//       <div style={metricsContainerStyles}>
//         <div style={metricStyles}>
//           <p style={metricValueStyles}>{totalProducts}</p>
//           <p style={metricLabelStyles}>Total Products</p>
//         </div>
//         <div style={metricStyles}>
//           <p style={metricValueStyles}>{totalOrders}</p>
//           <p style={metricLabelStyles}>Total Orders</p>
//         </div>
//       </div>
//       <div style={linksContainerStyles}>
//         <Link to="/products" style={linkStyles}>Manage Products</Link>
//         <Link to="/orders" style={linkStyles}>Manage Orders</Link>
//       </div>
//       <button onClick={simulateDynamicChanges} style={buttonStyles}>
//         Simulate Dynamic Changes
//       </button>
//     </div>
//   );
// };
// const dashboardStyles = {
//   backgroundColor: '#2c3e50',
//   color: '#ecf0f1',
//   padding: '20px',
//   textAlign: 'center',
//   borderRadius: '8px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   marginBottom: '20px',
// };

// const titleStyles = {
//   fontSize: '2em',
//   margin: '0',
// };

// const metricsContainerStyles = {
//   display: 'flex',
//   justifyContent: 'center',
//   marginTop: '20px',
// };

// const metricStyles = {
//   padding: '10px',
//   margin: '0 20px',
//   backgroundColor: '#3498db',
//   borderRadius: '8px',
//   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
// };

// const metricValueStyles = {
//   fontSize: '1.5em',
//   margin: '0',
// };

// const metricLabelStyles = {
//   fontSize: '1em',
//   margin: '0',
// };

// const chartContainerStyles = {
//   marginTop: '20px',
//   width: '80%',
//   maxWidth: '400px',
//   margin: 'auto',
// };

// const linksContainerStyles = {
//   marginTop: '20px',
// };

// const linkStyles = {
//   textDecoration: 'none',
//   color: '#ecf0f1',
//   backgroundColor: '#3498db',
//   padding: '10px 20px',
//   margin: '0 10px',
//   borderRadius: '5px',
//   fontSize: '1.2em',
//   fontWeight: 'bold',
//   transition: 'background-color 0.3s ease',
// };

// const buttonStyles = {
//   marginTop: '20px',
//   padding: '10px 20px',
//   fontSize: '1em',
//   backgroundColor: '#3498db',
//   color: '#ecf0f1',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
// };

// const Notification = () => {
//   const notificationStyles = {
//     marginTop: '20px',
//     padding: '15px',
//     backgroundColor: '#e74c3c',
//     color: '#ecf0f1',
//     borderRadius: '5px',
//     display: 'inline-block',
//   };

//   return <div style={notificationStyles}>Important Notification: Lorem ipsum dolor sit amet.</div>;
// };

// export default Dashboard;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   // Use state to manage dynamic values
//   const [totalProducts, setTotalProducts] = useState(10);
//   const [totalOrders, setTotalOrders] = useState(5);

//   // Function to simulate dynamic changes
//   const simulateDynamicChanges = () => {
//     setTotalProducts(totalProducts + 1);
//     setTotalOrders(totalOrders + 1);
//   };

//   return (
//     <div style={dashboardStyles}>
//       <h1 style={titleStyles}>Dashboard</h1>
//       <div style={metricsContainerStyles}>
//         <div style={metricStyles}>
//           <p style={metricValueStyles}>{totalProducts}</p>
//           <p style={metricLabelStyles}>Total Products</p>
//         </div>
//         <div style={metricStyles}>
//           <p style={metricValueStyles}>{totalOrders}</p>
//           <p style={metricLabelStyles}>Total Orders</p>
//         </div>
//       </div>
//       <div style={chartContainerStyles}>
//         {/* Include your chart component here */}
//       </div>
//       <div style={linksContainerStyles}>
//         <Link to="/products" style={linkStyles}>
//           Manage Products
//         </Link>
//         <Link to="/orders" style={linkStyles}>
//           Manage Orders
//         </Link>
//       </div>
//       <button onClick={simulateDynamicChanges} style={buttonStyles}>
//         Simulate Dynamic Changes
//       </button>
//       <Notification />
//     </div>
//   );
// };

// const dashboardStyles = {
//   backgroundColor: '#2c3e50',
//   color: '#ecf0f1',
//   padding: '20px',
//   textAlign: 'center',
//   borderRadius: '8px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   marginBottom: '20px',
// };

// const titleStyles = {
//   fontSize: '2em',
//   margin: '0',
// };

// const metricsContainerStyles = {
//   display: 'flex',
//   justifyContent: 'center',
//   marginTop: '20px',
// };

// const metricStyles = {
//   padding: '10px',
//   margin: '0 20px',
//   backgroundColor: '#3498db',
//   borderRadius: '8px',
//   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   transition: 'transform 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'rotate(360deg)',
//   },
// };

// const metricValueStyles = {
//   fontSize: '1.5em',
//   margin: '0',
// };

// const metricLabelStyles = {
//   fontSize: '1em',
//   margin: '0',
// };

// const chartContainerStyles = {
//   marginTop: '20px',
//   width: '80%',
//   maxWidth: '400px',
//   margin: 'auto',
//   // Add your chart styling here
// };

// const linksContainerStyles = {
//   marginTop: '20px',
// };

// const linkStyles = {
//   textDecoration: 'none',
//   color: '#ecf0f1',
//   backgroundColor: '#3498db',
//   padding: '10px 20px',
//   margin: '0 10px',
//   borderRadius: '5px',
//   fontSize: '1.2em',
//   fontWeight: 'bold',
//   transition: 'background-color 0.3s ease',
//   '&:hover': {
//     backgroundColor: '#2980b9',
//   },
// };

// const buttonStyles = {
//   marginTop: '20px',
//   padding: '10px 20px',
//   fontSize: '1em',
//   backgroundColor: '#3498db',
//   color: '#ecf0f1',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
//   '&:hover': {
//     backgroundColor: '#2980b9',
//     transform: 'rotate(360deg)',
//   },
// };

// const Notification = () => {
//   const notificationStyles = {
//     marginTop: '20px',
//     padding: '15px',
//     backgroundColor: '#e74c3c',
//     color: '#ecf0f1',
//     borderRadius: '5px',
//     display: 'inline-block',
//   };

//   return <div style={notificationStyles}>Important Notification: Lorem ipsum dolor sit amet.</div>;
// };

// export default Dashboard;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Dashboard = ({ toggleCalendar }) => {
  // Use state to manage dynamic values
  const [totalProducts, setTotalProducts] = useState(5);
  const [totalOrders, setTotalOrders] = useState(3);

  // Function to simulate dynamic changes
  const simulateDynamicChanges = () => {
    setTotalProducts(totalProducts + 1);
    setTotalOrders(totalOrders + 1);
  };

  return (
    <div style={dashboardStyles}>
      <h1 style={titleStyles}>Dashboard</h1>
      <div style={metricsContainerStyles}>
        <div style={metricStyles}>
          <p style={metricValueStyles}>{totalProducts}</p>
          <p style={metricLabelStyles}>Total Products</p>
        </div>
        <div style={metricStyles}>
          <p style={metricValueStyles}>{totalOrders}</p>
          <p style={metricLabelStyles}>Total Orders</p>
        </div>
      </div>
      <div style={chartContainerStyles}>
        {/* Include your chart component here */}
      </div>
      <div style={linksContainerStyles}>
        <Link to="/products" style={linkStyles}>
          Manage Products
        </Link>
        <Link to="/orders" style={linkStyles}>
          Manage Orders
        </Link>
        <Link to="/orders-calendar" style={linkStyles}>
          Orders Calendar View
        </Link>
        <Link to="/calendar" style={linkStyles}>
        View Orders Calendar
      </Link>
      </div>
      {/* <button onClick={toggleCalendar} style={buttonStyles}>
        Simulate Dynamic Changes
      </button> */}
    </div>
  );
};

const dashboardStyles = {
  backgroundColor: '#a09be8', // Changed to a different color
  color: '#ecf0f1',
  padding: '20px',
  textAlign: 'center',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

const titleStyles = {
  fontSize: '2em',
  margin: '0',
};

const metricsContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const metricStyles = {
  padding: '10px',
  margin: '0 20px',
  backgroundColor: '#3498db',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'rotate(360deg)',
  },
};

const metricValueStyles = {
  fontSize: '1.5em',
  margin: '0',
};

const metricLabelStyles = {
  fontSize: '1em',
  margin: '0',
};

const chartContainerStyles = {
  marginTop: '20px',
  width: '80%',
  maxWidth: '400px',
  margin: 'auto',
  // Add your chart styling here
};

const linksContainerStyles = {
  marginTop: '20px',
};

const linkStyles = {
  textDecoration: 'none',
  color: '#ecf0f1',
  backgroundColor: '#3498db',
  padding: '10px 20px',
  margin: '0 10px',
  borderRadius: '5px',
  fontSize: '1.2em',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#2980b9',
  },
};

const buttonStyles = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '1em',
  backgroundColor: '#3498db',
  color: '#ecf0f1',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#2980b9',
    transform: 'rotate(360deg)',
  },
};

export default Dashboard;
