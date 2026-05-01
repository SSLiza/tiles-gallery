import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <>
          <Navbar/>  
          <main>{children}</main>
          <Footer/>
        </>
    );
};

export default MainLayout;