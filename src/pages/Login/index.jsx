import { TextField, Button, Container, Box } from "@mui/material";

const Login = () => {
  return (
    <Box component="form" sx={{display: 'flex', flexDirection: 'column', m: '50px', gap: '30px', backgroundColor: '#FFFFFD', padding: '20px', borderRadius:'10px'}}>
      <Container direction="column" sx={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
        <TextField variant="outlined" label="E-mail" />
        <TextField variant="outlined" label="Senha" type="password" />
      </Container>
      <Container sx={{display: 'flex', flexDirection: 'column'}}>
        <Button variant="contained" sx={{alignSelf: 'center'}}>Login</Button>
      </Container>            
    </Box>
  );
};

export default Login;