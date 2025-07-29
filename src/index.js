import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Font import (optional) – put in index.html for production
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);