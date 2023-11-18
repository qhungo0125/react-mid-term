import React from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
// import { Container } from '@mui/material';
import './App.css';
import Login from './containers/Login/index';
import Register from './containers/Register/index';
import Page from './containers/index';

const router = createBrowserRouter([
  { path: '/login', Component: () => <Login /> },
  { path: '/register', Component: () => <Register /> },
  { path: '/', Component: Home },
  { path: '/dashboard', Component: () => <Page /> },
]);

function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Check out the <Link to="/blog">blog</Link> or the{' '}
        <Link to="users">users</Link> section
      </p>
    </>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
