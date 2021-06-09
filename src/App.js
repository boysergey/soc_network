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
import Music from './components/Music/Music'

let SomeComponent = () => <Dialogs/>
/*let SomeComponent = () => <Content/>
let SomeComponent = () => <Friends/>
let SomeComponent = () => <Groups/>
let SomeComponent = () => <News/>
let SomeComponent = () => <Music/>*/




function App(props) {
  return (
    <BrowserRouter> {
      <div className="app-wrapper">
        <Header/>
        <wrapper>
          <Navbar/>

          <div className="app-wrapper_content">
            <Route path="/dialogs" render={SomeComponent}/>
            <Route path="/content" render={() => <Content/>}/>
            <Route path="/friends" render={() => <Friends/>}/>
            <Route path="/groups" render={() => <Groups/>}/>
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
          </div>
        </wrapper>
        <Footer/>
      </div>
    }</BrowserRouter>

  );
}

export default App;