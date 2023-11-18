import React from 'react';
import { Container } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Login from './containers/Login/index';
import Register from './containers/Register/index';
import Page from './containers/index';

const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/login', Component: () => <Login /> },
  { path: '/register', Component: () => <Register /> },
  { path: '/dashboard', Component: () => <Page /> },
]);

function Home() {
  return <h1> Home page</h1>;
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
