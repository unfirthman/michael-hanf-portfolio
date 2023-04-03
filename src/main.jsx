import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
//import Root from './routes/root';
import ErrorPage from './error-page';
import Blog from './routes/blog/blog.jsx';
import Root from './routes/root/root';
import About from './routes/about/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
