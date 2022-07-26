import React from "react";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Manfacture from "./components/Manfacture";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className=''>
        <Navbar />
        <Header />
        <Feature />
        <Manfacture />
        <Services />
    </div>

  );
}

export default App;
