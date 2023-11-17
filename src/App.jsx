import React from 'react';
import { Container } from '@mui/material';

import './App.css';
import { DashBoard } from './pages/DashBoard';
import Login from './pages/Login';
import Register from './pages/Register';
import ResponsiveDrawer from './components/Drawer';

function App() {
  return (
    <>
      {/* <Register /> */}
      <Login />
      {/* <Container
        sx={{
          background: '#ebcfcc',
          margin: 0,
          paddingY: 2,
          border: 'none',
          width: '100%',
          minHeight: '100vh',
          '&.MuiContainer-root': {
            maxWidth: '100%',
          },
        }}
      >
        <ResponsiveDrawer>
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
      </Container>
      <ResponsiveDrawer /> */}
    </>
  );
}

export default App;
