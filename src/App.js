 import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Content from './components/Content/Content';


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