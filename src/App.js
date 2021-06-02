import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Groups from './components/Groups/Groups';
import News from './components/News/News';
import Music from './components/Music/Music';


function App(props) {
  return (
    <BrowserRouter> {
      <div className="app-wrapper">
        <Header/>
        <main>
          <Navbar/>

          <div className="app-wrapper_content">
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/content" component={Content} />
            <Route path="/friends" component={Friends} />
            <Route path="/groups" component={Groups} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
          </div>
        </main>
        <Footer/>

      </div>
    }</BrowserRouter>

  );
}

export default App;