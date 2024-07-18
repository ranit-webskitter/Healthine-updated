import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useDispatch, useSelector } from "react-redux";
import { checkLoggedInServer, check_token, logout, setLoginData } from '@/rdux-toolkit/slices/userSlice';
import { parseCookies } from 'nookies';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { HomePageContent } from '@/typescript/interface/other-types';
import { Badge, CardMedia } from '@mui/material';
import { useRouter } from 'next/router';
import { toast } from 'sonner';
import { useHomePageContent } from '@/api/hooks/home/hooks';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useViewCart } from '@/api/hooks/cart/hooks';

const pages = ['Home','Testimonials', 'Insurance', 'Contact','Login'];
const AuthPages=['Home','Testimonials', 'Insurance', 'Contact']
const settings = [ 'Dashboard','Change Password', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const router=useRouter()
  const [noOfCartElement,setNoOfCartElement]=React.useState()
  const {isLoggedIn}=useSelector((state :any)=>state.userSlice) 

  const {cartElement,refetch}=useViewCart()
  const {homePageContent}=useHomePageContent()
  //  console.log('outer',noOfCartElement)


  React.useEffect(()=>{
    setNoOfCartElement(cartElement?.userCarts?.length)
    // console.log('inner',cartElement?.userCarts?.length)
  },[cartElement])

  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    router.push('/login')

    dispatch(logout());
    toast.success('Logout successfull')
  };

  React.useEffect(()=>{
    dispatch(check_token())
  },[dispatch,handleLogout])
  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             <CardMedia component="img" src={homePageContent?.pageContents?.home_page_banner_logo} alt="" sx={{ objectFit: 'contain', height: '2rem' }} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {!isLoggedIn && pages.map((page) => (
                <MenuItem key={page} 
                 component={Link}
                 href={(page !== "Home" ) ? `/${page.toLowerCase().replace(" ", "-")}` : '/'}
                >
                  <Typography textAlign="center" sx={{color:'black'}}>{page}</Typography>
                </MenuItem>
              ))}
               {isLoggedIn && AuthPages.map((page) => (
                <MenuItem key={page} 
                 component={Link}
                 href={(page !== "Home" && `/${page.toLowerCase().replace(" ", "-")}`) || `/`}
                >
                  <Typography textAlign="center" sx={{color:'black'}}>{page}</Typography>
                </MenuItem>
              ))}
              <Button
              
              component={Link}
              href="/cart"
              sx={{ my: 2, color: 'blue', display: 'block' }}
            >
              <Badge badgeContent={noOfCartElement} >
              <ShoppingCartIcon/>
              </Badge>
              
            </Button>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <CardMedia component="img" src={homePageContent?.pageContents?.home_page_banner_logo} alt="" sx={{ objectFit: 'contain', height: '2rem' }} />
          </Typography>
          {!isLoggedIn && <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                href={(page !== "Home" && `/${page.toLowerCase().replace(" ", "-")}`) || `/`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>}
          {
            isLoggedIn && <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {AuthPages.map((page) => (
              <Button
                key={page}
                component={Link}
                href={(page !== "Home" && `/${page.toLowerCase().replace(" ", "-")}`) || `/`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
             
             <Button
              
              component={Link}
              href="/cart"
              sx={{ my: 2, color: 'white', display: 'block',marginLeft:'65%' }}
            >
              <Badge badgeContent={noOfCartElement} >
              <ShoppingCartIcon/>
              </Badge>
            </Button>
          </Box>
          }

        { isLoggedIn && 
          <Box sx={{ flexGrow: 0 }}>
            
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} 
                onClick={setting === "Logout" ? handleLogout : handleCloseUserMenu}
                 component={Link}
                 href={(setting !== "Logout" && `/${setting.toLowerCase().replace(" ", "-")}`) || `/`}
                >
                  <Typography textAlign="center" sx={{color:'black'}}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;








