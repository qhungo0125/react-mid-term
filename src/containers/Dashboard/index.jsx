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
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axiosConfig';

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const DashBoard = () => {
  const [isLoading, setLoading] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    const userId = localStorage.getItem('userid');
    const getData = async (userId) => {
      setLoading(true);
      const responseData = await axios.get(`/user/${userId}`);
      if (responseData) {
        const {
          first_name,
          last_name,
          region,
          telephone,
          email,
          password,
          sex,
          DOB,
        } = responseData.data.data;

        setFirstName(first_name);
        setLastName(last_name);
        setRegion(region);
        setPhone(telephone);
        setEmail(email);
        setPass(password);
        setGender(sex);
        setDOB(DOB);
      }
      setLoading(false);
      console.log(responseData);
    };
    if (userId) {
      getData(userId);
    } else {
      alert('You are not logined beforeeee');
      navigate('/login');
    }
  }, []);

  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [region, setRegion] = React.useState();
  const [phone, setPhone] = React.useState();
  const [email, setEmail] = React.useState();
  const [pass, setPass] = React.useState();
  const [gender, setGender] = React.useState();
  const [dob, setDOB] = React.useState();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (isLoading) {
    return <>Loading</>;
  }

  const handleSaveChanges = () => {
    axios({
      method: 'put',
      url: `https://react-mid-term.onrender.com/api/user/update`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
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
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
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
};
