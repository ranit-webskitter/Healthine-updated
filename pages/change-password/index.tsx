import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, SubmitHandler } from "react-hook-form";

import { IFormInput } from '@/typescript/interface/common.interface';
import { CircularProgress, Paper } from '@mui/material';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useChangePasswordMutation } from '@/api/hooks/user/hooks';

const Wrapper = dynamic(() => import("@/layout/wrapper/wrapper"));
const defaultTheme = createTheme();



export default function SignUp() {
    const router=useRouter()
    const dispatch=useDispatch()
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<IFormInput>();
   
    const mutation=useChangePasswordMutation()
    const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
        const uploadData: IFormInput = {
            old_password: data?.old_password,
            password: data?.password,
            password_confirmation:data?.password_confirmation
        }
         mutation.mutate(uploadData)
       // console.log(uploadData)
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
                                 Change Password
                            </Typography>


                            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            {...register("old_password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })}
                                            label="Old Password"
                                            id="old_password"
                                        />
                                        {errors.password && errors.password.type === 'required' && <p style={{ color: 'red' }}>This field is required</p>}
                                        {errors.password && errors.password.type === "pattern" && <p style={{ color: 'red' }}>Minimum eight characters, at least one uppercase letter, one lowercase letter,one Special charecter and one number</p>}
                                    </Grid>


                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })}
                                            label="Password"
                                            id="password"
                                        />
                                        {errors.password && errors.password.type === 'required' && <p style={{ color: 'red' }}>This field is required</p>}
                                        {errors.password && errors.password.type === "pattern" && <p style={{ color: 'red' }}>Minimum eight characters, at least one uppercase letter, one lowercase letter,one Special charecter and one number</p>}
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            {...register("password_confirmation", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })}
                                            label="Password Confirmation"
                                            id="password_confirmation"
                                        />
                                        {errors.password && errors.password.type === 'required' && <p style={{ color: 'red' }}>This field is required</p>}
                                        {errors.password && errors.password.type === "pattern" && <p style={{ color: 'red' }}>Minimum eight characters, at least one uppercase letter, one lowercase letter,one Special charecter and one number</p>}
                                    </Grid>

                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                       {mutation.isPending ? <><CircularProgress color="inherit" /></>:<>Submit</>}
                                </Button>
                               
                            </Box>
                        </Box>
                    </Paper>
                </Container>
           
        </ThemeProvider>
        </Wrapper>

    );
}

