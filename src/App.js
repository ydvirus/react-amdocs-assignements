import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'
import Home from './pages/Home/Home';

const App = ()=> {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App


