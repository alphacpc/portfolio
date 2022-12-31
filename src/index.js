import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, } from 'react-router-dom';
import router from './routers';

import "./assets/css/App.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);