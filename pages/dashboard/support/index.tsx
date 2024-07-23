// import React from 'react'
// import Wrapper from '@/layout/wrapper/wrapper'
// import Sidebar from '../sidebar';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { useForm } from 'react-hook-form';
// import HelpIcon from '@mui/icons-material/Help';
// import MenuItem from '@mui/material/MenuItem';
// import { supportSchema } from '@/api/hooks/support/schema';
// import { useCreateNewTicketReq, useMyTickets } from '@/api/hooks/support/hooks';
// import { Divider, Paper } from '@mui/material';
// import MySupportTicket from './MySupportTicket'
// const priority = [
//     {
//         value: 'Low',
//         label: 'Low',
//     },
//     {
//         value: 'High',
//         label: 'High',
//     }
// ];
// const index = () => {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//         reset
//     } = useForm()
//     const { myTickets, isLoading } = useMyTickets({ page: 1,per_page:3 });
//     const mutation = useCreateNewTicketReq()
//     const OnSubmit = (data: any) => {
//         console.log(data)
//         mutation.mutate(data),
//         reset()

//     }
//     return (
//         <>
//             <Wrapper>

//                 <Sidebar>
//                     <>
//                     <Container component="main" maxWidth="xl">
//                         <CssBaseline />
//                         <Box sx={{display:'flex',padding:'10px',marginTop:'3rem',marginLeft:'10rem' }} >

//                        <Box sx={{display:'flex',padding:'10px',width:'15rem',marginRight:'3rem'}} component={Paper} elevation={7}>
//                        <Typography sx={{bgcolor:'rgb(34, 11, 96)',color:'rgb(255, 255, 255)',display: 'flex',alignItems: 'center',justifyContent:'center',width:'60px',height:'60px',fontSize:'25px',borderRadius:'50%'}}>{myTickets?.totalTickets}</Typography>
//                        <Box>
//                        <Typography sx={{color:'black',paddingLeft:'10px'}}>Total</Typography>
//                        <Typography sx={{color:'black',paddingLeft:'10px'}}>Support</Typography>
//                        </Box>
//                        </Box>


//                        <Box sx={{display:'flex',padding:'10px',width:'15rem',marginRight:'3rem'}} component={Paper} elevation={7}>
//                        <Typography sx={{bgcolor:'rgb(34, 11, 96)',color:'rgb(255, 255, 255)',display: 'flex',alignItems: 'center',justifyContent:'center',width:'60px',height:'60px',fontSize:'25px',borderRadius:'50%'}}>{myTickets?.resolvedTickets}</Typography>
//                        <Box>
//                        <Typography sx={{color:'black',paddingLeft:'10px'}}>Resolved</Typography>
//                        <Typography sx={{color:'black',paddingLeft:'10px'}}>Support</Typography>
//                        </Box>
//                        </Box>

//                        <Box sx={{display:'flex',padding:'10px',width:'15rem',marginRight:'3rem'}} component={Paper} elevation={7}>
//                        <Typography sx={{bgcolor:'rgb(34, 11, 96)',color:'rgb(255, 255, 255)',display: 'flex',alignItems: 'center',justifyContent:'center',width:'60px',height:'60px',fontSize:'25px',borderRadius:'50%'}}>{myTickets?.pendingTickets}</Typography>
//                        <Box>
//                        <Typography sx={{color:'black',paddingLeft:'10px'}}>Pending</Typography>
//                        <Typography sx={{color:'black',paddingLeft:'10px'}}>Support</Typography>
//                        </Box>
//                        </Box>
//                        </Box>




//                         <Box
//                             sx={{
//                                 marginTop: '3rem',
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 alignItems: 'center',
//                             }}
//                         >
//                             <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
//                                 <HelpIcon />
//                             </Avatar>
//                             <Typography component="h1" variant="h5" sx={{ color: 'black', fontSize: '22px' }}>
//                                 Support
//                             </Typography>
//                             <Box component="form" noValidate onSubmit={handleSubmit(OnSubmit)} sx={{ mt: 3 }}>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12} sm={6}>
//                                         <TextField
//                                             autoComplete="given-name"
//                                             {...register('subject')}
//                                             required
//                                             fullWidth
//                                             id="subject"
//                                             label="Subject"
//                                             autoFocus
//                                         />
//                                     </Grid>
//                                     <Grid item xs={12} sm={6}>
//                                         <TextField
//                                             id="outlined-select-currency"
//                                             select
//                                             fullWidth
//                                             label="Priority"
//                                             defaultValue="Low"
//                                             {...register('priority')}

//                                         >
//                                             {priority.map((option) => (
//                                                 <MenuItem key={option.value} value={option.value} sx={{ color: 'black' }}>
//                                                     {option.label}
//                                                 </MenuItem>
//                                             ))}
//                                         </TextField>
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <TextField
//                                             multiline
//                                             required
//                                             fullWidth
//                                             rows={7}
//                                             id="description"
//                                             label="Description"
//                                             {...register('description')}
//                                         />
//                                     </Grid>

//                                 </Grid>
//                                 <Button
//                                     type="submit"
//                                     fullWidth
//                                     // variant="contained"
//                                     sx={{ mt: 3, mb: 2,bgcolor:'#220b60',color:'white','&:hover':{bgcolor:'#ffbc00',color:'white'} }}
//                                 >
//                                     Submit
//                                 </Button>

