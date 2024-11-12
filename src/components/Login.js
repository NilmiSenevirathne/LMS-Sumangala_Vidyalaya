import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import backgroundImage from '../Images/backinLogin.jpg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import visibility icons
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      showPassword: false, // Add state to track password visibility
      error: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { userId, password } = this.state;

    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${apiUrl}/login`, {
        userId: userId,
        password: password,
      });

      console.log('Login successful:', response.data);
    } catch (error) {
      this.setState({ error: 'Invalid userId or password' });
      console.error('Login failed:', error);
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClickShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const defaultTheme = createTheme();
    const { userId, password, showPassword, error } = this.state;

    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Grid container component="main" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={false}
            sm={8}
            md={6}
            sx={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}
          />
          <Grid
            item
            xs={12}
            sm={4}
            md={6}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ height: '100%' }}
          >
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              sx={{ height: '100%' }}
            >
              <Box
                sx={{
                  maxWidth: 400,
                  p: 3,
                  borderRadius: 1,
                  boxShadow: 1,
                  bgcolor: 'background.paper',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h5" align="center" gutterBottom>
                  Login
                </Typography>
                <form onSubmit={this.handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="User ID"
                    name="userId"
                    autoComplete="userid"
                    autoFocus
                    value={userId}
                    onChange={this.handleChange}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'} // Toggle the input type based on showPassword state
                    autoComplete="current-password"
                    value={password}
                    onChange={this.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />} {/* Toggle the eye icon */}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {error && (
                    <Typography color="error" variant="body2" align="center">
                      {error}
                    </Typography>
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                  >
                    Sign In
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
