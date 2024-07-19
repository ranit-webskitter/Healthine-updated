import React, { useEffect, useState } from 'react'
import Wrapper from '@/layout/wrapper/wrapper'
import { useEmptyCartMutation, useRemoveCartElementMutation, useViewCart } from '@/api/hooks/cart/hooks'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Divider, FormControl, Grid, InputLabel, Paper, Select, Typography } from '@mui/material'
import Link from 'next/link';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';
const index = () => {
    const [cart,setCart]=useState<any>()
    const { cartElement, isLoading, isError,refetch } = useViewCart()
    useEffect(()=>{
        if (!isLoading && !isError) {
            setCart(cartElement);
        }
    },[cartElement,refetch,isLoading,isError])
   
    
    const mutation=useEmptyCartMutation()
    const removeCartElemMutation=useRemoveCartElementMutation()
    const handleEmptyCart=()=>{
      
        mutation.mutate()
        refetch()
    }

    const handleSingleCartDelete=(id:string)=>{
        console.log(id)
        removeCartElemMutation.mutate({"cartId":`${id}`})
        // cartId

    }
    console.log('from cart', cartElement)
    return (
        <>
            <Wrapper>
                <>
                    <Container sx={{ marginTop: '5rem' }}>
                        <Button variant="contained" sx={{ backgroundColor: '#16a6df', borderRadius: '0' }} onClick={handleEmptyCart}>
                            <DeleteIcon /> Empty Cart
                        </Button>
                        {cart?.userCarts?.map((insuranceItem: { id: React.Key | null | undefined; insurance: { company_logo_path: string | undefined; insurance_name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; short_desc: any; }; insurance_plan: { plan_name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; benifit_array: (string | number | bigint | boolean | React.ReactPortal | Promise<React.AwaitedReactNode> | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined)[]; pdf_path: string | undefined; }; category: { insurance: { category_name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }; }; }) => (
                            <Paper elevation={5} key={insuranceItem.id}>

                                <Grid container spacing={2} sx={{ marginTop: '1rem', padding: '1rem' }}>
                                    <Grid item xs={12} md={4} xl={4}>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={insuranceItem?.insurance?.company_logo_path}
                                            alt="Company Logo"
                                            sx={{ objectFit: 'contain' }}
                                        />
                                        <Divider />
                                        <Box sx={{ minWidth: 120, marginTop: '1rem' }}>
                                            <Typography variant='h3' sx={{ color: 'black' }}> Choosed Plan: {insuranceItem?.insurance_plan?.plan_name}</Typography>
                                            <Typography variant='h2' sx={{ color: 'red', fontSize: '26px', marginLeft: '5%', marginTop: '2rem' }} >Price: ${insuranceItem?.insurance_plan?.price}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <Card>
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h3" component="div" style={{ color: 'black' }}>
                                                        {insuranceItem?.insurance?.insurance_name}
                                                    </Typography>
                                                    <Typography sx={{ color: 'red' }}>
                                                        Category Name: {insuranceItem.category?.insurance?.category_name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <div dangerouslySetInnerHTML={{ __html: insuranceItem?.insurance?.short_desc }} />
                                                    </Typography>



                                                    <Typography variant="body2" sx={{ fontWeight: 'bolder', fontSize: '16px', color: 'green' }}>
                                                        Benefits:
                                                    </Typography>



                                                    {
                                                        insuranceItem?.insurance_plan?.benifit_array?.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                                                            <Typography key={index} sx={{ color: 'black' }}>
                                                                <KeyboardDoubleArrowRightIcon sx={{ verticalAlign: 'middle', color: 'green' }} /> {item}
                                                            </Typography>
                                                        ))
                                                    }


                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} md={2} xl={2}>
                                        <CardActions>
                                            <Button variant="contained" sx={{ backgroundColor: '#16a6df', borderRadius: '0' }} onClick={()=>handleSingleCartDelete(insuranceItem?.id)} >
                                                <DeleteIcon />
                                            </Button>
                                            <Button component={Link} href={insuranceItem?.insurance_plan.pdf_path} target="_blank">
                                                <PictureAsPdfIcon />
                                            </Button>
                                        </CardActions>
                                    </Grid>
                                </Grid>
                            </Paper>
                        ))}
                    </Container>
                </>
            </Wrapper>
        </>
    )
}

export default index
