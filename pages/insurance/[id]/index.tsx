

import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Wrapper from '@/layout/wrapper/wrapper'
import { Accordion, AccordionDetails, AccordionSummary, Button, CardMedia, Container, Divider, Grid, Paper, Tooltip, Typography } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link'
import { styled } from '@mui/material/styles';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { useInsuranceDetails } from '@/api/hooks/insurances/hooks';
import { useAddToCartMutation, useAddToCartSessionMutation } from '@/api/hooks/cart/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { check_token } from '@/rdux-toolkit/slices/userSlice';
const MyTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const Index = () => {
  const router = useRouter()
  const dispatch=useDispatch()
  const { id } = router.query
  const { insuranceDetails, isLoading, refetch } = useInsuranceDetails(id)
  const { isLoggedIn } = useSelector((state: any) => state.userSlice)
  const mutation = useAddToCartMutation()
  const sessionCartMutation=useAddToCartSessionMutation()
  // useEffect(() => {
  //   if (id) {
  //     refetch();
  //   }

  // }, [ id,refetch]);
  console.log(insuranceDetails)

  const handleAddToCart = (product: { plan_name?: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; pdf_path?: string | undefined; price?: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined; policy_details?: any; benifit_array?: string[]; insurance_id?: any; id?: any; }) => {
    const dataToAdd: { insurance_id: string, insurance_plans_id: string, insurance_add_ons_id: null } = {
      insurance_id: `${product?.insurance_id}`,
      insurance_plans_id: `${product?.id}`,
      insurance_add_ons_id: null
    }
    isLoggedIn && mutation.mutate(dataToAdd)
    // console.log('from cart', dataToAdd)

    const dataToAddSessionCart: { insurance_id: string, insurance_plans_id: string, insurance_add_ons_id: null } = {
      insurance_id: `${product?.insurance_id}`,
      insurance_plans_id: `${product?.id}`,
      insurance_add_ons_id: null
    }
    
    !isLoggedIn && sessionCartMutation.mutate(dataToAddSessionCart)      
  }

  React.useEffect(() => {
    dispatch(check_token())
  }, [dispatch])

  console.log('sessioncartMutation',sessionCartMutation)
  return (
    <Wrapper>
      <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
        {!isLoading && <Grid container spacing={2}>
          <Grid item xs={12} md={10} xl={10} sx={{ marginTop: '4rem' }}>
            <Paper elevation={3} sx={{ padding: '2rem' }}>
              <Grid container spacing={2}>
                <Grid xs={12} md={4} xl={4} sx={{ marginTop: '4rem' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    // width="280"
                    image={insuranceDetails?.insuranceDetails.company_logo_path}
                    alt="Company Logo"
                    sx={{ objectFit: 'contain' }}
                  />
                </Grid>
                <Grid xs={12} md={8} xl={8} sx={{ backgroundColor: '#f3c596' }}>
                  <Typography variant='h1' sx={{ color: 'black', display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                    {insuranceDetails?.insuranceDetails.insurance_name}
                  </Typography>
                  <Typography variant='h3' sx={{ color: 'black', display: 'flex', justifyContent: 'center' }}>
                    {insuranceDetails?.insuranceDetails.short_desc}
                  </Typography>
                  {/* <Typography sx={{ color: 'black' }}>
                <PeopleAltIcon sx={{ color: 'blue', verticalAlign: 'middle', marginLeft: '40%' }} />{insuranceDetails?.insuranceDetails.enroll}
              </Typography> */}
                  <Typography sx={{ color: 'black', margin: '1rem' }}>
                    {insuranceDetails?.insuranceDetails.benifits.replaceAll(',', ' || ')}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              {/* <Typography sx={{ color: 'black', margin: '1rem' }}>
            {insuranceDetails?.insuranceDetails.short_desc}
          </Typography> */}
              <Typography variant="body2" sx={{ fontWeight: 'bolder', fontSize: '16px', color: 'green', padding: '1rem 3rem' }}>
                Benefits:
              </Typography>
              {insuranceDetails?.insuranceDetails.benifit_array?.map((item: string, index: number) => (
                <Typography key={index} sx={{ color: 'black', paddingLeft: '3rem' }}>
                  <KeyboardDoubleArrowRightIcon sx={{ verticalAlign: 'middle', color: 'green' }} />
                  {item}
                </Typography>
              ))}
              {insuranceDetails?.insuranceDetails?.plans.map((item: { plan_name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; pdf_path: string | undefined; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; policy_details: any; benifit_array: string[] }, index: React.Key | null | undefined) => (
                <Accordion key={index} sx={{ margin: '1rem 2rem', backgroundColor: '#f3c596' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-${index}-content`}
                    id={`panel-${index}-header`}
                  >
                    <Typography variant='h3' sx={{ color: 'green', display: 'flex', justifyContent: 'center', paddingTop: '2rem' }}>
                      {item?.plan_name}
                      <Button component={Link} href={item?.pdf_path} target="_blank">
                        <PictureAsPdfIcon sx={{ color: 'red', verticalAlign: 'middle' }} />
                      </Button>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails >
                    <Typography variant='h3' sx={{ color: 'red', display: 'flex', justifyContent: 'center', paddingTop: '1rem' }}>
                      $ {item?.price}/month
                    </Typography>
                    <Button
                      variant='contained'

                      sx={{ my: 2, display: 'block', marginLeft: '43%', marginRight: '30%' }}
                      onClick={() => handleAddToCart(item)}
                    >
                      <Typography sx={{ color: 'white', padding: '0rem 1rem' }}>Add</Typography>
                    </Button>
                    <div dangerouslySetInnerHTML={{ __html: item.policy_details }} style={{ color: 'black', padding: '1rem' }} />
                    <Typography variant="body2" sx={{ fontWeight: 'bolder', fontSize: '16px', color: 'green', paddingLeft: ' 3rem', paddingBottom: '1rem' }}>
                      Benefits:
                    </Typography>
                    {item?.benifit_array?.map((benefit: string, idx: number) => (
                      <Typography key={idx} sx={{ color: 'blue', paddingLeft: '3rem' }}>
                        <CheckCircleOutlineIcon sx={{ verticalAlign: 'middle', color: 'green', marginRight: '1rem' }} />
                        {benefit}
                      </Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Paper>
          </Grid>
          <Grid xs={12} md={2} xl={2} sx={{ marginTop: '4rem' }}>
            <Paper elevation={3} sx={{ marginLeft: '1rem', padding: '1rem', width: '16rem' }}>
              <Typography component='h1' sx={{ color: 'black', fontWeight: 'bold',marginBottom:'2rem' }}>
                We Are Available in...
              </Typography>


              {/* {insuranceDetails?.insuranceDetails.states?.map((item: { phone: string | number, state_name: string }) => {
                return (
                  <>
                    <MyTooltip title={`Contact No: ${item?.phone}`} >
                    
                      <Paper sx={{ margin: '2px', width: '12rem', marginTop: '1rem' }} elevation={4}  >
                        <Typography sx={{ fontSize: '22px', padding: '6px', color: 'black' }}>
                          {item?.state_name}
                        </Typography>


                      </Paper>
                    </MyTooltip>
                  </>
                )
              })} */}
              <Grid container spacing={2}>
                {insuranceDetails?.insuranceDetails?.states?.map((item: { state_name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
                  <Grid item key={index} xs={12} sm={6} md={6} lg={6}>
                    <Paper sx={{ padding: '3px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)',border:'1px solid blue' }}>
                      <Typography variant="h6" sx={{ marginBottom: '8px', color: 'blue' }}>
                        {item.state_name}
                      </Typography>

                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        }
      </Container>
    </Wrapper>
  )
}

export default Index;
