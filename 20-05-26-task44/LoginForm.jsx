import {
  Box,
  TextField,
  Button,
  Typography,
} from '@mui/material';

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login Successful');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 320,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5">
        Login Form
      </Typography>

      <TextField
        label="Email"
        type="email"
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;