

import * as React from 'react';
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
import { useForm, SubmitHandler } from 'react-hook-form';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import dynamic from 'next/dynamic';
import { IFormInput } from '@/typescript/interface/common.interface';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CircularProgress } from '@mui/material';
import { useLoginMutation } from '@/api/hooks/user/hooks';
const Wrapper = dynamic(() => import('@/layout/wrapper/wrapper'));
const defaultTheme = createTheme();

const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid email format'),
    password: yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must be at least 8 characters, and include at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
});

export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const {mutation} = useLoginMutation();

    const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
        const uploadData: IFormInput = {
            email: data?.email,
            password: data?.password,
        };
        mutation.mutate(uploadData);
    };

    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Wrapper>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
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
                                margin: '3rem',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5" >
                                Sign In
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            {...register("email")}
                                            autoComplete="email"
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        
                                            required
                                            fullWidth
                                            id="password"
                                            label="Password"
                                            type={showPassword ? 'text' : 'password'} 
                                            {...register("password")}
                                            autoComplete="current-password"
                                            error={!!errors.password}
                                            helperText={errors.password?.message}
                                            InputProps={{
                                                endAdornment: (
                                                    <Button onClick={togglePasswordVisibility}>
                                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                    </Button>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    {mutation.isPending ? <><CircularProgress color="inherit" /></>:<>Sign In</>}
                                   
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item style={{ marginBottom: '2rem' }}>
                                        <Link href="/register" >
                                            Don't have an account? Sign Up
                                        </Link>
                                    </Grid>
                                    <Grid item style={{ marginBottom: '2rem' }}>
                                        <Link href="/forgot-password" >
                                            Forgot Password
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </ThemeProvider>
        </Wrapper>
    );
}


