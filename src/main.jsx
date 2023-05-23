import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './error-page';
import Root from './routes/root/root';
import About from './routes/about/About.jsx';
import Resume from './routes/resume/Resume.jsx'
import Blog from './routes/blog/blog.jsx';
import Portfolio from './routes/portfolio/portfolio';
import Contact from './routes/contact/Contact';

const router = createBrowserRouter([
  {
        path: "/michael-hanf-portfolio",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/michael-hanf-portfolio/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/michael-hanf-portfolio/blog",
    element: <Blog />,
    errorElement: <ErrorPage />
  },
  {
    path: "/michael-hanf-portfolio/resume",
    element: <Resume />,
    errorElement: <ErrorPage />
  },
  {
    path: "/michael-hanf-portfolio/portfolio",
    element: <Portfolio />,
    errorElement: <ErrorPage />
  },
  {
    path: "/michael-hanf-portfolio/contact",
    element: <Contact />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
