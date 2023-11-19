import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
// import { Container } from '@mui/material';
import './App.css';
import Login from './containers/Login/index';
import Register from './containers/Register/index';
import Page from './containers/index';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  { path: '/login', Component: () => <Login /> },
  { path: '/register', Component: () => <Register /> },
  // { path: '/', Component: () => <Home /> },
  { path: '/', Component: () => <Login /> },
  { path: '/dashboard', Component: () => <Page /> },
  { path: '*', Component: () => <NotFound /> },
]);

function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <Link to={'/login'}>login</Link>
      <Link to={'/register'}>register</Link>
      <Link to={'/dashboard'}>dashboard</Link>
    </>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
