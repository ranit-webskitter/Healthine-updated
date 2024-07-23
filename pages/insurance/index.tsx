
import React, { useEffect, useState } from 'react';
import Wrapper from '@/layout/wrapper/wrapper';
import { useRouter } from 'next/router'; 
import {
    Card,
    CardContent,
    Typography,
    Grid,
    CardMedia,
    Container,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
    SelectChangeEvent,
} from '@mui/material';
import { CardActionArea, CardActions } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from 'next/link';
import { useInsurance } from '@/api/hooks/insurances/hooks';
import Sidebar from './sidebar';

const Index = () => {
    const router = useRouter(); 
    const [selectedPlan, setSelectedPlan] = useState('');
    // const mutation = useInsurancesMutation();
    const queryCategory = router.query.category;
    const {insurance}=useInsurance({
        state_slug: null,
        category_slug: queryCategory || null,
        category_ids: null,
    })
    console.log(insurance)
   
    

    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedPlan(event.target.value);
    };

    return (
        <Wrapper>
            <Container sx={{ marginTop: '5rem' }} maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9} xl={9}>
                    <h3 style={{color:'black'}}>Total {insurance?.insuranceList.data.length} plans are there</h3>
                        {insurance?.insuranceList.data.map((insuranceItem: { id: React.Key | null | undefined; company_logo_path: string | undefined; plans: any[]; insurance_name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; category: { category_name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }; short_desc: any; pdf: string | undefined; }) => (
                            <Paper elevation={5} key={insuranceItem.id}>
                                
                                <Grid container spacing={2} sx={{ marginTop: '1rem', padding: '1rem' }}>
                                    <Grid item xs={12} md={4} xl={4}>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={insuranceItem?.company_logo_path}
                                            alt="Company Logo"
                                            sx={{ objectFit: 'contain' }}
                                        />
                                        <Box sx={{ minWidth: 120, marginTop: '1rem' }}>
                                            <FormControl fullWidth>
                                                <InputLabel id={`plan-select-label-${insuranceItem.id}`} sx={{ color: 'black' }}>
                                                    Plans
                                                </InputLabel>
                                                <Select
                                                    labelId={`plan-select-label-${insuranceItem.id}`}
                                                    sx={{ color: 'black' }}
                                                    id={`plan-select-${insuranceItem.id}`}
                                                    value={selectedPlan}
                                                    onChange={(event) => handleChange(event)}
                                                    label="Plans"
                                                >
                                                    {insuranceItem.plans.map((plan) => (
                                                        <MenuItem key={plan.id} value={plan.plan_name} sx={{ color: 'black' }}>
                                                            {plan.plan_name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            {selectedPlan &&
                                                insuranceItem.plans.find((plan) => plan.plan_name === selectedPlan) && (
                                                    <Typography sx={{ marginTop: '0.5rem', color: 'blue' }}>
                                                        Price: ${insuranceItem.plans.find((plan) => plan.plan_name === selectedPlan)?.price} per month
                                                    </Typography>
                                                )}
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <Card>
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h3" component="div" style={{ color: 'black' }}>
                                                        {insuranceItem.insurance_name}
                                                    </Typography>
                                                    <Typography sx={{ color: 'red' }}>
                                                        Category Name: {insuranceItem.category?.category_name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <div dangerouslySetInnerHTML={{ __html: insuranceItem.short_desc }} />
                                                    </Typography>
                                                    {selectedPlan &&
                                                        insuranceItem.plans.find((plan) => plan.plan_name === selectedPlan) && (
                                                            <>
                                                                <Typography variant="body2" sx={{ fontWeight: 'bolder', fontSize: '16px', color: 'green' }}>
                                                                    Benefits:
                                                                </Typography>
                                                                {insuranceItem.plans
                                                                    .find((plan) => plan.plan_name === selectedPlan)
                                                                    ?.benifit_array.map((item:any, index:number) => (
                                                                        <Typography key={index} sx={{ color: 'black' }}>
                                                                            <KeyboardDoubleArrowRightIcon sx={{ verticalAlign: 'middle', color: 'green' }} /> {item}
                                                                        </Typography>
                                                                    ))}
                                                            </>
                                                        )}
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} md={2} xl={2}>
                                        <CardActions>
                                            <Button variant="contained" component={Link} href={`/insurance/${insuranceItem?.id}`} sx={{ backgroundColor: '#16a6df', borderRadius: '0' }}>
                                                Details
                                            </Button>
                                            <Button component={Link} href={insuranceItem?.pdf} target="_blank">
                                                <PictureAsPdfIcon />
                                            </Button>
                                        </CardActions>
                                    </Grid>
                                </Grid>
                            </Paper>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={3} xl={3}>
                        <Sidebar  /> 
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    );
};

export default Index;
