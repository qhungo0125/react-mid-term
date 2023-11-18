import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import ResponsiveDrawer from '../../components/Drawer';
import {
  Image,
  Label,
  Padding,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { formatPhoneNumber } from '../../utils/format';
import axios from 'axios';
import useSWR from 'swr';

const ACCESS_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTVlYzdhMjAxMDlhNDgzMTllNjViZSIsImVtYWlsIjoic29uZ29oYW5AZ21haWwuY29tIiwiaWF0IjoxNzAwMTYyMTc2LCJleHAiOjE3MDAxNjMwNzZ9.ic707y1Z3-bim9F573odF-UEaTDDiDKhV6om_-DSHNg`;

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const DashBoard = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const user_id = '6555ec7a20109a48319e65be';
  const { data } = useSWR(
    `https://react-mid-term.onrender.com/api/user/${user_id}`,
    fetcher,
    { refreshInterval: 0 },
  );

  console.log(data.data);
  const info = data ? data.data : null;

  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (info) {
    const [firstName, setFirstName] = React.useState(info.first_name);
    const [lastName, setLastName] = React.useState(info.last_name);
    const [region, setRegion] = React.useState(info.region);
    const [phone, setPhone] = React.useState(info.telephone);
    const [email, setEmail] = React.useState(info.email);
    const [pass, setPass] = React.useState(info.password);
    const [gender, setGender] = React.useState(info.sex);
    const [dob, setDOB] = React.useState(info.DOB);

    const handleSaveChanges = () => {
      axios({
        method: 'put',
        url: `https://react-mid-term.onrender.com/api/user/update`,
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        data: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          sex: gender,
          telephone: phone,
          DOB: dob,
          region: region,
        },
      }).then(
        (respone) => {
          console.log(respone);
          alert('Update successful.');
        },
        (error) => {
          console.log(error);
          alert('Update failed.');
        },
      );
    };

    return (
      <Grid width={'100%'} container spacing={2} sx={{ mt: 2 }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} textAlign={'center'}>
            <img
              srcSet="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
              src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
              height={200}
              style={{ borderRadius: '50%' }}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Region</InputLabel>
            <Select
              value={region}
              label="Region"
              onChange={(e) => setRegion(e.target.value)}
            >
              <MenuItem value={'Viet Nam'}>Viet Nam</MenuItem>
              <MenuItem value={'USA'}>USA</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            label="Phone"
            type="text"
            variant="outlined"
            // value={formatPhoneNumber('84123232233')}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                label="Date of birth"
                value={dayjs(dob)}
                onChange={(newValue) => setDOB(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid item sm={12} textAlign={'center'} sx={{ mt: 2 }}>
          <Button variant="contained" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Grid>
      </Grid>
    );
  }
};
