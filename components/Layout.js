'use client';
import React from 'react';
import Header from "../components/Header"


const Layout = ({ title, description, children }) => {
    return (
        <>
            <head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:site_name" content="portfolio" />
                <meta property="og:description" content={description} />
            </head>

            <div className='relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light dark:bg-gray-900 dark:text-white antialiased font-montserrat'>

                <div className='w-full h-full'>
                    <Header />
                    {children}
                </div>

            </div>
        </>
    );
};

export default Layout;
