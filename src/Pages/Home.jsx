import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import AlertBox from "../components/AlertBox";

function Home() {

  const [showAlert, setShowAlert] = useState(false);
  const [homesData, setHomesData] = useState(null); // State to hold the fetched data

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetch('https://dream-stay-flame.vercel.app/')
      .then(response => response.json())
      .then(data => {
        setHomesData(data); // Store the fetched data in the state
        console.log(data);
      })
      .catch(error => console.error('Error fetching data:', error));

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
      <Dashboard homesData={homesData} /> {/* Pass the data as a prop to the Dashboard component */}
      <Footer />
      <BottomNav />
    </>
  );
}


export default Home;