import React from 'react';
import { Container } from '@mui/material';

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
  return (
    <Container
      sx={{
        margin: 0,
        border: 'none',
        width: '100%',
        '&.MuiContainer-root': {
          maxWidth: '100%',
          padding: 0,
        },
      }}
    >
      {page == 0 ? (
        <ResponsiveDrawer setPage={setPage}>
          <Container
            sx={{
              mt: { xs: 6, sm: 0 },
              background: 'white',
              borderRadius: 4,
              paddingY: 2,
              '&.MuiContainer-root': {
                maxWidth: '100%',
              },
            }}
          >
            <DashBoard />
          </Container>
        </ResponsiveDrawer>
      ) : (
        <div>{ele}</div>
      )}
    </Container>
    // <ResponsiveDrawer />
  );
}

export default App;
