import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userActions';



const theme = createTheme();

export default function Register() {

  // set useState variables

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [npiNumber, setNpiNumber] = useState('');
  const [businessAddress, setBusinessAddress] = useState ('');

  const dispatch = useDispatch();
  // update state upon form entry -- done
  // look up using refs so we aren't refreshing state every time something changes
  // set event data appropriately in the handlesubmit function
  // set up actions/constants/reducers to send the event data to the API - psudoCod done
  // set up barebones server to capture and store this data -- psudoCode done
  // link to mongodb with mongoose so it stores the data

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    dispatch(registerUser(
      firstName,
      lastName,
      npiNumber,
      businessAddress,
      phoneNumber,
      email
    ))
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Register
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange = {(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange = {(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange = {(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="npiNumber"
                  label="NPI Number"
                  type="npiNumber"
                  id="npiNumber"
                  onChange = {(e) => setNpiNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="businessAddressOne"
                  label="Business Address"
                  type="businessAddressOne"
                  id="businessAddressOne"
                  onChange = {(e) => setBusinessAddress(e.target.value)}
                />
                {/* <TextField
                  fullWidth
                  name="businessAddressTwo"
                  label="(Suite, Unit..)"
                  type="businessAddressTwo"
                  id="businessAddressTwo"
                  onChange = {(e) => setBusinessAddress(businessAddress += e.target.value)}
                /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number (xxx-xxx-xxxx)"
                  name="phone"
                  autoComplete="phone"
                  onChange = {(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // send data to handleSubmit function?
            >
              Register
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}