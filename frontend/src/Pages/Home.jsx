import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import AlertBox from "../components/AlertBox";

function Home() {

  const [showAlert, setShowAlert] = useState(false);
  const [homesData, setHomesData] = useState(null); // State to hold the fetched data

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dream-stay-flame.vercel.app/');
        const data = await response.json();
        setHomesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loading) {
        setShowAlert(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [loading]);
  
  return (
    <>
      {showAlert && (
        <AlertBox
          message="the dev is still working on this"
          onClose={() => setShowAlert(false)}
        />
      )}
      <Navbar />
      <Dashboard homesData={homesData} /> {/* Pass the data as a prop to the Dashboard component */}
      <Footer />
      <BottomNav />
    </>
  );
}


export default Home;