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

export const DashBoard = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          value={'Firstname'}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextField
          fullWidth
          label="Last Name"
          variant="outlined"
          value={'Firstname'}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">Region</InputLabel>
          <Select
            value={10}
            label="Region"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Viet Nam</MenuItem>
            <MenuItem value={20}>USA</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <TextField
          fullWidth
          label="Phone"
          type="text"
          variant="outlined"
          value={formatPhoneNumber('84123232233')}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          value={'My emai'}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <TextField
          fullWidth
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={'password'}
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
            value={'male'}
            // onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <FormControl fullWidth>
          <FormLabel>Date of birth</FormLabel>

          <Grid container spacing={1}>
            <Grid item xs={3}>
              <TextField variant="outlined" value={2000} />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Select
                  value={1}
                  // onChange={handleChange}
                >
                  <MenuItem value={'1'}>January</MenuItem>
                  <MenuItem value={'2'}>February</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <TextField variant="outlined" value={27} />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>

      <Grid item sm={12} textAlign={'center'} sx={{ mt: 2 }}>
        <Button variant="contained">Save Changes</Button>
      </Grid>
    </Grid>
  );
};
