
import React, { useState } from "react";
import {

    Avatar,
    Typography,
    Container,
    Grid,
    CardContent,
    Divider,
    Card,
    Box,
    Button,
    TextField,
} from "@mui/material";
import Wrapper from '@/layout/wrapper/wrapper'
import Link from "next/link";
import { useProfileQuery, useUpdateProfileMutation } from "@/api/hooks/user/hooks";
import Sidebar from './sidebar';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from "react-hook-form";
import { IFormInput } from "@/typescript/interface/common.interface";
const Dashboard = () => {
    const [nameEdit, setNameEdit] = useState(false)
    const [phoneEdit, setPhoneEdit] = useState(false)
    const { userdashboard, isLoading } = useProfileQuery()
    const mutation = useUpdateProfileMutation()
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<IFormInput>();
    // console.log(userdashboard);

    const handleNameChange = () => {
        setNameEdit(true)
    }
    const handlePhoneEdit = () => {
        setPhoneEdit(true)
    }

    const OnSubmit = (data: IFormInput) => {


        const formdata: {
            [key: string]: any;
        } = new FormData();
        formdata.append('first_name', data.first_name!)
        formdata.append('last_name', data.last_name!)
        formdata.append('email', userdashboard?.email!)
        formdata.append('phone', userdashboard?.phone!)
        // formdata.append('profile_photo_path',userdashboard?.profile_photo!)
        mutation.mutate(formdata)
        setNameEdit(false)
    }

    const OnPhoneEditSubmit=(data:IFormInput)=>{
            setPhoneEdit(false)
            const formdata: {
                [key: string]: any;
            } = new FormData();
            formdata.append('first_name', userdashboard?.first_name!)
            formdata.append('last_name', userdashboard?.last_name!)
            formdata.append('email', userdashboard?.email!)
            formdata.append('phone', data?.phone!)
            // formdata.append('profile_photo_path',userdashboard?.profile_photo!)
            mutation.mutate(formdata)
    }
    return (
        <>
            <Wrapper>
               
                <Grid container maxWidth='xl'>
                    <Grid xs={12} md={3} xl={3} >
                        <Sidebar/>
                    </Grid>
                    <Grid xs={12} md={9} xl={9} sx={{marginTop:'8rem'}}>
                   
                       
                       <Grid container >
                           <Grid item md={8} sm={10} xs={12} sx={{padding:{xl:'5rem'}}}>
                               <Card style={{ borderRadius: '1rem', display: 'flex' }}>
                                   <Grid container component={Paper} elevation={11} sx={{border:'1px solid #ffbc00'}}>
                                       <Grid item md={4} xs={12} lg={4} style={{ backgroundColor: 'rgb(34, 58, 102)', borderTopLeftRadius: '0.5rem', borderBottomLeftRadius: '0.5rem', textAlign: 'center', color: 'white' }}>
                                           <Box py={4}>
                                               <Avatar
                                                   alt="R"
                                                   src={userdashboard?.profile_photo}
                                                   style={{ width: 120, height: 120, margin: '0 auto', borderRadius: '50%' }}
                                               />
                                               <Button component={Link} href='/update-profile' variant="contained" sx={{ marginTop: '1rem' }}>Update Profile</Button>
       

                                           </Box>
                                       </Grid>
                                       <Grid item md={8} xs={12} lg={8} style={{ backgroundColor: 'white', maxWidth: '100%' }} >
                                           <Paper elevation={6} >
                                           <CardContent>
                                               <Typography variant="h3" className="text-black" sx={{ color: 'black' }}>Information</Typography>
                                               <Divider style={{ margin: '16px 0' }} />
                                               <Grid container spacing={2} >
                                                   <TableContainer component={Paper} >
                                                       <Table aria-label="simple table">
                                                           <TableBody>

                                                               <TableRow>
                                                                   <TableCell align="right" sx={{ color: 'black', fontSize: '16px' }}>Name</TableCell>
                                                                   {!nameEdit ? <TableCell align="right" sx={{ color: 'black', fontSize: '16px' }}>
                                                                       {userdashboard?.first_name} {userdashboard?.last_name}
                                                                   </TableCell>
                                                                       :
                                                                       <>
                                                                           <TableCell>
                                                                               <Grid container>
                                                                                   <Grid item xs={12} sm={6}>
                                                                                       <TextField
                                                                                           autoComplete="given-name"
                                                                                           required
                                                                                           fullWidth
                                                                                           variant="filled"
                                                                                           id="first_name"
                                                                                           {...register("first_name", { required: true })}
                                                                                           defaultValue={userdashboard?.first_name}

                                                                                           autoFocus
                                                                                       />

                                                                                   </Grid>
                                                                                   <Grid item xs={12} sm={6}>
                                                                                       <TextField
                                                                                           required
                                                                                           fullWidth
                                                                                           variant="filled"
                                                                                           id="last_name"

                                                                                           defaultValue={userdashboard?.last_name}
                                                                                           {...register("last_name", { required: true })}
                                                                                           autoComplete="family-name"
                                                                                       />

                                                                                   </Grid>
                                                                               </Grid>
                                                                           </TableCell>
                                                                       </>
                                                                   }
                                                                   <TableCell>
                                                                       {!nameEdit ? <Button onClick={handleNameChange} sx={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', bgcolor: '#223a66 ', color: 'white', '&:hover': { bgcolor: '#ffbc00', color: 'white' } }}>
                                                                           <EditIcon sx={{fontSize:'16px'}} />
                                                                       </Button>
                                                                           :
                                                                           <Button onClick={handleSubmit(OnSubmit)} sx={{ bgcolor: '#223a66 ', color: 'white', '&:hover': { bgcolor: '#220b60', color: 'white' } }}>
                                                                               Save
                                                                           </Button>
                                                                       }



                                                                   </TableCell>
                                                               </TableRow>
                                                               <TableRow>
                                                                   <TableCell align="right" sx={{ color: 'black', fontSize: '16px' }}>Email</TableCell>
                                                                   <TableCell align="right" sx={{ color: 'black', fontSize: '16px' }}> {userdashboard?.email}</TableCell>

                                                               </TableRow>
                                                               <TableRow>
                                                                   <TableCell align="right" sx={{ color: 'black', fontSize: '16px' }}>Phone</TableCell>
                                                                  {!phoneEdit? <TableCell align="right" sx={{ color: 'black', fontSize: '16px' }}> {userdashboard?.phone}</TableCell>
                                                                   :
                                                                   <TextField
                                                                   autoComplete="given-name"
                                                                   required
                                                                   fullWidth
                                                                   variant="filled"
                                                                   id="phone"
                                                                   {...register("phone", { required: true })}
                                                                   defaultValue={userdashboard?.phone}

                                                                   autoFocus
                                                               />   
                                                               }
                                                                   <TableCell>
                                                                   {!phoneEdit ? <Button onClick={handlePhoneEdit} sx={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',bgcolor: '#223a66 ', color: 'white', '&:hover': { bgcolor: '#ffbc00', color: 'white' } }}>
                                                                           <EditIcon sx={{fontSize:'16px'}} />
                                                                       </Button>
                                                                           :
                                                                           <Button onClick={handleSubmit(OnPhoneEditSubmit)} sx={{ bgcolor: '#223a66 ', color: 'white', '&:hover': { bgcolor: '#220b60', color: 'white' } }}>
                                                                               Save
                                                                           </Button>
                                                                       }
                                                                 </TableCell>
                                                               </TableRow>
                                                           </TableBody>
                                                       </Table>
                                                   </TableContainer>
                                                   <Button component={Link} href='/change-password' sx={{ marginTop: '1rem', marginLeft: '3rem', bgcolor: '#220b60', color: 'white', '&:hover': { bgcolor: '#ffbc00', color: 'white' } }}>Change Password</Button>
                                                   
                                               </Grid>
                                           </CardContent>
                                           </Paper>
                                       </Grid>
                                   </Grid>
                               </Card>
                           </Grid>
                       </Grid>
                  
                    </Grid>

                </Grid>
               
                
        

            </Wrapper>

        </>
    );
};

export default Dashboard;