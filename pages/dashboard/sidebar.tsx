


// import { useProfileQuery } from '@/api/hooks/user/hooks'
// import { Avatar, Box, Divider, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
// import React from 'react'
// import PersonIcon from '@mui/icons-material/Person';
// import ContactSupportIcon from '@mui/icons-material/ContactSupport';
// import Link from 'next/link';
// const index = () => {
//     const {userdashboard,isLoading}=useProfileQuery()
//   return (
//     <>
  
//     <Box
//     sx={{
//         minHeight:'480px',
//         padding:'50px 15px',
//         backgroundColor:'#16a6df',
//         borderRadius:'10px',
//         display:'flex',
//         flexDirection:'column',
//         // flexDirection: ['row', null, 'column'], 
//         height: '100%',
//         marginTop:'3rem'
//     }}

   
//     >
//            <List>
//           <Avatar
//             alt="R"
//             src={userdashboard?.profile_photo}
//             style={{ width: 120, height: 120, margin: '0 auto', borderRadius: '50%',marginBottom:'2rem' }}
//           />
//           <Typography sx={{display:'flex', justifyContent:'center',fontSize:'24px'}}>{userdashboard?.first_name} {userdashboard?.last_name}</Typography>
//          <Divider sx={{bgcolor:'white',height:2,margin:'2rem'}}/>
//           <ListItem button component={Link} href="/dashboard" sx={{ color: 'white' }}>
//             <PersonIcon sx={{ mr: 1 }} /> 
//             <ListItemText primary="My Profile" sx={{ color: 'white' }} />
//           </ListItem>
//           <ListItem button component={Link} href="/dashboard/support" sx={{paddingBottom:{xl:'15rem'}}}> 
//             <ContactSupportIcon sx={{ mr: 1,color:'white' }} />
//             <ListItemText primary="Support"  />
//           </ListItem>
//         </List>
//     </Box>
  

//     </>
//   )
// }

// export default index


import React from 'react';
import { useRouter } from 'next/router';
import { useProfileQuery } from '@/api/hooks/user/hooks';
import { Avatar, Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CallIcon from '@mui/icons-material/Call';
import Link from 'next/link';

const Index = () => {
  const router = useRouter();
  const { userdashboard, isLoading } = useProfileQuery();

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  const getLinkColor = (href: string) => {
    return isActive(href) ? '#220b60' : 'initial'; 
  };

  return (
    <Box
      sx={{
        minHeight: '480px',
        padding: '50px 15px',
        backgroundColor: '#16a6df',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        height: {xs:'100%', xl:'145vh'},
        marginTop: '3rem',
      }}
    >
      <List>
        <Avatar
          alt="R"
          src={userdashboard?.profile_photo}
          style={{ width: 120, height: 120, margin: '0 auto', borderRadius: '50%', marginBottom: '2rem' }}
        />
        <Typography sx={{ display: 'flex', justifyContent: 'center', fontSize: '24px', color: 'white' }}>
          {userdashboard?.first_name} {userdashboard?.last_name}
        </Typography>
        <Divider sx={{ bgcolor: 'white', height: 2, margin: '2rem' }} />
        <ListItem button component={Link} href="/dashboard" sx={{ color:'white' ,backgroundColor: getLinkColor('/dashboard') }}>
          <PersonIcon sx={{ mr: 1 }} />
          <ListItemText primary="My Profile" sx={{ color:'white'}} />
        </ListItem>
        <ListItem button component={Link} href="/contact" sx={{ backgroundColor: getLinkColor('/contact')}}>
          <CallIcon sx={{ mr: 1, color: 'white' }} />
          <ListItemText primary="Contact" sx={{  color:'white'  }} />
        </ListItem>
        <ListItem button component={Link} href="/dashboard/support" sx={{ backgroundColor: getLinkColor('/dashboard/support')}}>
          <ContactSupportIcon sx={{ mr: 1, color: 'white' }} />
          <ListItemText primary="Support" sx={{  color:'white'  }} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Index;
