

import { Typography, Container, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';



import Slider from "react-slick";
import Wrapper from '@/layout/wrapper/wrapper'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Testimonials from '@/pages/testimonials/index'
import CallIcon from '@mui/icons-material/Call';
import XIcon from '@mui/icons-material/X';
import Loader from '@/layout/Loader/loader';
import { useHomePageContent } from '@/api/hooks/home/hooks';
const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const HomePage = () => {

const {homePageContent,isLoading,isError}=useHomePageContent()
  console.log(homePageContent)
  if (isLoading) {
    return <Loader/>
  }

  if (isError || !homePageContent) {
    return <Typography>Error fetching data</Typography>;
  }

  const { pageContents, usps, detailedBenifits, aboutusTeamDetails } = homePageContent;

  return (
    <>
      <Wrapper>
        <>
        <Container maxWidth='xl'>
          <Box sx={{ backgroundColor: '#f3c596', width: '100%',marginTop:'4.5rem',padding:'1rem' }}>
           
            <Typography variant="h3" component="h3" gutterBottom sx={{ fontSize: '16px',color:'#230b61' }}>
              {pageContents.main_headline}
            </Typography>
            <Typography variant="h6" component="p" gutterBottom sx={{ fontSize: '12px',color:'#230b61' }}>
              {pageContents.sub_headline}
            </Typography>
          </Box>
         
          

              {/* Hero Section */}
              <Box>
              <CardMedia component="img" src={pageContents.introduction_heading_image} alt="introduction_heading_image" sx={{ objectFit: 'contain', height: '25rem' }} />
              <Box
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "28%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  backgroundColor:'#0C589C',
                  // backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "20px",
                  borderRadius: "5px",
                }}
              >
                <Typography variant="h2" style={{ color: "white" }}>
                  {pageContents?.banner_heading}
                </Typography>
                <Typography variant="body1" style={{ color: "white" }}>
                  {pageContents?.banner_sub_heading}
                </Typography>
              </Box>
            </Box>

            {/* Usp Section */}

            <Grid container spacing={3}>
              {usps.map((usp) => (
                <Grid item xs={12} sm={6} md={4} key={usp.title}>
                  <Card sx={{backgroundColor:'#f3c596',maxHeight:'15rem'}}>
                    <CardMedia component="img" src={usp.photo} alt={usp.title} sx={{ objectFit: 'contain', height: '5rem' }} />
                    <CardContent>
                      <Typography variant="h3" component="h5" gutterBottom sx={{color:'#220b60',display:'flex',justifyContent:'center'}}>
                        {usp.title}
                      </Typography>
                      <Typography component="p" sx={{color:'#220b60'}}>{usp.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

          
              <Box sx={{ flexGrow: 1, marginTop:'2rem' ,backgroundColor:'#0C589C'}}>
              
                <Grid container spacing={2}>
                  <Grid item xs={6}>

                  <CardMedia component="img" src={pageContents?.who_we_are_image} alt='who_we_are_image' sx={{ objectFit: 'contain', height: '25rem' }} />
                  </Grid>
                  <Grid item xs={6}>
                  <Typography variant="h2"  gutterBottom sx={{color:'white',marginTop:'3rem',}}>
                    Who We Are
                  </Typography>
                  <Typography sx={{color:'white'}}>
                  {pageContents?.who_we_are}
                  </Typography>
                  
                  </Grid>
                  
                </Grid>
            </Box>


            {/* Benifits section */}
            
            <Typography variant="h3" component="h3" gutterBottom sx={{ display: 'flex', justifyContent: 'center',color:'#0C589C',marginTop:'5rem',fontSize:'50px' }}>
              Detailed Benefits
            </Typography>
            <Grid container spacing={3}>
              {detailedBenifits.map((benefit) => (
                <Grid item xs={12} md={3} key={benefit.title}>
                  <Card sx={{ height: '40rem' }}>
                    <CardMedia component="img" src={benefit.photo} alt={benefit.title} sx={{ objectFit: 'fill', height: '25rem' }} />
                    <CardContent>
                      <Typography variant="h3" component="h3" gutterBottom sx={{color:'black'}}>
                        {benefit.title}
                      </Typography>
                      <ul>
                        {benefit.benifit_array.map((item, index) => (
                          <li key={index} style={{color:'black'}}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Contact Us */}

            <Box sx={{ flexGrow: 1, marginTop:'2rem',backgroundColor:'#0C589C'}}>
              
              <Grid container spacing={2}>
                <Grid item xs={6}>

                <CardMedia component="img" src={pageContents?.contact_a_licensed_agent_image} alt='Contact Us' sx={{ objectFit: 'contain', height: '25rem' }} />
                </Grid>
                <Grid item xs={6}>
                <Typography variant="h2" component="h2" gutterBottom sx={{color:'white',marginTop:'3rem'}}>
                  Contact us
                </Typography>
                
                 <h4 style={{color:'white'}}> <CallIcon sx={{verticalAlign:'middle'}}/> call us: {pageContents?.contact_a_licensed_agent_phone}</h4>
                 <a href={pageContents?.fb_link} target="_blank" rel="noopener noreferrer" style={{margin:'1rem'}}>
                 <FacebookIcon style={{color:'white',margin:'1rem'}}/>
                 </a>
                 <a href={pageContents?.insta_link} target="_blank" rel="noopener noreferrer" style={{margin:'1rem'}}>
                 <InstagramIcon style={{color:'white' ,margin:'1rem'}}/>
                 </a>
                 <a href={pageContents?.twitter_link} target="_blank" rel="noopener noreferrer" style={{margin:'1rem'}}>
                 <LinkedInIcon style={{color:'white',margin:'1rem'}}/>
                 </a>
                 
                </Grid>
                
              </Grid>
          </Box>


            {/* Team Section */}

            <Typography variant="h3" component="h3" gutterBottom sx={{ display: 'flex', justifyContent: 'center',color:'#0C589C' ,marginTop:'5rem',fontSize:'50px'}}>
              Our Team
            </Typography>
            {/* <Grid container spacing={3}>
        {aboutusTeamDetails.map((teamMember) => (
          <Grid item xs={12} sm={6} md={4} key={teamMember.name}>
            <Card>
              <CardMedia component="img" src={teamMember.profile_photo_path} alt={teamMember.name} sx={{height:'15rem',objectFit:'fill'}} />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {teamMember.name}
                </Typography>
                <Typography>{teamMember.designation}</Typography>
                <Typography>
                  {teamMember.fb_link && (
                    <a href={teamMember.fb_link} target="_blank" rel="noopener noreferrer">
                      <FacebookIcon/>
                    </a>
                  )}
                  {teamMember.insta_link && (
                    <a href={teamMember.insta_link} target="_blank" rel="noopener noreferrer">
                      <InstagramIcon/>
                    </a>
                  )}
                  {teamMember.linkedin_link && (
                    <a href={teamMember.linkedin_link} target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon/>
                    </a>
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
       


      </Grid> */}
      <Container maxWidth='lg'>
            <Slider {...settings} autoplay>
              {aboutusTeamDetails.map((teamMember) => (
                <Box key={teamMember.name}>
                  <Card sx={{ margin: '1rem',width:'18rem' }}>
                    <CardMedia component="img" src={teamMember.profile_photo_path} alt={teamMember.name} sx={{ height: '20rem', objectFit: 'fill' }} />
                    <CardContent>
                      <Typography gutterBottom sx={{color:'black'}}>
                        {teamMember.name}
                      </Typography>
                      <Typography sx={{marginBottom:'2rem',color:'blue'}}>{teamMember.designation}</Typography>
                      <Typography>
                        {teamMember.fb_link && (
                          <a href={teamMember.fb_link} target="_blank" rel="noopener noreferrer" style={{margin:'1rem',color:'blue'}}>
                            <FacebookIcon />
                          </a>
                        )}
                        {teamMember.insta_link && (
                          <a href={teamMember.insta_link} target="_blank" rel="noopener noreferrer" style={{margin:'1rem',color:'blue'}}>
                            <InstagramIcon />
                          </a>
                        )}
                        {teamMember.thread_link && (
                          <a href={teamMember.thread_link} target="_blank" rel="noopener noreferrer" style={{margin:'1rem',color:'blue'}}>
                            <XIcon/>
                          </a>
                        )}
                         {teamMember.linkedin_link && (
                          <a href={teamMember.linkedin_link} target="_blank" rel="noopener noreferrer" style={{margin:'1rem',color:'blue'}}>
                            <LinkedInIcon />
                          </a>
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Slider>

            </Container>
            {/* </Grid> */}
            <div style={{backgroundColor:'#f3c596'}}>
            <Testimonials withLayout={false}  />
            </div>
            {/* <Testimonials withLayout={false}  /> */}
          </Container>
        </>
      </Wrapper>
    </>
  );
};

export default HomePage;


