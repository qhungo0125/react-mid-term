import React from 'react';
import { Container } from '@mui/material';
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

import './App.css';
import { DashBoard } from './pages/DashBoard';
import Login from './pages/Login';
import Register from './pages/Register';
import ResponsiveDrawer from './components/Drawer';
import axios from './utils/axiosConfig'


async function sendRequest(url, { arg }) {
  const response = await axios.post(url, arg);
  return response.data;
}


function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { data, trigger: register, isMutating } = useSWRMutation('/user/auth/register', sendRequest)
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleRegister = async () => {
    console.log('name',name);
    console.log('email',email);
    console.log('password',password);
    const res = await register({first_name: name, email: email, password: password})
    console.log(res);
  }
  return (
    <Register Name={name} Email={email} Password={password} onNameChange={handleNameChange}
    onEmailChange={handleEmailChange} onPasswordChange={handlePasswordChange}
    onRegister={handleRegister}/>
    // <Container
    //   sx={{
    //     background: '#ebcfcc',
    //     margin: 0,
    //     paddingY: 2,
    //     border: 'none',
    //     width: '100%',
    //     minHeight: '100vh',
    //     '&.MuiContainer-root': {
    //       maxWidth: '100%',
    //     },
    //   }}
    // >
    //   <ResponsiveDrawer setPage={setPage}>
    //     <Container
    //       sx={{
    //         mt: { xs: 6, sm: 0 },
    //         background: 'white',
    //         borderRadius: 4,
    //         paddingY: 2,
    //         '&.MuiContainer-root': {
    //           maxWidth: '100%',
    //         },
    //       }}
    //     >
    //       <DashBoard />
    //     </Container>
    //   </ResponsiveDrawer>
    // </Container>
    // <ResponsiveDrawer />
  );
}

export default App;
