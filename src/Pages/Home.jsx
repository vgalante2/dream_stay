import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import AlertBox from "../components/AlertBox";

function Home() {

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
    return (
        <>
        {showAlert && (
        <AlertBox
          message="the dev is still working on this"
          onClose={() => setShowAlert(false)}
        />
      )}
      <Navbar />
      <Dashboard />
      <Footer />
      <BottomNav />
      </>
      );
}


export default Home;