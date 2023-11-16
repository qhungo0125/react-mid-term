import './App.css';
import { DashBoard } from './pages/DashBoard';
// import ResponsiveDrawer from './components/Drawer';
import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResponsiveDrawer from './components/Drawer';
import { Container } from '@mui/material';
// import ResponsiveDrawer from './components/test';

function App() {
  const [page, setPage] = React.useState(0);
  let ele = <Login />;
  switch (page) {
    case -2:
      ele = <Signup />;
      break;
    case -1:
      ele = <Login />;
      break;
    case 0:
      ele = <DashBoard />;
      break;
    default:
      break;
  }

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
      {page == 0 ?
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
        :
        <div>{ele}</div>
      }
        </Container>
    // <ResponsiveDrawer />
  );
}

      export default App;
