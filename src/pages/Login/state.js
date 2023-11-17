import React from 'react';
import { postRequest, validateEmail } from '../Register/state';
import useSWRMutation from 'swr/mutation';

export function useLogin() {
  const { data, trigger } = useSWRMutation('/user/auth/login', postRequest);

  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({
    email: '',
    password: '',
  });

  const handleDataChange = ({ key, value }) => {
    setFormData((data) => ({
      ...data,
      [key]: value,
    }));
    setErrors((data) => ({
      ...data,
      [key]: '',
    }));
  };

  const handlePasswordChange = (e) => {
    handleDataChange({ key: 'password', value: e.target.value });
  };

  const handleEmailChange = (e) => {
    handleDataChange({ key: 'email', value: e.target.value });
  };

  const handleLogin = async () => {
    const { email, password } = formData;

    try {
      //validation
      if (!email || !password) {
        !email &&
          setErrors((data) => ({
            ...data,
            email: 'Email is required',
          }));
        !password &&
          setErrors((data) => ({
            ...data,
            password: 'Password is required',
          }));
        return;
      }
      if (!validateEmail(email)) {
        !email &&
          setErrors((data) => ({
            ...data,
            email: 'Please enter a valid email',
          }));
        return;
      }
      // trigger to registration
      const res = await trigger({
        email: email,
        password: password,
      });
      // save token to local storage
      localStorage.setItem('token', res.headers['authorization']);
      alert('login successfully');
      // redirect to dashboard
      // handle code here
    } catch (error) {
      setErrors((data) => ({
        ...data,
        email: error.response.data.error.message,
      }));
    }
    const handleLogout = () => {};
  };

  return {
    formData,
    errors,
    handlePasswordChange,
    handleEmailChange,
    handleLogin,
  };
}
