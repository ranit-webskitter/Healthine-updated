

import { Avatar, Paper } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router'; 
import { useCategories } from '@/api/hooks/home/hooks';
const Sidebar = () => {
    const router = useRouter(); 
    const isActive = (href: string) => {
        return router.asPath === href;
    };

    const getLinkColor = (slug: string) => {
        // return isActive(`/insurance?category=${slug}`) ? '#0c589c' : 'initial';
        if (slug) {
            return isActive(`/insurance?category=${slug}`) ? '#ffab00' : 'initial';
        } else {
            return isActive('/insurance') ? '#ffab00' : 'initial';
        }
    };
    const { categories, isLoading, isError } = useCategories()
    const handleCategoryClick = (category_slug: any) => {
        router.push(`/insurance?category=${category_slug}`); 
        
    };

    return (
        <>
            <h1 style={{ color: 'black', display: 'flex', justifyContent: 'center' }}>Categories</h1>
           
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                <Paper
                    sx={{ display: 'flex', alignItems: 'center', color: 'black', padding: '1rem', fontSize: '22px', width: '18rem', backgroundColor: getLinkColor('') }}
                    onClick={() => router.push('/insurance')} 
                    style={{ cursor: 'pointer' }}
                >
                    All Categories
                </Paper>
            </div>
            
            {categories?.categories.map((item: { slug: any; logo_path: string | undefined; category_name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
                <div
                    key={index}
                    style={{ display: 'flex', alignItems: 'center', marginTop: '1rem', cursor: 'pointer'}}
                    onClick={() => handleCategoryClick(item.slug)} 
                >
                    <Paper
                        sx={{ display: 'flex', alignItems: 'center', color: 'black', padding: '1rem', fontSize: '22px', width: '18rem', backgroundColor: getLinkColor(item.slug)}}
                    >
                        <Avatar alt="Category Logo" src={item.logo_path} sx={{ marginRight: '1rem',backgroundColor:'#230b61',objectFit:'contain',padding:'8px' }} />
                        {item.category_name}
                    </Paper>
                </div>
            ))}
        </>
    );
};

export default Sidebar;

