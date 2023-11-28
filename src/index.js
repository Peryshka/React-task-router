import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage";
import AboutUs from "./components/pages/AboutUs";
import SignIn from "./components/pages/SignIn";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about-us',
        element: <AboutUs />,
        errorElement: <ErrorPage />
      },
      {
        path: '/sign-in',
        element: <SignIn />,
        errorElement: <ErrorPage />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </React.StrictMode>
);



