import React from "react";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Manfacture from "./components/Manfacture";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=''>
        <Navbar />
        <Header />
        <Feature />
        <Manfacture />
        <Services />
        <Footer />
    </div>

  );
}

export default App;
