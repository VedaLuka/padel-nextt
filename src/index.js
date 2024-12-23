import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this file exists
import App from './components/App'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If reportWebVitals is unnecessary, remove this import and call
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
