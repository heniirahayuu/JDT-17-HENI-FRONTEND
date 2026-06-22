import React from 'react'
import Header from '../header';
import { Outlet } from 'react-router';
import Footer from '../footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout