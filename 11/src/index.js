import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home';
import Posts from './components/posts';
import SinglePost from './components/singlePost';
import { queryClient } from './queries';
import {QueryClientProvider} from '@tanstack/react-query';

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
          {
            path: '',
            element: <Home />
          },
          {
              path: 'posts',
              element: <Posts />
          },
          {
            path: 'posts/:postId',
            element: <SinglePost />
          }
      ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={ queryClient }>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
