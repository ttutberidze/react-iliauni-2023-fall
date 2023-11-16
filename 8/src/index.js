import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './routes/root';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Contact from './routes/contact';
import Edit from './routes/edit';
import ErrorPage from './error-page';

const root = ReactDOM.createRoot(
  document.getElementById('root')
); 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/contact/:contactId',
        element: <Contact />,
      },
      {
        path: '/contact/:contactId/edit',
        element: <Edit />,
      }
    ]
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
