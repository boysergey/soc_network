import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Content from './components/Content';


function App() {
  return (
    <body>
        <Header/>
        <main>
          <Navbar/>
          <Content/>
        </main>
        <Footer/>

    </body>
  );
}

export default App;