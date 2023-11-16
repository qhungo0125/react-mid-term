import React from 'react';
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
import ResponsiveDrawer from '../components/Drawer';
import {
  Image,
  Label,
  Padding,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { formatPhoneNumber } from '../utils/format';
import axios from 'axios'
import useSWR from 'swr'



export const DashBoard = () => {
  // const fetcher = async (url) => await axios.get(url).then(res => res.data)
  // const user_id = "654854dc975add0b8fc17c4f"
  // const { data, success } = useSWR(`http://react-mid-term.onrender.com/api/user/${user_id}`, fetcher)

  // console.log(data)

  const [firstName, setFirstName] = React.useState(data.first_name)
  const [lastName, setLastName] = React.useState(data.last_name)
  const [region, setRegion] = React.useState(data.region)
  const [phone, setPhone] = React.useState(data.telephone)
  const [email, setEmail] = React.useState(data.email)
  const [pass, setPass] = React.useState(data.password)
  const [gender, setGender] = React.useState(data.sex)
  const [year, setYear] = React.useState("2000")
  const [month, setMonth] = React.useState("1")
  const [day, setDay] = React.useState("1")


  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if(error){return <div>error</div>}
  if(isLoading){return <div>loading</div>}

  if (success) {

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
            placeholder='First Name'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            placeholder='Last Name'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Region</InputLabel>
            <Select
              value={region}
              label="Region"
              onChange={e => setRegion(e.target.value)}
            >
              <MenuItem value={"Viet Nam"}>Viet Nam</MenuItem>
              <MenuItem value={"USA"}>USA</MenuItem>
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
            onChange={e => setPhone(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={pass}
            onChange={e => setPass(e.target.value)}
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
              onChange={e => setGender(e.target.value)}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <FormControl fullWidth>
            <FormLabel>Date of birth</FormLabel>

            <Grid container spacing={1}>
              <Grid item xs={3}>
                <TextField variant="outlined" value={year} onChange={e => setYear(e.target.value)} />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <Select
                    value={month}
                    onChange={e => setMonth(e.target.value)}
                  >
                    <MenuItem value={'1'}>January</MenuItem>
                    <MenuItem value={'2'}>February</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField variant="outlined" value={day} onChange={e => setDay(e.target.value)} />
              </Grid>
            </Grid>
          </FormControl>
        </Grid>

        <Grid item sm={12} textAlign={'center'} sx={{ mt: 2 }}>
          <Button variant="contained">Save Changes</Button>
        </Grid>
      </Grid>
    );
  }
};
