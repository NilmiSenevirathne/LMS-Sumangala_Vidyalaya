import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import backgroundImage from '../Images/backinLogin.jpg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { TextField, Button, Typography } from '@mui/material';

export default class Login extends Component {
  render() {
    const defaultTheme = createTheme();

    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Grid container component="main" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={false}
            sm={8}
            md={6} // Adjust this breakpoint if needed
            sx={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}
          />
          <Grid
            item
            xs={12}
            sm={4}
            md={6} // Adjust this breakpoint if needed
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
                <form>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
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
