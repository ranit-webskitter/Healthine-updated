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
import { useForm, SubmitHandler } from "react-hook-form";

import { IFormInput } from '@/typescript/interface/common.interface';
import { Paper } from '@mui/material';
import { toast } from 'react-toastify';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useForgotPasswordMutation } from '@/api/hooks/user/hooks';

const Wrapper = dynamic(() => import("@/layout/wrapper/wrapper"));
const defaultTheme = createTheme();



export default function forgotPass() {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<IFormInput>();
    const mutation=useForgotPasswordMutation()
    const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
        const uploadData: IFormInput = {
            email: data?.email,
        }
        mutation.mutate(uploadData)
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
                                //marginTop: 8,
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
                                Forgot Password
                            </Typography>


                            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            {...register("email", { required: true, pattern: /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm })}
                                            autoComplete="email"
                                        />
                                        {errors.email && errors.email.type === 'required' && <p style={{ color: 'red' }}>This field is required</p>}
                                        {errors.email && errors.email.type === 'pattern' && <p style={{ color: 'red' }}>Enter a Valid Email</p>}
                                    </Grid>

                                    

                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Save
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item style={{ marginBottom: '2rem' }}>
                                        <Link href="/reset-password" >
                                            Reset password
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