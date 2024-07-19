

import { Avatar, Paper } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router'; 
import { useCategories } from '@/api/hooks/home/hooks';
const Sidebar = () => {
    const router = useRouter(); 
    const { categories, isLoading, isError } = useCategories()
    const handleCategoryClick = (category_slug: any) => {
        router.push(`/insurance?category=${category_slug}`); 
    };

    return (
        <>
            <h1 style={{ color: 'black', display: 'flex', justifyContent: 'center' }}>Categories</h1>
           
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                <Paper
                    sx={{ display: 'flex', alignItems: 'center', color: 'black', padding: '1rem', fontSize: '22px', width: '18rem' }}
                    onClick={() => router.push('/insurance')} 
                    style={{ cursor: 'pointer' }}
                >
                    All Categories
                </Paper>
            </div>
            
            {categories?.categories.map((item: { slug: any; logo_path: string | undefined; category_name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
                <div
                    key={index}
                    style={{ display: 'flex', alignItems: 'center', marginTop: '1rem', cursor: 'pointer' }}
                    onClick={() => handleCategoryClick(item.slug)} 
                >
                    <Paper
                        sx={{ display: 'flex', alignItems: 'center', color: 'black', padding: '1rem', fontSize: '22px', width: '18rem' }}
                    >
                        <Avatar alt="Category Logo" src={item.logo_path} sx={{ marginRight: '1rem' }} />
                        {item.category_name}
                    </Paper>
                </div>
            ))}
        </>
    );
};

export default Sidebar;

