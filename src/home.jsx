import React from 'react';
import Navbar from './components/navbar';
import Cards from './components/cards';
import Footer from './components/footer';

function Home() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
