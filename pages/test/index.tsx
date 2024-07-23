import { useProfileQuery } from '@/api/hooks/user/hooks'
import { Avatar, Box, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Link from 'next/link';
const index = () => {
    const {userdashboard,isLoading}=useProfileQuery()
  return (
    <>
    <Grid container>
        <Grid xl={2}>
    <Box
    sx={{
        minHeight:'480px',
        padding:'50px 15px',
        backgroundColor:'#16a6df',
        borderRadius:'10px',
        display:'flex',
        flexDirection:'column',
        height:'100vh'
    }}
    >
           <List>
          <Avatar
            alt="R"
            src={userdashboard?.profile_photo}
            style={{ width: 120, height: 120, margin: '0 auto', borderRadius: '50%',marginBottom:'2rem' }}
          />
          <Typography sx={{display:'flex', justifyContent:'center',fontSize:'24px'}}>{userdashboard?.first_name} {userdashboard?.last_name}</Typography>
         <Divider sx={{bgcolor:'white',height:2,margin:'2rem'}}/>
          <ListItem button component={Link} href="/dashboard" sx={{ color: 'white' }}>
            <PersonIcon sx={{ mr: 1 }} /> 
            <ListItemText primary="My Profile" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem button component={Link} href="/dashboard/support">
            <ContactSupportIcon sx={{ mr: 1,color:'white' }} />
            <ListItemText primary="Support" />
          </ListItem>
        </List>
    </Box>
    </Grid>
    </Grid>

    </>
  )
}

export default index
