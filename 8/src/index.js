import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root, { createUserAction, getUsersLoader } from './routes/root';
import ViewUser, { viewUserAction } from './routes/contact';
import EditUser, { updateUserAction, getUserLoader } from './routes/edit';
import ErrorPage from './error-page';

const root = ReactDOM.createRoot(
  document.getElementById('root')
); 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getUsersLoader,
    action: createUserAction,
    children: [
      {
        path: 'user/:userId',
        element: <ViewUser />,
        loader: getUserLoader,
        action: viewUserAction,
      },
      {
        path: '/user/:userId/edit',
        element: <EditUser />,
        loader: getUserLoader,
        action: updateUserAction,
      }
    ]
  }
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
