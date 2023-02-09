import 'index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'contexts';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
