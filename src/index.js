import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './Context/AppContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppProvider>
  <BrowserRouter>
     <App />
     {/* Toast Container is for toast animation purpose */}
     <ToastContainer/>
  </BrowserRouter>  
  </AppProvider>
  </React.StrictMode>
);