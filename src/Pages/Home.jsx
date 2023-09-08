import React from 'react'
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
      <Navbar />
      <Dashboard />
      <Footer />
      <BottomNav />
      </>
      );
}


export default Home;