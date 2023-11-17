import React from 'react';
import { Container } from '@mui/material';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import './App.css';
import { DashBoard } from './pages/DashBoard';
import Login from './pages/Login';
import Register from './pages/Register';
import ResponsiveDrawer from './components/Drawer';
import axios from './utils/axiosConfig';

async function postRequest(url, { arg }) {
  const response = await axios.post(url, arg);
  return response;
}

function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passError, setPassError] = React.useState('');
  // register
  // const { data, trigger } = useSWRMutation('/user/auth/register', postRequest);
  // login
  const { data, trigger } = useSWRMutation('/user/auth/login', postRequest);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPassError('');
  };
  const validateEmail = (email) => {
    const res = /\S+@\S+\.\S+/;
    return res.test(String(email).toLowerCase());
  };

  // const handleLogin = async () => {
  //   try {
  //     //validation
  //     if (!email || !password) {
  //       // Validate if fields are empty
  //       setEmailError(email ? '' : 'Email is required');
  //       setPassError(password ? '' : 'Password is required');
  //       return;
  //     }
  //     if (!validateEmail(email)) {
  //       setEmailError('Please enter a valid email');
  //       return;
  //     }
  //     // trigger to registration
  //     const res = await trigger({
  //       email: email,
  //       password: password,
  //     });
  //     // save token to local storage
  //     localStorage.setItem('token', res.headers['authorization']);
  //     alert('login successfully');
  //     // redirect to dashboard
  //     // handle code here
  //   } catch (error) {
  //     setEmailError(error.response.data.error.message);
  //   }
  //   const handleLogout = () => {};
  // };
  return (
    <>
      <Register />
      {/* <Login
        Email={email}
        Password={password}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onLogin={handleLogin}
        emailError={emailError}
        passError={passError}
      /> */}
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
