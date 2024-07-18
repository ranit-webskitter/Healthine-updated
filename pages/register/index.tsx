
import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import Wrapper from '@/layout/wrapper/wrapper';
import { IFormInput } from '@/typescript/interface/common.interface';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CircularProgress } from '@mui/material';
import { useRegisterMutation } from '@/api/hooks/user/hooks';
const schema = yup.object().shape({
    first_name: yup.string().required('First Name is required'),
    last_name: yup.string().required('Last Name is required'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    username: yup.string().required('Username is required'),
    phone: yup.string().required('Phone is required'),
    password: yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must be at least 8 characters, and include at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    confirm_password: yup.string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Passwords must match')
});

export default function SignUp() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema) 
    });
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const mutation = useRegisterMutation(); 

    const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
        const uploadData: IFormInput = {
            first_name: data?.first_name,
            last_name: data?.last_name,
            email: data?.email,
            username: data?.username,
            phone: data?.phone,
            password: data?.password,
            confirm_password: data?.confirm_password
        };
        mutation.mutate(uploadData);
    };

    return (
        <Wrapper>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3} style={{
                    padding: "1rem 2rem",
                    marginTop: "6rem",
                    width: "100%",
                    marginBottom: "1rem",
                }} >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '1rem'

                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#9b27af' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h3" variant="h3" sx={{color:'black',fontWeight:'bolder'}}>
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        required
                                        fullWidth
                                        id="first_name"
                                        {...register("first_name")}
                                        error={!!errors.first_name}
                                        label="First Name"
                                        autoFocus
                                        
                                    />
                                    {errors.first_name && <p style={{ color: 'red' }}>{errors.first_name.message}</p>}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="last_name"
                                        label="Last Name"
                                        {...register("last_name")}
                                        error={!!errors.last_name}
                                        autoComplete="family-name"
                                    />
                                    {errors.last_name && <p style={{ color: 'red' }}>{errors.last_name.message}</p>}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        {...register("email")}
                                        error={!!errors.email}
                                        autoComplete="email"
                                    />
                                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        {...register("username")}
                                        error={!!errors.username}
                                        label="Username"
                                        id="username"
                                    />
                                    {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        {...register("phone")}
                                        error={!!errors.phone}
                                        label="Phone"
                                        id="phone"
                                    />
                                    {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        {...register("password")}
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'} 
                                        error={!!errors.password}
                                        id="password"
                                        InputProps={{
                                          endAdornment: (
                                              <Button onClick={togglePasswordVisibility}>
                                                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                              </Button>
                                          ),
                                      }}
                                    />
                                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                       
                                        {...register("confirm_password")}
                                        label="Confirm Password"
                                        type={showPassword ? 'text' : 'password'} 
                                        error={!!errors.confirm_password}
                                        id="confirm_password"
                                        InputProps={{
                                          endAdornment: (
                                              <Button onClick={togglePasswordVisibility}>
                                                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                              </Button>
                                          ),
                                      }}
                                    />
                                    {errors.confirm_password && <p style={{ color: 'red' }}>{errors.confirm_password.message}</p>}
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {mutation.isPending ? <><CircularProgress color="inherit" /></>:<>Sign Up</>}
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item style={{ marginBottom: '2rem' }}>
                                    <Link href="/login">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Wrapper>
    );
}
