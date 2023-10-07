import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./../src/Assets/Styles/app.css"
import { RouterProvider} from "react-router-dom";


import { createBrowserRouter} from "react-router-dom";


export const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    errorElement : <p>Error</p>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>)
