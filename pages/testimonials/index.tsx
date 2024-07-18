
import { Avatar, Box, Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Wrapper from '@/layout/wrapper/wrapper'
import { useTestimonial } from '@/api/hooks/home/hooks';
const index = ({ withLayout = true }) => {
  const { testimonials, isLoading } = useTestimonial()
  // console.log(testimonials)
  const testimonialContent = (

    <div >
      <Container id="testimonials" sx={{ marginTop: '2rem' }} >
        <Box>
          <Typography component="h3" variant="h3" style={{ display: 'flex', justifyContent: 'center', color: '#0C589C', marginTop: '5rem', fontSize: '50px' }} >
            Testimonials
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          {testimonials?.map((testimonial: any, index: number) => (
            <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex' }}>
              <Card sx={{ flexGrow: 1 }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary" sx={{ color: 'black' }}>
                    {testimonial?.client_says}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pr: 2 }}>
                  <CardHeader
                    avatar={<Avatar src={testimonial?.profile_photo} />}
                    title={
                      <Typography variant="h5" sx={{ color: 'black' }}>
                        {testimonial.client_name}
                      </Typography>
                    }
                    subheader={
                      <Typography variant="body2" sx={{ color: 'black' }}>
                        {testimonial?.client_plan}
                      </Typography>
                    }
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>

  );

  if (withLayout) {
    return (

      <Wrapper>

        {testimonialContent}
      </Wrapper>
    );
  } else {
    return testimonialContent;
  }
};

export default index