//                             </Box>
//                         </Box>



//                     </Container>
//                     <Container sx={{marginLeft:'12rem',marginTop:'3rem'}} maxWidth='md'>
//                         <MySupportTicket />

//                     </Container>
//                     </>
//                 </Sidebar>

//             </Wrapper>

//         </>
//     )
// }

// export default index




import React from 'react'
import Wrapper from '@/layout/wrapper/wrapper'
import Sidebar from '../sidebar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import HelpIcon from '@mui/icons-material/Help';
import MenuItem from '@mui/material/MenuItem';
import { supportSchema } from '@/api/hooks/support/schema';
import { useCreateNewTicketReq, useMyTickets } from '@/api/hooks/support/hooks';
import { Divider, Paper } from '@mui/material';
import MySupportTicket from './MySupportTicket'
const priority = [
    {
        value: 'Low',
        label: 'Low',
    },
    {
        value: 'High',
        label: 'High',
    }
];
const index = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm()
    const { myTickets, isLoading } = useMyTickets({ page: 1, per_page: 3 });
    const mutation = useCreateNewTicketReq()
    const OnSubmit = (data: any) => {
        console.log(data)
        mutation.mutate(data),
            reset()

    }
    return (
        <>
            <Wrapper>

                <>
                    <Grid container maxWidth='xl'>
                        <Grid xs={12} md={3} xl={3}>
                            <Sidebar />
                        </Grid>
                        <Grid xs={12} md={9} xl={9} sx={{ marginTop: '5rem' }}>
                            <Container component="main" maxWidth="xl">

                                <Grid container spacing={3} sx={{ marginTop: '3rem', padding: '10px' }}>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Paper elevation={7} sx={{ display: 'flex', padding: '10px', alignItems: 'center' }}>
                                            <Typography
                                                sx={{
                                                    bgcolor: 'rgb(34, 11, 96)',
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '60px',
                                                    height: '60px',
                                                    fontSize: '25px',
                                                    borderRadius: '50%',
                                                    marginRight: '10px',
                                                }}
                                            >
                                                {myTickets?.totalTickets}
                                            </Typography>
                                            <Box>
                                                <Typography sx={{ color: 'black', paddingLeft: '10px' }}>Total</Typography>
                                                <Typography sx={{ color: 'black', paddingLeft: '10px' }}>Support</Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Paper elevation={7} sx={{ display: 'flex', padding: '10px', alignItems: 'center' }}>
                                            <Typography
                                                sx={{
                                                    bgcolor: 'rgb(34, 11, 96)',
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '60px',
                                                    height: '60px',
                                                    fontSize: '25px',
                                                    borderRadius: '50%',
                                                    marginRight: '10px',
                                                }}
                                            >
                                                {myTickets?.resolvedTickets}
                                            </Typography>
                                            <Box>
                                                <Typography sx={{ color: 'black', paddingLeft: '10px' }}>Resolved</Typography>
                                                <Typography sx={{ color: 'black', paddingLeft: '10px' }}>Support</Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Paper elevation={7} sx={{ display: 'flex', padding: '10px', alignItems: 'center' }}>
                                            <Typography
                                                sx={{
                                                    bgcolor: 'rgb(34, 11, 96)',
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '60px',
                                                    height: '60px',
                                                    fontSize: '25px',
                                                    borderRadius: '50%',
                                                    marginRight: '10px',
                                                }}
                                            >
                                                {myTickets?.pendingTickets}
                                            </Typography>
                                            <Box>
                                                <Typography sx={{ color: 'black', paddingLeft: '10px' }}>Pending</Typography>
                                                <Typography sx={{ color: 'black', paddingLeft: '10px' }}>Support</Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>


                                <Box
                                    sx={{
                                        marginTop: '3rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
                                        <HelpIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5" sx={{ color: 'black', fontSize: '22px' }}>
                                        Support
                                    </Typography>
                                    <Box component="form" noValidate onSubmit={handleSubmit(OnSubmit)} sx={{ mt: 3 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    autoComplete="given-name"
                                                    {...register('subject')}
                                                    required
                                                    fullWidth
                                                    id="subject"
                                                    label="Subject"
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    fullWidth
                                                    label="Priority"
                                                    defaultValue="Low"
                                                    {...register('priority')}

                                                >
                                                    {priority.map((option) => (
                                                        <MenuItem key={option.value} value={option.value} sx={{ color: 'black' }}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    multiline
                                                    required
                                                    fullWidth
                                                    rows={7}
                                                    id="description"
                                                    label="Description"
                                                    {...register('description')}
                                                />
                                            </Grid>

                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            // variant="contained"
                                            sx={{ mt: 3, mb: 2, bgcolor: '#220b60', color: 'white', '&:hover': { bgcolor: '#ffbc00', color: 'white' } }}
                                        >
                                            Submit
                                        </Button>

                                    </Box>
                                </Box>



                            </Container>
                            <Container sx={{ marginTop: '3rem' }} maxWidth='md'>
                                <MySupportTicket />

                            </Container>
                        </Grid>

                    </Grid>

                </>


            </Wrapper>

        </>
    )
}

export default index
