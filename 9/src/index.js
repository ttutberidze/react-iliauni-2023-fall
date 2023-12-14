import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider as ReduxProvider} from 'react-redux';
import { store } from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home';
import Posts from './components/posts';
import SinglePost from './components/singlePost';
import Counter from './components/counter';

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
            path: 'counter',
            element: <Counter />
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
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
