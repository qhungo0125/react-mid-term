import React from 'react';
import useSWRMutation from 'swr/mutation';
import axios from '../../utils/axiosConfig';

const validateEmail = (email) => {
  const res = /\S+@\S+\.\S+/;
  return res.test(String(email).toLowerCase());
};

async function postRequest(url, { arg }) {
  const response = await axios.post(url, arg);
  return response;
}

export default function useRegisterState() {
  const { data, trigger } = useSWRMutation('/user/auth/login', postRequest);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passError, setPassError] = React.useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPassError('');
  };

  const handleRegister = async () => {
    try {
      //validation
      if (!name || !email || !password) {
        // Validate if fields are empty
        setNameError(name ? '' : 'Name is required');
        setEmailError(email ? '' : 'Email is required');
        setPassError(password ? '' : 'Password is required');
        return;
      }
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email');
        return;
      }
      // trigger to registration
      const res = await trigger({
        first_name: name,
        email: email,
        password: password,
      });
      // save token to local storage
      localStorage.setItem('token', res.headers['authorization']);
      alert('register successfully');
      // redirect to dashboard
      // handle code here
    } catch (error) {
      setEmailError(error.response.data.error.message);
    }
  };

  return {
    nameError,
    emailError,
    passError,
    name,
    email,
    password,
    handleEmailChange,
    handleNameChange,
    handlePasswordChange,
    handleRegister,
  };
}
