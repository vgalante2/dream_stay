import React from 'react'
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Dashboard from "../components/Dashboard";


function Home() {
    return (
        <>
      <Navbar />
      <Dashboard />
      <BottomNav />
      </>
      );
}


export default Home;